# Brand identity session brief

**Model:** Opus 5.5 · **Branch:** `brand` · **Owns:** `brand/`

## Read first
`docs/00-vision.md`, `docs/01-experience.md` (§4 Passport, §5 Kreol word), `docs/02-interface.md`
(principles only), `design/prompts/image-model-interface-proposals.md` for the visual
direction already sketched, and anything in `design/inspiration/`.

## Goal
A brand that feels unmistakably Mauritian and hand-made, works at 48 px as an app icon and
on a printed card at a hotel reception, and gives interface design a palette, type and
illustration system to build on rather than invent.

## Workstreams (fan out one subagent each, then reconcile)
1. **Strategy.** Positioning in one page: what Anou stands for, personality in five words,
   what it is not. Tone bridge to the Voice & copy session so words and visuals agree.
2. **Wordmark and symbol.** Three directions for "Anou": at least one wordmark-only, one
   with a symbol drawn from the island (not a dodo, not a palm, not a generic pin). Each as
   SVG, in colour, mono and reversed, plus app icon at 1024 and 48 px.
3. **Colour and type.** A palette of five core colours plus neutrals with WCAG AA pairings
   documented; type pairing (display plus body) with licensing that allows web embedding.
   Deliver as `brand/tokens.source.json`, which interface design turns into
   `design/tokens.json`.
4. **Stamp illustration system.** The rules for the 12 Passport stamps: shape, line weight,
   texture, colour usage, how a partner business stamp differs from a natural-site stamp.
   Draw stamps 1, 2 and 11 as proof.
5. **Applications.** QR room card (A6, both sides), counter sticker for stamp stations
   (round, 80 mm), a social card template for the Kreol word, and the install-guide
   illustrations (share, add to home screen, open).
6. **Guidelines.** `brand/README.md`: everything above, with do and don't examples, in a
   form a printer and a developer can both use.

## Milestone 1 (for your pick)
Three directions, each as one board: moodboard, wordmark, palette, one stamp, the room card.
Product shows them to the founder; the chosen direction proceeds to Milestone 2.

## Milestone 2
Full deliverables for the chosen direction across all six workstreams.

## Constraints
- Nothing that reads as a resort brand or an airline. Reference points are in
  `docs/02-interface.md`.
- Every colour and type choice must survive outdoor sunlight on a phone.
- Fonts: open licences or a named commercial licence with cost, no "we will sort it later".
- Record any constraint you impose on interface design in `docs/decisions/`.

## Tools
Figma, Canva and Adobe Express connectors may be attached to the session; use whichever
produces real SVG and print-ready PDF. HTML/SVG authored directly is fine too.

## Report to
The product session, per `docs/sessions/README.md §5`.
