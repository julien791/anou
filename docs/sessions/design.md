# Design session brief

**Model:** Opus 5.5 · **Branch:** `design` · **Owns:** `docs/02-interface.md`, `design/`

## Read first
`docs/00-vision.md`, `docs/01-experience.md`, `docs/02-interface.md`.

## Goal
Turn the experience spec into an interface the frontend session can build without guessing.

## Milestone 0 · Concept designs (start here)
Brand has not started yet, so this phase is exploratory and deliberately broad. Produce
**three distinct concept directions** for the app, each as a set of HTML prototypes in
`design/concepts/{a,b,c}/` covering the same four screens: landing page from QR (with the
install panel), morning brief home, Tonight, Passport overview. Each direction has a
one-page `README.md` stating its idea in two sentences, its palette, type and how it uses
photography and motion. All three are photo-led per `docs/02-interface.md` §3; vary the
balance of photo vs panel, the type personality, the amount of hand-made accent, and how
the conditions-matched hero (see §Motion) is expressed. Use licensed placeholder imagery
(Unsplash or similar, Mauritius subjects where possible, credited in the README) and a
muted looping placeholder video or an animated poster for the hero. Plain HTML and CSS,
mobile-first at 390 px, open in a browser with no build step. Take a 2x screenshot of each
screen into `design/concepts/{x}/shots/` with Playwright so the founder can review without
running anything. Open a pull request from branch `design` and report to Product.
Budget: this is a concept pass, not production. Favour breadth and a strong point of view
over polish.

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
