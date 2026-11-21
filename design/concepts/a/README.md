# A · Window

**Idea.** The photograph is the room you are standing in and the interface is a sheet of
paper laid on top of it. Open the app and you are looking at the island first, then you read.

## Palette
| Token | Hex | Use |
|---|---|---|
| ink | `#10212B` | Text, install panel |
| lagoon | `#0E4A5C` | Primary accent, active tab, tip |
| paper | `#FBF8F3` | Sheet background |
| sand | `#F2EADD` | Fact chips, Passport book |
| coral | `#B9432C` | One action per screen (5.3:1 on white) |
| night | `#23285A` | Tonight accent (evening shift without a dark theme) |

## Type
Fraunces (soft, slightly wonky serif, optical sizes) for headlines and place names;
Figtree (humanist sans) for everything you read. Body 17 px, lede 19 px, headline 36–40 px.

## Photography
Dominant, around 80 % of the first screen. Full-bleed hero, 4:5 suggestion cards with a
deep bottom scrim (text never touches bare photo). Tonight uses square-ish 4:5 thumbnails
beside text so the list scans quickly at dusk.

## Motion and the conditions-matched hero
The clip *is* the hero: it fills the top 560 px behind the headline, with a slow Ken Burns
drift. A conditions chip at the top ("Glassy lagoon · W 6 kn · sea 0.4 m") and a small
pulsing "Clip matched to: calm west coast, low swell" line under the headline make the
match explicit, so the guest learns the footage is *today*, not stock. Switching day
(`?c=windy`) swaps clip, headline, cards and tip together. Paper sheet rises over the hero
with a 28 px radius. Reduced motion: poster only, no drift.

## Strengths and risks
+ Most immersive, easiest for frontend, the photo library does the selling.
− Closest to generic travel-app patterns; the brand lives almost entirely in the photos,
  so it depends heavily on a strong, consistent library. Hero eats the first screen, so
  the suggestions start below the fold.

Imagery: labelled stand-ins for now; see "Imagery" in `../README.md`.
