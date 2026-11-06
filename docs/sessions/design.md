# Design session brief

**Model:** Opus 5.5 · **Branch:** `design` · **Owns:** `docs/02-interface.md`, `design/`

## Read first
`docs/00-vision.md`, `docs/01-experience.md`, `docs/02-interface.md`.

## Goal
Turn the experience spec into an interface the frontend session can build without guessing.

## Milestone 1 deliverables
1. `design/tokens.json` with light and dark values. Palette must feel Mauritian and pass
   WCAG AA; document the reasoning in a short `design/README.md`.
2. HTML prototypes in `design/screens/` for: landing page from QR (with iOS and Android
   install flows), morning brief home, Tonight, Passport overview and stamp-earned moment.
   Plain HTML and CSS, mobile-first at 390 px, using the tokens via CSS custom properties.
   No build step, no framework.
3. `design/copy.md`: tone guide, all microcopy for those five screens in EN and FR, the
   notification permission ask, and 10 sample morning briefs plus 10 Tonight messages that
   obey the length and tone rules in `docs/01-experience.md §2–3`.
4. Rewrite `docs/02-interface.md` from brief into spec: component inventory, states, and
   the notification text treatments.

## Milestone 2
Explore, listing detail, Kreol word card, settings, host page (guest view).

## Milestone 3
Host editor, business dashboard, boost purchase flow.

## Constraints
- Spend most effort on the landing page and install flow; it is where the funnel leaks.
- Stamps need a visual system that works at 48 px and as a full-screen reward.
- Do not design features not in the experience spec. Propose them under Open questions.

## Report to
The product session, per `docs/sessions/README.md §5`.
