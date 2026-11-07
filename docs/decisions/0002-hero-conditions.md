# 0002 · Conditions-matched hero

**Status:** accepted (Product, design M0 review) · **Owner:** Design

## Context
The morning brief's headline card plays a clip matched to today's conditions
(`docs/02-interface.md` §Motion). The M0 concepts needed three things the specs did not say:
whose conditions the clip shows, how the condition is named, and what plays when no clip exists.

## Decision
1. **Where the brief sends you.** The hero clip shows the conditions at the place the brief
   recommends, not at the guest's property. A calm-west brief shows the glassy west lagoon,
   even for a guest staying on the windy east coast.
2. **Condition word.** The brief carries one condition word per day from a fixed vocabulary:
   `Flat`, `Windy`, `Rain`, `Clear`, `Swell`, `Hot`. It is part of the brief payload, next to
   the headline. Product passes it to the brief intelligence session as a contract.
3. **Animated poster fallback.** When no clip exists for a region and condition word, the hero
   plays an animated poster: a short, slow push-in on a still photo, with the poster frame
   always present. The same applies when reduced motion is on (static poster) or offline.

## Consequences
- The clip library is keyed by region × condition word; gaps degrade to the animated poster.
- Backend adds `conditionWord` (enum above) to the brief response; Design specifies its
  presentation per screen in the M1 interface spec.
- Adding a word to the vocabulary is a contract change and needs a new decision record.
