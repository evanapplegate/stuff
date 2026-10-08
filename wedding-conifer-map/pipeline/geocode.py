"""Geocode venues lacking lat/lon. Nominatim (name+city) first, Census (address) fallback.
Usage: python3 geocode.py merged_raw.json venues_geocoded.json
"""
import json, sys, time, urllib.parse, urllib.request

UA = {"User-Agent": "conifer-wedding-map/1.0 (one-off research script)"}
BOXES = {  # sanity boxes per region
    "Santa Cruz Mountains": (-122.6, 36.85, -121.6, 37.6),
    "SF Bay Area": (-123.2, 37.0, -121.5, 38.6),
    "Los Angeles": (-119.0, 33.6, -117.9, 34.4),
    "San Fernando Valley": (-118.8, 34.1, -118.2, 34.4),
    "San Gabriel Valley": (-118.3, 34.0, -117.6, 34.3),
    "Angeles Forest & Mt Baldy": (-118.4, 34.1, -117.4, 34.6),
    "Orange County": (-118.15, 33.3, -117.4, 34.0),
    "Ventura & Ojai": (-119.8, 34.0, -118.6, 34.9),
    "San Bernardino Mtns (bonus)": (-117.5, 34.1, -116.6, 34.4),
    "Idyllwild (bonus)": (-116.85, 33.6, -116.6, 33.85),
}

def get(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

def nominatim(q, box=None):
    u = "https://nominatim.openstreetmap.org/search?format=jsonv2&limit=3&countrycodes=us&q=" + urllib.parse.quote(q)
    try:
        res = get(u)
    except Exception as e:
        print("  nominatim err", e); return None
    for r in res:
        lat, lon = float(r["lat"]), float(r["lon"])
        if box and not (box[0] <= lon <= box[2] and box[1] <= lat <= box[3]):
            continue
        return lat, lon, r.get("display_name", "")[:60]
    return None

def census(addr):
    u = ("https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?benchmark=Public_AR_Current&format=json&address="
         + urllib.parse.quote(addr))
    try:
        res = get(u)
        m = res["result"]["addressMatches"]
        if m:
            c = m[0]["coordinates"]
            return float(c["y"]), float(c["x"]), "census"
    except Exception as e:
        print("  census err", e)
    return None

def main(inp, outp):
    vs = json.load(open(inp))
    misses = []
    for v in vs:
        if v.get("lat") and v.get("lon"):
            continue
        box = BOXES.get(v["region"])
        city = v.get("city", "")
        hit = nominatim(f'{v["name"]}, {city}, California', box); time.sleep(1.1)
        if not hit and v.get("address"):
            hit = nominatim(f'{v["address"]}, {city}, CA', box); time.sleep(1.1)
        if not hit and v.get("address"):
            hit = census(f'{v["address"]}, {city}, CA')
        if not hit:
            hit = nominatim(f'{v["name"]}, California', box); time.sleep(1.1)
        if hit:
            v["lat"], v["lon"] = round(hit[0], 5), round(hit[1], 5)
            v["_geosrc"] = hit[2]
            print("OK ", v["name"], "->", v["lat"], v["lon"], "|", hit[2])
        else:
            misses.append(v["name"])
            print("MISS", v["name"], "|", v.get("address", ""))
    json.dump(vs, open(outp, "w"), indent=1)
    print("\nMISSES:", len(misses), misses)

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
