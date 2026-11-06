# 01 · Experience spec

This is the product truth. Interface, build and content sessions all work from it.

## 1. Onboarding (QR to home screen)

1. Guest scans the QR at the property. URL carries a property code: `anou.mu/p/{code}`.
2. Landing page is already useful before any install: it shows today's brief for that
   area, the property's welcome card, and a single clear "Add Anou to your home screen"
   call to action.
3. **iOS path:** web push only works from a home-screen install. The page detects iOS
   Safari and shows a 3-step illustrated guide (Share, Add to Home Screen, open from home
   screen). Only after the app is opened from the home screen do we ask for notification
   permission, and we ask in context: "Want tomorrow's brief at 8am? One message a day,
   two at most."
4. **Android path:** install prompt and notification permission in one flow.
5. Guest sets: stay dates (defaults from the property if the host configured check-out),
   language (EN/FR), travelling with (couple / family / friends / solo), interests (sea,
   land, food, culture, nightlife, slow). All optional; defaults work.
6. No account. An anonymous device ID is enough for v1. Email is optional, offered later
   for "send me my Passport".

## 2. The Morning Brief

Sent ~08:00 local, also the home screen of the app.

**Inputs:** wind direction and speed by coast, rain probability by region (north, east,
south, west, central plateau), sea state / swell, tide times, sunrise and sunset, UV, day of
week, public holidays and festivals, events feed, guest's location (property area), guest
interests, days remaining in the stay, what the guest has already done (stamps).

**Rules:**

- Lead with the condition that matters most today, in plain words. "Wind is up on the east
  coast" beats "SE 25 knots".
- Two or three suggestions, each with a why-today reason. At least one must be free or
  near-free. At most one may be sponsored and it is labelled.
- One practical tip (sunset time, high tide for snorkelling, market day, road closure,
  cyclone advisory when relevant).
- Tone: a local friend texting. Short sentences, no exclamation marks, no superlatives.
- Length: notification text under 120 characters; in-app brief under 90 words plus cards.
- Never repeat yesterday's headline suggestion unless conditions force it.
- Last two days of the stay shift toward "before you leave" items (market, a Passport stamp
  they are missing, where to spend remaining rupees).

**Example (winter, east coast guest):**

> Wind is up on your coast today, so head west. Flic en Flac lagoon is flat until early
> afternoon, and Tamarin has the sunset at 18:12. On the way back, Chamarel rum tasting
> is quiet on weekdays. *Tip: high tide at 11:40 is the best snorkel window.*

## 3. Tonight

Sent ~16:00 local. Three items max within a sensible drive of the property: live music
(sega nights especially), beach barbecues, night markets, festivals, a restaurant with a
reason (fish landed today, Friday street food), full-moon or stargazing nights. Each item
has a time, a place, a price band and a one-line reason.

## 4. The Passport

A collectable set of **12 stamps** spread across the island so that completing it means
having actually seen Mauritius: north, east, south, west and centre, sea and land, culture
and food.

- A stamp is earned by scanning a QR at the location (business, viewpoint, market) or, for
  natural sites with no partner, by GPS check-in within a radius.
- Each stamp has a short story (2–3 sentences of real local history or culture) and a Kreol
  word attached.
- Partner businesses can be **stamp stations**: the stamp is collected at their counter
  and unlocks a small reward (a tasting, a dessert, a discount). The reward is the
  business's cost of acquisition; Anou charges for the station slot.
- Milestones: 3 stamps unlocks the "Kreol phrasebook" pack, 6 unlocks a downloadable
  postcard, 12 unlocks the "Zil Complete" badge and a partner reward of real value.
- Stamps are never required for anything. The brief may nudge toward a missing stamp when
  conditions suit, at most twice per stay.

**Initial stamp list (content session verifies and may swap):**

1. Le Morne Brabant (viewpoint or base, GPS) · freedom and the maroon story
2. Chamarel Seven Coloured Earth
3. Black River Gorges viewpoint
4. Port Louis Central Market
5. Aapravasi Ghat, Port Louis
6. Grand Bassin (Ganga Talao)
7. Cap Malheureux red-roofed church
8. Pamplemousses botanical garden
9. Île aux Cerfs / Trou d'Eau Douce departure
10. Mahébourg waterfront and Monday market
11. A sega night (partner venue, rotating)
12. A street food stop: dholl puri or gateau piment (partner stall, rotating)

## 5. Kreol word of the day

One word or phrase per day, chosen to match the brief ("lamer" the sea on a beach day,
"lapli" rain, "manzé" to eat on a food day). Pronunciation audio, meaning, one sentence
to try on a local. Shareable as an image card.

## 6. The Host page

Every property gets a page at `anou.mu/p/{code}` that the host edits from a simple form:

- Welcome message and photo
- Wi-Fi, check-in / check-out, house rules, emergency numbers
- The host's own recommendations (up to 10), which can be pinned into their guests' briefs
- Property-specific notices (pool closed Tuesday morning), optionally pushed to that
  property's guests only

Hotels get the same plus multiple units, a staff login, and the ability to post their own
events (theme nights, excursions) into Tonight for their guests.

The host page is **free**. It is the distribution mechanism.

## 7. Explore (the directory)

Deliberately secondary. Browse by mood (sea, land, food, culture, nightlife, slow) and by
region. Every listing shows "good today?" derived from the same conditions engine, so the
directory inherits the app's intelligence rather than being a flat list.

## 8. Notification policy

- Max two scheduled pushes a day (brief, tonight).
- Property notices from the host count toward a separate cap of one per day.
- Geofenced nudges are opt-in separately, max one per day, only from Pro businesses, and
  only when the guest is within 500 m and the business is open.
- Quiet hours 21:00–07:30.
- One-tap mute for the rest of the stay, and automatic stop the day after check-out, with a
  final "bon voyage" message containing the Passport summary.

## 9. Languages

English and French at launch. Kreol words are presented, not used as UI language.
German and Italian are candidates later given arrivals data.

## Open questions

- Should families get a separate "with kids" brief variant at launch or in v1.1?
- Weather source: Mauritius Meteorological Services has public forecasts but no clean API.
  Backend session to evaluate Open-Meteo plus MMS advisories scraped for cyclone warnings.
- Do we show prices in MUR, in the guest's currency, or both?
