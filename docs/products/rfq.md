---
sidebar_position: 10
---

# Exchange8:RFQ — quote-driven FX trading

The quote-driven trading service: the Request-For-Quote engine for
FX — clients broadcast an RFQ (pair, side, qty, tenor), all entitled
liquidity providers respond with two-way prices inside a bounded
quote window, and the client executes against a firm quote.

## Use cases

- **RFQ lifecycle** — broadcast → LP responses → execution inside the
  window; quotes expire deterministically.
- **LP entitlements** — which liquidity providers see which pairs is
  a live authorization decision (Shield), not a config file.
- **Execution records** — every quote and trade persists with the
  full response set — audit-grade record-keeping for OTC FX.

## Deep dive

[RFQ reference](/docs/reference/rfq/) — harvested from
`Exchange8-dev/exchange8-rfq`.