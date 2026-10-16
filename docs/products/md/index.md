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

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) — the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) — the full document, harvested from the unit's repository at build time.
- [Security](security) — the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/md/) — the maintainer's README in the consolidated reference section.

