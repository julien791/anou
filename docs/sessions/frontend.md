# Frontend session brief

**Model:** Sonnet 5.5 · **Branch:** `frontend` · **Owns:** `apps/web/`, `docs/decisions/0001-stack.md`

## Read first
`docs/01-experience.md` (§1, §2, §8 especially), `docs/02-interface.md`,
`docs/03-architecture.md`, `docs/04-data-model.md`.

## Goal
An installable PWA that shows the brief, receives web push on iOS and Android, and can be
styled from `design/tokens.json` when it lands.

## Milestone 1
1. Choose SvelteKit or Next.js; write ADR-0001 with the reasoning in five lines.
2. PWA shell: manifest, service worker, offline cache of last brief and host page, install
   detection for iOS Safari (standalone check) and Android.
3. Routes: `/p/{code}` landing, `/` brief, `/tonight`, `/passport`, `/word`, `/explore`,
   `/settings`. Placeholder styling until design ships, then adopt the tokens.
4. Push client: subscribe with VAPID public key from the API, send subscription to
   `POST /guests/{id}/push`, handle a test push end to end. Permission is only requested
   from the home-screen app and only after the user taps the in-context ask.
5. Integrate the mock brief endpoint from backend.
6. Playwright smoke test: landing renders, brief renders from mock, service worker
   registers. Run with `--trace off`.

## Milestone 2
Passport collection UI (QR scan via camera, GPS check-in), Kreol card share image,
Explore with "good today?" badges, settings and mute.

## Milestone 3
Host editor and business dashboard screens against the real API.

## Constraints
- Lift markup from `design/screens/` rather than re-interpreting it.
- Bundle budget: landing page under 150 kB JS gzipped.
- No analytics SDKs; log events to our own API.

## Report to
The product session, per `docs/sessions/README.md §5`.
