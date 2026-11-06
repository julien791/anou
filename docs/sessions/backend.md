# Backend session brief

**Model:** Sonnet 5.5 · **Branch:** `backend` · **Owns:** `apps/api/`, `docs/03-architecture.md`, `docs/04-data-model.md`

## Read first
`docs/01-experience.md` (§2, §3, §4, §8), `docs/03-architecture.md`, `docs/04-data-model.md`.

## Goal
The brief engine, push delivery, Passport and host/business APIs, with the notification caps
enforced in code.

## Milestone 1
1. Hono + TypeScript API skeleton, Postgres schema from the data model (migrations),
   seed script that loads `content/*.yaml`.
2. `GET /brief/today?region=&segment=` returning a realistic **mock** brief in the
   `body_json` shape so the frontend can integrate on day one. Document the shape in
   `docs/04-data-model.md`.
3. Push: VAPID keys from env, `POST /guests/{id}/push`, `POST /admin/push/test`, delivery
   log. A scheduler stub that respects quiet hours and the two-a-day cap.
4. Conditions engine v0: Open-Meteo pull per region, sun times, store `DayConditions`.
   Evaluate tide and swell sources and record the choice in an ADR.
5. Tests for the cap and quiet-hour logic; these rules are the product promise.

## Milestone 2
Rule-based brief composer and Tonight from real conditions and listings; Passport
collection with signed QR tokens and GPS radius; host page CRUD and notices with their own
cap; stay-end bon voyage message.

## Milestone 3
Business tiers, boosts with Stripe, stats endpoints, LLM tone pass behind a feature flag
with validation and template fallback. Use the `claude-api` skill for the SDK.

## Constraints
- Caps and quiet hours live in one module with tests; nothing sends without passing through it.
- No secrets in the repo. Read everything from env.
- Keep the mock brief endpoint alive until the real one passes the same contract tests.

## Report to
The product session, per `docs/sessions/README.md §5`.
