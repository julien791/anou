# Working sessions

The project is split across Claude Code sessions, each on a model matched to the work.
Thinking-heavy work gets the strongest models; well-specified build work gets cheaper ones.

| Session | Model | Owns | Branch | Brief |
|---------|-------|------|--------|-------|
| Product (orchestrator) | Fable 5.1 | `docs/00`, `01`, `05`; reviews everything; dispatches work | `main` | this file |
| Design | Opus 5.5 | `docs/02-interface.md`, `design/` | `design` | `design.md` |
| Frontend | Sonnet 5.5 | `apps/web/`, ADR-0001 | `frontend` | `frontend.md` |
| Backend | Sonnet 5.5 | `apps/api/`, `docs/03`, `docs/04` | `backend` | `backend.md` |
| Content | Haiku 5.5 | `content/` | `content` | `content.md` |

## Protocol

1. **Read before you build.** Your brief, then `docs/01-experience.md`, then the docs your
   brief names. Do not read the whole repo.
2. **Specs are the contract.** Build what is written. If it is missing or unclear, write
   your assumption under "Open questions" in the relevant doc, continue, and flag it in your
   report. Do not stop to ask unless the ambiguity would make the work useless.
3. **Shared contracts need an ADR.** Data model, API shape, design tokens, push payload. One
   short file in `docs/decisions/`, then update the spec, then build.
4. **Branches.** Work on your branch, rebase on `main` daily, open a pull request when a
   milestone in your brief is done. The product session reviews and merges.
5. **Report format.** When you finish a milestone, send the product session a message with:
   what was built, where, how it was verified (commands run and results), open questions,
   and what you suggest next. Keep it under 300 words.
6. **Dependencies between sessions.**
   - Frontend depends on `design/tokens.json` and `design/screens/` for the landing page
     and brief. Until they exist, frontend builds structure, routing, PWA plumbing and
     push client against placeholder styling.
   - Backend depends on nothing to start; it exposes a mock brief endpoint early so the
     frontend can integrate.
   - Content depends on the data model only.
7. **Cost discipline.** Narrow tasks, few turns. Do not re-read files you have already read.
   Do not refactor outside your area.

## Milestone plan

**M0 (this week):** repo, specs, briefs. Done by the product session.
**M1:** design tokens, landing page and brief screens; API skeleton with mock brief and push
subscribe; PWA shell installable on iOS and Android with a working test push; stamps,
Kreol words and 40 west-coast listings seeded.
**M2:** real conditions engine and rule-based brief; Tonight; Passport collection via QR;
host page editor.
**M3:** business dashboard, Pro tier, boosts with Stripe, stats; LLM tone pass behind a
flag; pilot with one west-coast host cluster.
