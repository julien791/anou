# 07 · Functionality overview and the pain points it answers

Anou has three users: tourists, hosts (hotels, guesthouses, Airbnb owners) and businesses
(operators, restaurants, venues, guides). Each feature below exists because it removes a
specific pain for at least one of them, and most features serve two sides at once.

## Tourists

| Pain point | What it feels like on holiday | Anou feature | How it fixes it |
|---|---|---|---|
| Every morning starts with "what should we do today?" | Asking reception, scrolling TripAdvisor, arguing over breakfast | **Morning brief** at 08:00 | One message with two or three suggestions and a reason, written from today's conditions, so the decision is made before breakfast |
| Conditions are invisible to a visitor | Drove to the east coast, found it windy and brown; booked a catamaran on a swell day | **Conditions engine** behind the brief, and "good today?" on every listing | Wind, rain, sea state, tide and sunset per region drive what gets suggested; the app sends you where the weather is, not where the brochure is |
| Evenings are empty or guessed | Hotel buffet again because nobody knew about the sega night | **Tonight** at 16:00 | Three real things on this evening near you, with time, price band and a reason |
| Fear of missing the "real" island | Spent ten days in the resort and saw nothing | **Passport**, 12 stamps across the island | A gentle structure that, if completed, means you actually saw Mauritius: north, south, sea, land, food, culture |
| Tourist traps and no way to tell | Paid triple for a mediocre tour | Curated listings, partner rewards, price bands | Curation over coverage; businesses in the brief are vetted, and stamp rewards make partners prove value |
| Feeling like an outsider | Didn't say a single local word all trip | **Kreol word of the day**, stamp stories | A word matched to the day, with audio and a sentence to try; each stamp carries a real piece of history |
| Apps that nag | Six notifications a day, uninstalled by day two | **Notification policy** enforced in code | Two scheduled messages a day maximum, quiet hours, one-tap mute, automatic stop after check-out |
| Yet another app to download | App Store, account, password | **QR to home screen PWA**, no account | Scan, add to home screen, done; anonymous device, no sign-up |
| No signal on the beach, no roaming | Can't load the thing you saved | **Offline** last brief, Passport, host page | The things you need today are cached |
| Practical questions nobody answers | Wi-Fi password, check-out time, where the nearest pharmacy is | **Host page** | The property's own welcome card inside the same app, with the host's recommendations pinned into your brief |
| Last days wasted | Left with rupees and a missed market day | **End-of-stay shift** in the brief | The last two days shift to "before you leave" items and missing stamps |

## Hosts (hotels, guesthouses, Airbnb)

| Pain point | Anou feature | How it fixes it |
|---|---|---|
| The same twenty questions from every guest | Free **host page**: Wi-Fi, rules, check-out, emergency numbers, recommendations | Guests get answers from the QR in the room before they ask |
| The laminated binder is out of date and ugly | Host editor, five-minute form on a phone | Edit once, every guest sees the current version |
| Guests who have a bad day blame the stay | Morning brief | A guest whose days go well reviews the property well; the host did nothing extra |
| Hotels want to push their own events | Hotel plan: own events into Tonight, property notices | Theme night or excursion reaches guests at 16:00 without a flyer under the door |
| Airbnb hosts can't compete with a hotel concierge | The brief is the concierge | A villa guest gets the same daily guidance a five-star guest gets |
| No idea what guests actually do | Property stats (aggregate, anonymous) | Which recommendations get tapped, which stamps guests collect |

## Businesses (operators, restaurants, venues, guides)

| Pain point | What it costs them today | Anou feature | How it fixes it |
|---|---|---|---|
| Tourists decide the night before or the same morning, and the business is invisible at that moment | Commission to agents and hotel desks, 20–30% | **Brief and Tonight placement** for Pro businesses when conditions match | The restaurant appears at 16:00 on a Friday; the lagoon operator appears on the calm morning; no middleman |
| Advertising reaches people who are not on the island | Facebook spend on people planning next year | Everyone in Anou is here, now, with stay dates | Zero waste: only guests currently in Mauritius, filtered by region |
| Weather kills bookings and the business cannot tell guests | Cancellations, refunds, empty boats | Suitability model per listing | The app does not suggest a catamaran on a swell day and does suggest the distillery instead; the operator stops being blamed for the weather |
| Slow days are unpredictable | Empty Tuesday afternoons | **Boosts** by day and region | Buy a slot in tomorrow's brief for the west coast only when you need it |
| No way to measure what works | Flyers, QR codes nobody scans | Stats: impressions in briefs, taps, directions, stamp redemptions | Attributed footfall, by day |
| Foot traffic costs money up front | Discount sites take margin on every sale | **Stamp station** with a small reward | The reward is the only cost; Anou charges a flat slot, not a cut |
| Small businesses cannot afford a presence | No website, a Facebook page from 2019 | **Free listing** | Name, photos, hours and one offer, appearing in Explore with "good today?" |
| Hotels keep guests inside the resort | All-inclusive wristbands | Host recommendations and the brief | Guests are nudged out with a reason, and independent businesses get the traffic |

## Why the two sides reinforce each other

- The brief is only valuable to tourists if it has real, varied, vetted options. Businesses
  supply those by listing and by being stamp stations.
- Businesses only pay if tourists act on the brief. Tourists act because the brief is
  honest, conditions-aware and not spammy. The notification cap is a business feature as
  much as a tourist one: a brief people read is worth paying to be in.
- Hosts distribute the app for free because it reduces their workload, which gives Anou
  guests on day one without marketing spend, which is what makes the business side worth
  paying for.

## What is deliberately not here (v1)

Booking and payment for activities, reviews, chat with businesses, user accounts, a full
map, group planning. Each is a plausible v2 item; none is needed for the loop above to work.
