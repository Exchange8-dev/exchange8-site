---
sidebar_position: 11
---

# Exchange8:MD — consolidated market data

The consolidated market-data publisher: it consumes matching-engine
order/trade/status events and produces the public market-data tiers —
BBO, trades, and depth — for members, the app, and downstream
analytics.

## Use cases

- **Public data tiers** — the venue's authorized public data derives
  from the ME event stream; entitlement tiers gate depth visibility.
- **Streaming delivery** — SSE/WebSocket tiers ride the platform's
  transport conventions; REST snapshots for the app.
- **Deterministic publication** — the same trade stream always
  produces the same published series.

## Deep dive

[MD reference](/docs/reference/md/) — harvested from
`Exchange8-dev/exchange8-md`.