---
sidebar_position: 5
---

# Ex8:Risk — synchronous pre-trade authorization

The synchronous pre-trade authorization service: every order the
Ex8:Gateway submission pipeline accepts passes this gate before the
matching engine sees it — buying power, limits, and restricted
securities checked on the submission path, never after the fact.

## Use cases

- **Pre-trade checks** — per-member credit, exposure, and symbol
  restrictions evaluated synchronously; a rejected order never
  reaches the book.
- **Live limit management** — member limits mutate through the admin
  surface and take effect immediately (the platform's live
  authorization model applied to market risk).
- **Deterministic decisions** — the same member state and order
  always produce the same decision — auditable with the full input
  snapshot.

## Deep dive

[Risk reference](/docs/reference/risk/) — harvested from
`Exchange8-dev/exchange8-risk`.