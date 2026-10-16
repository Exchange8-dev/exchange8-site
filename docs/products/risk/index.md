---
sidebar_position: 5
---

# Exchange8:Risk - synchronous pre-trade authorization

The synchronous pre-trade authorization service: every order the
Exchange8:Gateway submission pipeline accepts passes this gate before the
matching engine sees it - buying power, limits, and restricted
securities checked on the submission path, never after the fact.

## Use cases

- **Pre-trade checks** - per-member credit, exposure, and symbol
  restrictions evaluated synchronously; a rejected order never
  reaches the book.
- **Live limit management** - member limits mutate through the admin
  surface and take effect immediately (the platform's live
  authorization model applied to market risk).
- **Deterministic decisions** - the same member state and order
  always produce the same decision - auditable with the full input
  snapshot.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/risk/) - the maintainer's README in the consolidated reference section.

