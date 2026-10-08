"""Assemble final self-contained index.html from template + data.
Usage: python3 build.py TEMPLATE MAPLIBRE_CSS COUNTIES CANOPY_BAY CANOPY_SOCAL VENUES OUT
"""
import json, sys

tpl, cssf, landf, countiesf, cbayf, csocalf, venuesf, outf = sys.argv[1:9]
html = open(tpl).read()
css = open(cssf).read()

def jmin(path):
    s = json.dumps(json.load(open(path)), separators=(",", ":"), ensure_ascii=False)
    return s.replace("</", "<\\/")

html = html.replace("/*__MAPLIBRE_CSS__*/", css)
html = html.replace("__LAND__", jmin(landf))
html = html.replace("__COUNTIES__", jmin(countiesf))
html = html.replace("__CANOPY_BAY__", jmin(cbayf))
html = html.replace("__CANOPY_SOCAL__", jmin(csocalf))
html = html.replace("__VENUES__", jmin(venuesf))

# artifact fragment (claude.ai adds its own skeleton)
open(outf + ".artifact.html", "w").write(html)
# standalone (repo / local / GitHub Pages)
standalone = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
              '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
              "</head>\n<body>\n")
head_end = html.index("</style>")  # move title/meta/link/styles into head
# split: everything up to end of last consecutive top block stays as-is inside body is fine for browsers,
# but cleanest: put whole content in body except <title> works anywhere; browsers hoist. Keep simple:
standalone = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
              '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
              '</head>\n<body style="margin:0">\n' + html + "\n</body>\n</html>\n")
open(outf, "w").write(standalone)
print(outf, len(standalone) // 1024, "KB")
