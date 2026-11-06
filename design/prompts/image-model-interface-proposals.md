# Image-model prompts: interface design proposals

For Nano Banana (or any image model). Use the **base prompt** on its own first to explore
visual direction, then append one **screen block** at a time. Generate 4–6 variations per
screen. Image models garble long text, so on-screen copy is kept short and quoted; if text
still comes out wrong, add "no readable text, use placeholder lines" and judge layout only.

Set aspect ratio to portrait 9:16 for single screens, 16:9 for the three-screen strip.

---

## Base prompt (style and constraints)

> High-fidelity mobile app UI design mockup for "Anou", a travel companion app for tourists
> in Mauritius, shown on a single modern iPhone-sized screen, straight-on, flat on a plain
> warm off-white background, no hands, no 3D tilt, no shadows except subtle screen edge.
> Visual language: photography-led and immersive. Large, beautiful photographs of
> Mauritius carry the screen: the deep blue of the lagoon from above and from in the water,
> people mid-activity (snorkelling, kitesurfing, paddleboarding, hiking Le Morne with the
> lagoon behind), light on water, mountain viewpoints. Natural colour grading, not
> oversaturated turquoise; real identifiable places. The UI sits lightly on top with text
> on soft dark scrims or clean off-white panels. Accent elements are warm and hand-made,
> inspired by Mauritian postage stamps and the Blue Penny: a small set of accent colours
> (deep indigo, coral red, sand) used sparingly against the photography. Typography: a friendly humanist sans for body text and a
> characterful serif or hand-lettered display face for one headline only. Rounded cards,
> clear hierarchy, big readable type designed for outdoor sunlight, thumb-reach actions at
> the bottom. Illustration style for icons and stamps: flat, textured, slightly imperfect
> ink-and-paper feel, no gradients, no glossy 3D. Avoid: generic resort-brochure stock photos with posed models,
> oversaturated water, glassmorphism, neon, dark UI, dashboard clutter, more than five
> colours in the UI itself. Keep it looking like a real shippable app, not a poster.

---

## Screen 1 · Morning brief (home)

> The screen is the app's home: today's morning brief. Top: small date line "Tuesday 11 Nov"
> and a one-word weather state with a tiny hand-drawn sun-and-wind icon. Headline in the
> display face: "Wind is up on your coast. Head west." Below, a short paragraph of two
> sentences in body type. Then three stacked 4:5 photo cards, each a full-bleed photograph (a flat lagoon from
> water level, a sunset over Tamarin bay, a rum distillery among sugar cane) with the text
> on a soft dark gradient at the bottom: a place name ("Flic en Flac lagoon", "Tamarin sunset
> 18:12", "Chamarel rum tasting"), one-line reason, and a small tag; the third card carries
> a discreet "Partner" label. Under the cards, a tip strip: "High tide 11:40, best snorkel
> window." Bottom tab bar with four items: Today, Tonight, Passport, Explore, using
> stamp-like icons. The whole screen should feel like a friend's text message turned into a
> calm, beautiful page.

## Screen 2 · Landing page from the hotel QR code

> A mobile web landing page seen in Safari, not yet installed. Top: property welcome card
> "Welcome to Villa Lakaz" with a small host photo circle and Wi-Fi line. Behind the top half, a full-bleed photograph of a snorkeller over a turquoise reef
> seen from above, softly darkened at the bottom. Middle: a compact
> preview of today's brief with the headline "Flat sea this morning. Go snorkelling early."
> Bottom third is the focus: a warm, friendly install panel titled "Add Anou to your home
> screen" with three tiny numbered illustrated steps (share icon, "Add to Home Screen", open
> from home) and the reassurance "One message a day, two at most." Primary button in coral:
> "Show me how". The install panel must look inviting and simple, like a hotel welcome
> card, not a tech prompt.

## Screen 3 · Passport overview

> The Passport screen: a grid of 12 round stamp slots on a textured paper card, 5 already
> collected and shown as richly illustrated ink stamps (a mountain for Le Morne, seven
> coloured earth stripes for Chamarel, a market basket, a red-roofed church, a dancer for
> sega night), 7 still empty shown as faint dotted outlines with a tiny number. Header:
> "Your Mauritius Passport" and progress line "5 of 12". One small milestone chip: "3
> stamps: Kreol phrasebook unlocked". A soft call-to-action card at the bottom: "Grand
> Bassin is 40 min away and quiet today." Feels like a real collectable travel document,
> tactile and proud, not a gamified points screen.

## Screen 4 · Stamp earned moment

> A full-screen celebratory state right after scanning a QR at a rum distillery: a large
> illustrated ink stamp of a sugar-cane stalk and copper still pressing onto textured paper,
> slight ink bleed, with the title "Stamp 9 · Chamarel" and a two-line story in body type.
> A small reward card: "Your reward: one tasting on the house. Show this at the counter."
> One Kreol word chip: "Dilo — water". A single button "Continue". Confetti is not allowed;
> the joy comes from the stamp artwork and paper texture.

## Screen 5 · Tonight

> The Tonight screen: header "Tonight near you" with the sunset time "Sunset 18:12" and a
> small horizon illustration. Three event cards in a vertical list: "Sega night, Le Morne
> beach bar, 20:00, free", "Friday street food, Flic en Flac, from 18:00", "Full moon
> paddle, Tamarin, 19:30". Each card has time, place, a price band shown as small coins,
> and a one-line reason. Evening colour shift: deeper indigo accents but still a light
> background, never a dark theme.

## Screen 6 · Kreol word of the day card

> A square shareable social card, 1:1, not a phone screen: textured paper background,
> large hand-lettered Kreol word "Lamer", small pronunciation line "la-MER", meaning "the
> sea", one example sentence "Anou al lamer!", a tiny Anou wordmark bottom-right, and a
> small illustrated wave. Designed to be screenshotted and posted.

---

## Three-screen strip (for a quick overall read)

> Append to the base prompt, aspect 16:9: "Show three phone screens side by side, same
> design system: left the morning brief home screen, centre the Passport grid, right the
> Tonight list. Consistent palette, type and icon style across all three."

---

## Variation levers

Swap one phrase at a time in the base prompt to steer direction:

- Palette: "deep indigo, coral red" → "Blue Penny blue, hibiscus red" or "sega sunset
  oranges with sea green"
- Texture: "ink-and-paper feel" → "risograph print feel" or "clean flat vector, no texture"
- Display type: "hand-lettered" → "condensed vintage stamp lettering" or "elegant serif"
- Density: add "more white space, fewer elements" or "slightly denser, editorial"

## What to bring back

Pick 2–3 directions you like and drop the images into `design/inspiration/` with a line on
what you liked about each. The Interface design session uses them as the starting brief.
