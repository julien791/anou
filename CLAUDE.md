# Working in this repository

Read `docs/sessions/README.md` first, then the brief for your session in `docs/sessions/`.

## Rules for every session

- The specs in `docs/` are the contract. If a spec is unclear, write your assumption into
  the relevant doc under an "Open questions" heading and continue. Do not silently invent.
- If you change a shared contract (data model, API shape, design tokens, push payload),
  add a short record in `docs/decisions/NNNN-title.md` and update the spec.
- Work on your session's branch (named in your brief). Commit small, push often.
- Never commit secrets. Push and API keys go in environment settings, not files.
- Keep the product promise in mind: two useful push notifications a day, never more,
  and the brief must read like a local friend texting, not a listing.

## Language and tone

Tourist-facing copy is English first with French available. Use real Kreol Morisien
words only where the spec calls for them, spelled per the Akademi Kreol Morisien
orthography (e.g. "Anou alé", "lakaz", "zil", "zoli").
