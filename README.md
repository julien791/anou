# Anou

**Anou. Let's go, Mauritius.**

Anou is a progressive web app for tourists staying in Mauritius, distributed by QR code
at hotels and Airbnbs. Its reason to exist is one question every visitor asks every
morning: *what is today good for?* Anou answers it with a short daily brief built from
wind, weather, tide, sunset and what is on tonight, then layers a collectable Passport,
a Kreol word of the day and a host page for the property the guest is staying at.

Businesses list for free, subscribe to appear in the brief, and buy boosts.

## Repository map

| Path | What lives here |
|------|-----------------|
| `docs/` | Product, experience, interface, architecture and business specs. The specs are the contract between sessions. |
| `docs/sessions/` | One brief per working session. Read yours before doing anything. |
| `docs/decisions/` | Short architecture decision records. Add one when you change a shared contract. |
| `apps/web/` | The PWA (tourist app, host page, business dashboard). |
| `apps/api/` | Brief engine, push, data, business API. |
| `content/` | Seed data: places, stamps, Kreol words, events. |
| `design/` | Interface deliverables: screens, tokens, prototypes. |

## How work is split

See `docs/sessions/README.md`. In short: product and experience thinking happens once,
is written into `docs/`, and build sessions work from the written spec, not from
conversation.
