# M0 · Three concept directions

Exploratory pass before Brand ships a direction. Same four screens, same copy, three points of view.

| | Idea | Photo vs panel | Hand-made accent | Conditions-matched hero |
|---|---|---|---|---|
| [A · Window](a/README.md) | The photo is the room; the UI is a paper sheet laid on it | ~80 / 20 | Low (stamps only) | Full-bleed clip behind the headline, with a "clip matched to" line |
| [B · Postmark](b/README.md) | Every day is a postcard home | ~45 / 55 | High (perforations, ink, postmarks) | Clip inside a perforated stamp, franked by a postmark that names the condition |
| [C · Sega](c/README.md) | Today's condition is one huge word | ~60 / 40 | Medium (colour blocks, arches) | Clip plays *inside* the letters of the condition word, plus a wind-by-coast dial |

**Review without running anything:** `*/shots/*.png` (2x, 390 px wide). `{screen}.png` is the
first viewport, what you see on open; `{screen}-full.png` is the whole scroll.
`brief-windy` is the same brief on a windy day, to show the hero switching.

**Run it:** open `index.html` in a browser, or `python3 -m http.server` from the repo root and
visit `/design/concepts/`. No build step. Brief screens take `?c=calm` or `?c=windy`.

**Shared pieces** (`shared/`): `conditions.js` holds the calm and windy brief content and wires
the hero clip, `icons.js` and `stamps.js` are placeholder line icons and stamp motifs,
`make-loops.sh` builds the placeholder hero loops from stills with ffmpeg.

**Imagery:** photos are Wikimedia Commons, freely licensed, credited per file in
`shared/photos/CREDITS.md`. Hero "video" is an animated poster: a 6 s push-in on a still
(about 50 KB mp4, 17 KB webm), so the motion rules can be judged before real footage exists.
Screenshots are taken with reduced motion, so they show the poster frame.

Copy is placeholder in the house tone; the real microcopy lands in `design/copy.md` at M1.
