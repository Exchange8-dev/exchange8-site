---
sidebar_position: 3
---

# Ex8:ME — the matching engine

The deterministic central-limit-order-book matching core: it accepts
order-entry events from Ex8:Gateway, Ex8:OMS, and Ex8:SOR re-posts,
matches at price-time priority, and emits the fill events every
downstream tier consumes.

## Use cases

- **Price-time priority CLOB** — the same order stream always
  produces the same fills, run to run; the core is a pure function
  over events.
- **Self-trade prevention** — the configured STP policies prevent
  member self-crosses without halting the book.
- **Event fan-out** — order, trade, and status events publish to the
  venue flow: MD (public data), Clearing (ledger projection),
  Regulatory/Surveillance (reportable activity).

## Deep dive

[ME reference](/docs/reference/me/) — harvested from
`Exchange8-dev/exchange8-me`.