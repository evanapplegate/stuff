#!/bin/bash
SP=/tmp/claude-0/-home-user-stuff/6bb95fa2-eb63-5bc4-bf8c-575959db866b/scratchpad
declare -A JOBS=(
 [bay]=20936b85-1a27-4c38-972c-b704d9b079e4
 [socal_w]=9bcc6aac-4da8-4793-82af-d58b0c14f498
 [socal_e]=e2aab6fa-b0f8-4be7-afca-0d143c43342c
 [mtns]=b5fd5d04-3ca9-428f-9798-9ee17dd36d60
)
for i in $(seq 1 90); do
  alldone=1
  for k in "${!JOBS[@]}"; do
    [ -f "$SP/lfps/$k.zip" ] && continue
    resp=$(curl -sS -G "https://lfps.usgs.gov/api/job/status" --data-urlencode "JobId=${JOBS[$k]}")
    st=$(echo "$resp" | python3 -c "import json,sys;d=json.load(sys.stdin);print(d['status'])" 2>/dev/null)
    url=$(echo "$resp" | python3 -c "import json,sys;d=json.load(sys.stdin);print(d.get('outputFile') or '')" 2>/dev/null)
    echo "$(date +%H:%M:%S) $k $st"
    if [ "$st" = "Succeeded" ] && [ -n "$url" ]; then
      mkdir -p "$SP/lfps/$k"
      curl -sS -L "$url" -o "$SP/lfps/$k.zip" && echo "$k downloaded $(du -h $SP/lfps/$k.zip | cut -f1)"
    elif [ "$st" = "Failed" ]; then
      echo "$resp" > "$SP/lfps/$k.FAILED.json"; echo "$k FAILED"
    else
      alldone=0
    fi
  done
  [ $alldone -eq 1 ] && { echo ALL_DONE; exit 0; }
  sleep 20
done
echo TIMEOUT; exit 1
