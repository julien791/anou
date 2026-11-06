#!/usr/bin/env bash
# Builds the placeholder "animated poster" hero loops from the stills in photos/.
# Each loop is 6 s, muted, 720x900, a slow push-in (the loop point is a soft cut;
# real footage replaces these). Stand-ins until real clips are sourced (see README).
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p video
loop() { # name still zoom-direction
  local name=$1 src=photos/$2.jpg
  local vf="scale=1440:1800:force_original_aspect_ratio=increase,crop=1440:1800,zoompan=z='min(zoom+0.0009,1.16)':x='iw/2-(iw/zoom/2)+$3*on':y='ih/2-(ih/zoom/2)':d=180:s=720x900:fps=30,format=yuv420p"
  ffmpeg -y -loglevel error -loop 1 -i "$src" -vf "$vf" -t 6 -an -c:v libx264 -crf 30 -preset slow -movflags +faststart "video/$name.mp4"
  ffmpeg -y -loglevel error -i "video/$name.mp4" -an -c:v libvpx-vp9 -b:v 0 -crf 42 -row-mt 1 "video/$name.webm"
}
loop landing lagoon-aerial 0.4
loop calm calm-lagoon -0.3
loop windy kitesurf 0.6
ls -la video
