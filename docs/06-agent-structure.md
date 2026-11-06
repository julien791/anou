# 06 · Agent structure (proposal, v2)

Status: **draft for discussion**. Replaces the five-session split in `docs/sessions/README.md`
once agreed.

## Principle

Split by *ownership of a contract*, not by file type. A session should own one thing that
other sessions depend on, be able to finish a milestone without waiting on more than one
other session, and be small enough to brief in one page. More sessions than that adds
coordination cost (each one re-reads the specs, and every shared file becomes a merge risk)
without adding speed.

## Layers

### Layer 0 · Orchestration
| Session | Model | Owns |
|---|---|---|
| **Product** (this session) | Fable 5.1 | Vision, experience spec, the checklist, dispatching work, reviewing and merging pull requests, resolving contract disputes. Talks to you. |

### Layer 1 · Thinking (strong models, most of the budget)
| Session | Model | Owns | Depends on |
|---|---|---|---|
| **Voice & copy** | Opus 5.5 | The brief's voice: tone guide, 30 sample briefs and Tonight messages, Passport stamp stories, Kreol word selection, notification wording, EN/FR microcopy | Experience spec |
| **Interface design** | Opus 5.5 | Tokens, HTML prototypes for every surface, interface spec, stamp visual system | Experience spec; copy for real text |
| **Brief intelligence** | Opus 5.5 | The rules that turn conditions into suggestions: suitability model per listing, region/wind/rain/sea logic, segment logic, anti-repetition, end-of-stay shift. Writes it as a spec plus a pure TypeScript rules module with tests | Data model |
| **Research & market** | Sonnet 5.5 | Competitor teardown (MauritiusNow, Discover Mauritius, hotel apps), weather/tide/swell data sources, domain and trademark checks, Mauritius Data Protection Act notes, pricing comparables | Nothing |

### Layer 2 · Building (Sonnet, well-briefed)
| Session | Model | Owns | Depends on |
|---|---|---|---|
| **Tourist app** | Sonnet 5.5 | PWA shell, install flow, brief/Tonight/Passport/word/explore screens | Interface design, API contract |
| **Host & business portal** | Sonnet 5.5 | Host editor, hotel multi-unit, business dashboard, boost purchase UI | Interface design, API contract |
| **Core API & data** | Sonnet 5.5 | Schema, migrations, seed loader, CRUD for properties, listings, guests, businesses; API contract doc; mock brief endpoint | Data model |
| **Notifications** | Sonnet 5.5 | Web push, scheduler, caps and quiet hours as tested code, delivery logging, bon voyage message | Core API |
| **Conditions engine** | Sonnet 5.5 | Open-Meteo, sun/tide/swell, MMS advisories, `DayConditions` per region | Research (sources), Core API |
| **Infra & CI** | Sonnet 5.5 | Hosting choice, preview deploys per branch, CI running tests and Playwright, env management | Core API, Tourist app |

### Layer 3 · Content (Haiku where it is data entry, Sonnet where accuracy matters)
| Session | Model | Owns |
|---|---|---|
| **Places & listings** | Haiku 5.5 | Listings YAML per region with suitability fields and sources. Can fan out one subagent per region. |
| **Events calendar** | Haiku 5.5 | Recurring events, festivals and public holidays for 12 months, with sources |
| **Culture & language** | Sonnet 5.5 | 12 stamp stories verified, 60+ Kreol words with correct orthography, pronunciation notes. Accuracy over volume. |

### Layer 4 · Assurance and go-to-market (start at M2)
| Session | Model | Owns |
|---|---|---|
| **QA & accessibility** | Sonnet 5.5 | Playwright flows on iOS and Android viewports, install-flow testing, WCAG audit, reviewing PRs against the spec before Product merges |
| **Go-to-market** | Opus 5.5 | Host pitch one-pager, business pitch, QR room card and counter sticker artwork brief, pilot plan for the west coast, pricing validation script |

## Waves

Sessions start in waves so nobody waits idle.

- **Wave 1 (now):** Voice & copy, Interface design, Brief intelligence, Research, Core API,
  Places & listings, Culture & language, Events.
- **Wave 2 (when Core API publishes its contract and design ships tokens):** Tourist app,
  Host & business portal, Notifications, Conditions engine, Infra.
- **Wave 3 (M2):** QA & accessibility, Go-to-market.

That is 16 sessions in total, 8 live at once at peak. Each is long-lived: it keeps its
context, and Product sends it the next task rather than starting fresh.

## Inside a session

Sessions can fan out further with subagents for parallel, independent work (one per region
for listings, one per screen for prototypes). That is the session's call; it is cheaper than
another coordinated session because the fan-out shares one brief and one branch.

## Budget shape (rough)

Thinking layer and orchestration: ~55% of tokens. Building: ~30%. Content: ~10%.
Assurance and GTM: ~5%. If building creeps above 30%, the briefs are too vague; fix the
brief, not the model.

## Communication

- Specs in `docs/` are the contract. Changes go through an ADR and a Product review.
- Each session reports to Product at milestones (format in `docs/sessions/README.md`).
- Product keeps `docs/CHECKLIST.md` current and is the only session that talks to you.
- Cross-session questions go to Product, never sideways; it prevents two sessions agreeing
  a contract change nobody else hears about.
