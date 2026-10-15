---
sidebar_position: 1
---

# Security

Exchange8 inherits the [Sentin8 security model](https://sentin8.dev/docs/security)
by construction — every service runs the platform's 8-step
authorization pipeline, connects to PostgreSQL through
certificate-only identity, and stores every table behind FORCE RLS
on `env_id`.

## The vertical's own invariants

1. **Deterministic matching** — the CLOB core is a pure function
   over the order event stream: the same inputs always produce the
   same fills, run to run.
2. **Synchronous pre-trade gates** — every order passes Ex8:Risk
   before the matching engine sees it; a rejected order never
   reaches the book.
3. **Event-sourced books** — Clearing projects the venue flow into a
   deterministic SQL ledger; the books are rebuildable from replay.
4. **Session integrity** — Gateway's FIX sessions carry sequence
   integrity, resend handling, and heartbeats; order states above
   the fill are owned by exactly one service.
5. **Surveillance as a first-class tier** — the eight detection
   families run on the live stream with replayable evidence, not a
   post-hoc report.
6. **One reference authority** — every tier resolves instruments,
   venues, and calendars against Ex8:RefData by reference — never
   cross-service table reads.

Read the platform's five pillars at
[sentin8.dev/docs/security](https://sentin8.dev/docs/security).