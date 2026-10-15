---
sidebar_position: 1
---

# eExchange — the trading app

The exchange's member-facing trading app: order entry tickets, the
working blotter, market-data watchlists, account positions, and
executions — for desk operators and authorized member users, through
the BFF proxy like every platform app.

## What it demonstrates

- **Thin by design** — no FIX stack in the app: order entry rides the
  BFF-proxied REST/WebSocket shapes Gateway serves; the token never
  reaches the client bundle.
- **Live authorization** — a member user's tradable symbols and order
  types derive from live Shield decisions, not embedded claims.
- **Real-time surfaces** — market data over SSE, blotter updates
  over the subscription tier, positions from the clearing ledger.

## Deep dive

[eExchange reference](/docs/reference/eexchange/) — README, DESIGN,
BUSINESS harvested from `Exchange8-dev/exchange8-eexchange`.