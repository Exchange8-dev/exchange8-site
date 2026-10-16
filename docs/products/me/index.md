---
sidebar_position: 3
---

# Exchange8:ME - the matching engine

The deterministic central-limit-order-book matching core: it accepts
order-entry events from Exchange8:Gateway, Exchange8:OMS, and Exchange8:SOR re-posts,
matches at price-time priority, and emits the fill events every
downstream tier consumes.

## Use cases

- **Price-time priority CLOB** - the same order stream always
  produces the same fills, run to run; the core is a pure function
  over events.
- **Self-trade prevention** - the configured STP policies prevent
  member self-crosses without halting the book.
- **Event fan-out** - order, trade, and status events publish to the
  venue flow: MD (public data), Clearing (ledger projection),
  Regulatory/Surveillance (reportable activity).

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/me/) - the maintainer's README in the consolidated reference section.

