# 02 · Interface brief

Owned by the **design session**. This file starts as a brief and becomes the interface spec
as the design session fills it in. Build sessions read it; they do not improvise UI.

## Principles

1. **The brief is the home screen.** Open the app and today's brief is already there. No
   splash, no tabs to find it.
2. **Phone, outdoors, one hand.** Big type, high contrast, works in sunlight, thumb-reach
   actions. Assume 390 px wide and a sandy screen.
3. **Photography leads.** The app is built around large, immersive photographs of
   Mauritius: the blue of the lagoon from above and from in the water, people actually
   doing things (snorkelling, kitesurfing, paddling, hiking Le Morne and the Gorges with
   the scenery behind them), light on water, viewpoints. Every brief suggestion card, the
   landing page and Explore are photo-first; the UI sits lightly on top. Rules that keep
   this from looking like resort stock: real places that are identifiable, natural colour
   grading (no oversaturated turquoise), people shown mid-activity rather than posing,
   consistent crop and horizon rules, and one editing preset across the whole library.
   Hand-made elements (stamps, the Kreol card, icons) are the counterpoint, not the base.
   Reference points for those: Mauritian stamp design, sega colours, the Blue Penny.
4. **Text over photos must still read in sunlight.** Any copy placed on a photograph sits
   on a scrim or a solid panel; headline contrast is measured against the darkest and
   lightest likely photo, not one sample. Never thin white type over water.
5. **Install is the hardest moment.** Spend disproportionate design effort on the landing
   page and the iOS add-to-home-screen flow.
6. **Hosts and businesses are busy people.** Their screens are forms with good defaults,
   finished in under five minutes on a phone.

## Surfaces to design (priority order)

1. Landing page from QR (`/p/{code}`) with install guidance for iOS and Android
2. Morning brief (home) and the notification text treatments
3. Tonight
4. Passport: overview, single stamp, stamp earned moment, milestone unlock
5. Kreol word of the day and its shareable card
6. Explore: mood browse, region browse, listing detail with "good today?"
7. Host page (guest view) and host editor
8. Business dashboard: listing, offer, stamp-station status, boost purchase, stats
9. Settings: stay dates, interests, language, notification controls, mute

## Deliverables expected from the design session

- `design/tokens.json`: colour, type scale, spacing, radius, elevation, in light and dark
- `design/screens/`: one HTML prototype per surface above, mobile-first, using the tokens,
  no framework dependency (plain HTML/CSS so the frontend session can lift it directly)
- `design/copy.md`: all tourist-facing microcopy, EN and FR, including 10 sample briefs and
  10 sample Tonight messages written in the house tone
- This file, rewritten as the finished interface spec, with component inventory and states
- Optionally a Figma file mirroring the prototypes, if the designer prefers to work there

## Accessibility baseline

WCAG 2.1 AA. Minimum 4.5:1 text contrast, 44 px touch targets, no information carried by
colour alone (stamps earned vs not must differ in shape too), reduced-motion respected.

## Motion (proposed direction, founder leaning yes)

Short muted video loops where motion sells, stills where they inform:
- Landing page hero: a 6 s loop (poster frame first, clip fades in), the install moment.
- Morning brief headline card: a clip **matched to today's conditions** (glassy lagoon on a
  calm day, kitesurfers at Le Morne on a windy one). This is the signature feature; no
  competitor has the conditions engine to do it.
- Stamp-earned moment: a short clip of the place just visited.
Everything else stays stills: suggestion cards, Tonight, Explore, anything offline.
Rules: always muted and inline, pause when not visible, one clip per screen at most,
1–3 MB each, poster frame always present.

## Photography

- Formats: full-bleed hero (landing, listing detail), 4:5 cards (brief, Tonight), 1:1
  thumbnails (Explore grid), 16:9 strips (host page). Design specifies safe areas for text.
- Performance: the frontend session serves responsive sizes and lazy-loads; the landing
  page hero must not break the 2 s budget on hotel Wi-Fi. Photos are the main cost here.
- Sourcing and library rules are owned by Brand (see `docs/sessions/brand.md`, workstream 7).

## Open questions

- Illustration style for the 12 stamps: commissioned, generated, or typographic?
- Do we commission a photographer for the pilot region, or launch on licensed stock plus
  partner-submitted photos with strict quality rules?
- Does the brief show a map at all in v1, or only place names with a "directions" link?
- *Design assumption (M0):* the conditions-matched hero clip shows the conditions **where
  the brief sends you**, not at the guest's own property (calm-day brief shows the glassy
  west lagoon even if the guest is on the windy east). Needs Product confirmation.
- *Design assumption (M0):* the conditions engine supplies a short **condition word** per
  day from a fixed vocabulary (Flat, Windy, Rain, Clear, Swell, Hot) alongside the headline.
  Concepts B and C depend on it; A uses a one-line conditions chip instead.
- *Design assumption (M0):* the hero clip library needs, per region, one clip per condition
  word. Until footage exists the prototypes use an animated poster (slow push-in on a
  still), which also fits the 1–3 MB budget comfortably.
- *Design assumption (M0):* Tonight keeps the light background with an indigo accent
  shift, per the image-model brief; no dark theme.
- The landing page shows the iOS steps by default in the concepts; Android gets a single
  Install button. Platform detection rules belong in the M1 spec.
