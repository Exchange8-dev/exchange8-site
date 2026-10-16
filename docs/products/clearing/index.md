---
sidebar_position: 7
---

# Exchange8:Clearing - the event-sourced ledger

The event-sourced order/trade ledger: it consumes order and trade
lifecycle events from the venue flow and projects them into a
deterministic SQL ledger - positions, trades, and the member books
are rebuildable from replay.

## Use cases

- **Deterministic projection** - the same event stream always
  produces the same ledger; rebuilds from replay are first-class.
- **Member books** - per-member positions and trade history as the
  clearing tier's own tables, FORCE-RLS'd like every tenant table.
- **Downstream feed** - the ledger feeds Settlement (novation,
  custody), Margin (position revaluation), and Reporting.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/clearing/) - the maintainer's README in the consolidated reference section.

