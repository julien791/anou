# 02 · Interface brief

Owned by the **design session**. This file starts as a brief and becomes the interface spec
as the design session fills it in. Build sessions read it; they do not improvise UI.

## Principles

1. **The brief is the home screen.** Open the app and today's brief is already there. No
   splash, no tabs to find it.
2. **Phone, outdoors, one hand.** Big type, high contrast, works in sunlight, thumb-reach
   actions. Assume 390 px wide and a sandy screen.
3. **Feels like Mauritius, not like a travel startup.** Warm, hand-made, a little playful.
   Reference points: Mauritian stamp design, sega colours, hand-painted shop signs, the
   Blue Penny. Avoid: generic turquoise-and-white resort palettes, stock photo heroes.
4. **Install is the hardest moment.** Spend disproportionate design effort on the landing
   page and the iOS add-to-home-screen flow.
5. **Hosts and businesses are busy people.** Their screens are forms with good defaults,
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

## Open questions

- Illustration style for the 12 stamps: commissioned, generated, or typographic?
- Does the brief show a map at all in v1, or only place names with a "directions" link?
