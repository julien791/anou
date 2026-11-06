# 03 · Architecture

Owned jointly by the **frontend** and **backend** sessions. Change via a decision record.

## Shape

A single PWA with three faces (tourist, host, business) talking to one API.

```
apps/web   SvelteKit (or Next.js, see ADR-0001) · PWA · service worker · web push client
apps/api   TypeScript · Hono on Node · Postgres (Supabase or Neon) · cron workers
content/   JSON/YAML seed data loaded into Postgres by a script
```

Hosting target: Cloudflare Pages/Workers or Vercel plus a managed Postgres. The frontend
session picks and records the choice in `docs/decisions/0001-stack.md`.

## Key components

### Conditions engine (`apps/api/src/conditions`)
Pulls hourly: wind, rain probability, temperature, UV per region (north, east, south,
west, centre) from Open-Meteo; tides and sun times computed or fetched; swell from a marine
forecast source; cyclone and heavy-rain advisories from Mauritius Meteorological Services
(scrape or RSS, with manual override flag). Produces a `DayConditions` record per region.

### Brief composer (`apps/api/src/brief`)
Deterministic rule engine first, LLM polish second.

1. Rules select candidates: filter listings and events by region suitability given
   conditions, guest interests, days remaining, already-visited, sponsor slot.
2. A template produces the structured brief (headline condition, 2–3 suggestions, tip).
3. An LLM pass rewrites into the house tone within hard length limits, given the tone guide
   in `design/copy.md`. Output is validated (length, no banned words, suggestions unchanged)
   and falls back to the template on failure.
4. Briefs are generated at 07:30 per region and per guest segment, cached, and sent at 08:00.

Same pipeline for Tonight at 15:30/16:00.

### Push (`apps/api/src/push`)
Web Push (VAPID) via the `web-push` library. Subscriptions keyed by anonymous device ID.
Scheduling honours `docs/01-experience.md §8` caps and quiet hours as code, not convention.
Delivery and open events are logged for stats.

### Passport (`apps/api/src/passport`)
Stamp definitions in `content/stamps.yaml`. Collect via signed QR tokens (per station,
rotated monthly) or GPS check-in with radius. Milestone unlocks are server-side.

### Host and business APIs
Property CRUD with a short public code, host recommendations, notices (with their own cap),
business listings, offers, stamp-station enrolment, boost purchase (Stripe), stats.

## Data model

See `docs/04-data-model.md`.

## Non-functional

- Landing page interactive under 2 s on a mid-range Android on hotel Wi-Fi.
- Offline: last brief, Passport, host page and saved listings available without network.
- Privacy: no accounts in v1; device ID, coarse location only, GDPR-style delete endpoint.
- Observability: structured logs, one dashboard for push delivery rates and brief open rate.

## Open questions

- Is a managed Postgres acceptable, or should v1 be SQLite on one box to cut cost?
- Which LLM for the tone pass, and do we skip it in v1 and ship template briefs?
