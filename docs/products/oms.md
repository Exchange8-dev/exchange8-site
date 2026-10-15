---
sidebar_position: 4
---

# Ex8:OMS — peg, iceberg & conditional orders

The peg/iceberg supervision and conditional-order trigger engine: it
supervises pegged orders (primary/market/midpoint peg, dark
variant), slices iceberg orders into display pieces at the matching
engine, and holds stop/stop-limit/trailing-stop/conditional (OCO,
bracket) orders in its trigger engine — releasing them to Ex8:ME
only when their trigger fires.

## Use cases

- **Pegged orders** — the peg pricing core is a pure function over
  the quote snapshot; a market-peg ratchet is monotonic and the
  limit-conversion rule is provably identical run-to-run.
- **Iceberg orders** — display slices plan at the ME; the hidden
  quantity surfaces per the slice plan without leaking intention.
- **Conditional orders** — stop, OCO, and bracket orders rest in the
  trigger engine (never in the ME book) and release when the market
  condition fires.

## Deep dive

[OMS reference](/docs/reference/oms/) — harvested from
`Exchange8-dev/exchange8-oms`.