---
sidebar_position: 4
---

# Exchange8:OMS — peg, iceberg & conditional orders

The peg/iceberg supervision and conditional-order trigger engine: it
supervises pegged orders (primary/market/midpoint peg, dark
variant), slices iceberg orders into display pieces at the matching
engine, and holds stop/stop-limit/trailing-stop/conditional (OCO,
bracket) orders in its trigger engine — releasing them to Exchange8:ME
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

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) — the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) — the full document, harvested from the unit's repository at build time.
- [Security](security) — the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/oms/) — the maintainer's README in the consolidated reference section.

