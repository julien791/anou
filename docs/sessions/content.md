# Content session brief

**Model:** Haiku 5.5 · **Branch:** `content` · **Owns:** `content/`

## Read first
`docs/01-experience.md` (§4, §5, §7), `docs/04-data-model.md`.

## Goal
Accurate, well-structured seed data so the brief has real things to suggest from day one.

## Milestone 1
1. `content/regions.yaml`: the five regions with rough polygons.
2. `content/stamps.yaml`: the 12 stamps from the experience spec with coordinates, radius,
   mode, a 2–3 sentence verified story each, and a linked Kreol word. If a listed stamp is
   wrong or impractical, propose a swap under Open questions rather than changing it alone.
3. `content/kreol_words.yaml`: 60 words and phrases with EN and FR meaning, one example
   sentence, tags matching brief moods and weather (sea, rain, food, greeting, market...).
   Spelling per Akademi Kreol Morisien.
4. `content/listings.yaml`: 40 west-coast listings (Flic en Flac to Le Morne, plus
   Chamarel and Black River Gorges) with mood, price band, hours, and a filled
   `suitability_json` (wind tolerance, needs calm sea, sunset side, best tide). Include at
   least 10 free or near-free options.
5. `content/events.yaml`: recurring weekly events in the west (sega nights, markets).

## Rules
- Facts only from sources you can cite; put the source URL in a `source` field. If you
  cannot verify, mark `verified: false`.
- Match the YAML field names in `docs/04-data-model.md` exactly. Do not add fields; propose
  them under Open questions.
- Do not write marketing copy. Descriptions are plain, specific, under 60 words.

## Milestone 2
North and south-west listings; festival calendar for the next 12 months.

## Report to
The product session, per `docs/sessions/README.md §5`.
