"""Turn LFPS EVT clips into simplified conifer-canopy GeoJSON.
Classes: 1=mixed conifer-hardwood, 2=conifer, 3=redwood (priority 3>2>1 on downsample).
"""
import csv, glob, json, os, sys, zipfile
import numpy as np
import rasterio
from rasterio.features import sieve, shapes
from shapely.geometry import shape, mapping
from shapely import set_precision
from shapely.ops import unary_union

SP = "/tmp/claude-0/-home-user-stuff/6bb95fa2-eb63-5bc4-bf8c-575959db866b/scratchpad"
OUT = os.path.join(SP, "out")
os.makedirs(OUT, exist_ok=True)

def load_region(key):
    zpath = f"{SP}/lfps/{key}.zip"
    d = f"{SP}/lfps/{key}"
    os.makedirs(d, exist_ok=True)
    zipfile.ZipFile(zpath).extractall(d)
    tif = glob.glob(f"{d}/**/*.tif", recursive=True)[0]
    import shapefile
    lut = np.zeros(65536, dtype=np.uint8)
    names = {}
    pr_counts = {}
    for dbfp in glob.glob(f"{d}/**/*.vat.dbf", recursive=True):
        r = shapefile.Reader(dbf=dbfp)
        fields = [f[0].lower() for f in r.fields[1:]]
        iv, iname, iphys = fields.index("value"), fields.index("evt_name"), fields.index("evt_phys")
        for rec in r.iterRecords():
            v, name, phys = rec[iv], str(rec[iname]), str(rec[iphys]).strip()
            cls = 0
            if "redwood" in name.lower():
                cls = 3
            elif phys == "Conifer":
                cls = 2
            elif phys == "Conifer-Hardwood":
                cls = 1
            if cls and 0 <= v < 65536:
                lut[v] = cls
                names[v] = (cls, name)
                pr_counts[phys] = pr_counts.get(phys, 0) + 1
    print(key, "attr rows mapped:", len(names), pr_counts)
    with rasterio.open(tif) as src:
        a = src.read(1)
        tr = src.transform
        crs = src.crs
    print(key, "raster", a.shape, crs)
    cls = lut[a.astype(np.uint16)]
    # priority space: mixed->1, conifer->2, redwood->3 already ordered
    cls = sieve(cls.astype(np.uint8), size=14, connectivity=8)
    # 3x block max downsample (~90 m)
    h, w = cls.shape
    H, W = h // 2, w // 2
    c = cls[: H * 2, : W * 2].reshape(H, 2, W, 2).max(axis=(1, 3))
    tr2 = tr * tr.scale(2, 2)
    return c, tr2, crs

def polys_for(c, tr2, tol, min_deg2):
    feats = []
    for cl in (1, 2, 3):
        mask = c == cl
        if not mask.any():
            continue
        geoms = []
        for g, v in shapes(mask.astype(np.uint8), mask=mask, transform=tr2, connectivity=8):
            s = shape(g)
            if s.area < min_deg2:
                continue
            geoms.append(s)
        if not geoms:
            continue
        u = unary_union(geoms).simplify(tol)
        u = set_precision(u, 0.0001)
        if u.is_empty:
            continue
        gs = list(u.geoms) if u.geom_type == "MultiPolygon" else [u]
        # keep as one multipolygon feature per class to minimize JSON overhead
        from shapely.geometry import MultiPolygon
        mp = MultiPolygon([g for g in gs if g.area >= min_deg2])
        if mp.is_empty:
            continue
        feats.append({"type": "Feature", "properties": {"c": cl}, "geometry": mapping(set_precision(mp, 0.0001))})
    return feats

def run(outname, keys, tol=0.0006, min_deg2=1.2e-6):
    all_feats = []
    for k in keys:
        c, tr2, crs = load_region(k)
        assert str(crs).endswith("4326"), crs
        all_feats += polys_for(c, tr2, tol, min_deg2)
    # merge features of same class across sub-regions
    byc = {}
    for f in all_feats:
        byc.setdefault(f["properties"]["c"], []).append(shape(f["geometry"]))
    feats = []
    for cl, gs in sorted(byc.items()):
        u = unary_union(gs)
        feats.append({"type": "Feature", "properties": {"c": cl}, "geometry": mapping(set_precision(u, 0.0001))})
    fc = {"type": "FeatureCollection", "features": feats}
    s = json.dumps(fc, separators=(",", ":"))
    # trim float noise from set_precision (e.g. 0.30000000000000004)
    import re
    s = re.sub(r"(\.\d{4})\d+", r"\1", s)
    path = os.path.join(OUT, outname)
    open(path, "w").write(s)
    print(outname, len(s) // 1024, "KB")

if __name__ == "__main__":
    which = sys.argv[1] if len(sys.argv) > 1 else "all"
    if which in ("all", "bay"):
        run("canopy_bay.geojson", ["bay"])
    if which in ("all", "socal"):
        run("canopy_socal.geojson", ["socal_w", "socal_e", "mtns"])
