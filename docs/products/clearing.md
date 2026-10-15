---
sidebar_position: 7
---

# Ex8:Clearing — the event-sourced ledger

The event-sourced order/trade ledger: it consumes order and trade
lifecycle events from the venue flow and projects them into a
deterministic SQL ledger — positions, trades, and the member books
are rebuildable from replay.

## Use cases

- **Deterministic projection** — the same event stream always
  produces the same ledger; rebuilds from replay are first-class.
- **Member books** — per-member positions and trade history as the
  clearing tier's own tables, FORCE-RLS'd like every tenant table.
- **Downstream feed** — the ledger feeds Settlement (novation,
  custody), Margin (position revaluation), and Reporting.

## Deep dive

[Clearing reference](/docs/reference/clearing/) — harvested from
`Exchange8-dev/exchange8-clearing`.