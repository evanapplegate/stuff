# Married Under Conifers

Interactive MapLibre map of California wedding venues set in or beside conifer canopy
(coast redwood, pine, cedar, fir), for the SF Bay Area + Santa Cruz Mountains and
greater Los Angeles (LA, SFV, SGV, OC, Ventura/Ojai, Angeles Forest), plus the
San Bernardino Mountains and Idyllwild as bonus conifer country.

**Open `index.html`** — fully self-contained (data inlined), works from file://,
GitHub Pages, or any static host. Only external dependency is the MapLibre GL JS
script from cdnjs and Google Fonts.

## Layers

- **Conifer canopy** — LANDFIRE LF2025 Existing Vegetation Type (EVT, 30 m, USGS/USFS),
  clipped via the LANDFIRE Product Service API, classed by `EVT_PHYS`:
  `Conifer` → conifer, `Conifer-Hardwood` → mixed, any `EVT_NAME` containing
  "Redwood" → redwood. Downsampled to ~60–80 m, sieved, polygonized, simplified.
  Canopy is only mapped inside the dashed coverage extents.
  (NLCD "evergreen forest" was rejected: in coastal California it lumps live-oak
  woodland in with conifers; EVT physiognomy separates them.)
- **Venues** — compiled from Here Comes The Guide, The Knot, WeddingWire, venue
  sites, and photographers' venue guides; geocoded with Nominatim/US Census.
  Solid dot = native canopy, open ring = planted grove. Click a dot for links.
- **Base** — US Census TIGER/cb counties + Natural Earth land, drawn as a custom
  minimal style (no tile server needed).

## Rebuild

```
pipeline/poll_lfps.sh           # LANDFIRE Product Service job download (edit job IDs)
python3 pipeline/process_evt.py # EVT GeoTIFF+VAT -> canopy_*.geojson
python3 pipeline/geocode.py data/venues.json data/venues_geocoded.json
python3 pipeline/build.py pipeline/template.html <maplibre.css> data/land_clip.geojson \
  data/counties_ca.geojson data/canopy_bay.geojson data/canopy_socal.geojson \
  data/venues.json index.html
```

Venue listings and links were verified against live pages in Oct 2026; always
confirm availability, pricing, and whether a venue still operates before booking.
