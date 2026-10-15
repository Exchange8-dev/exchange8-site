---
sidebar_position: 15
---

# Exchange8:VFeeds — external venue feeds

External venue feeds, consolidated BBO, and index quotes: VFeeds
consolidates outside-venue BBO, maintains the index quotes the peg
and SOR tiers consume, and keeps the external view of the market
current for the pricing and routing engines.

## Use cases

- **Consolidated BBO** — the outside market's best bid/offer per
  symbol, refreshed on the venue cadence.
- **Peg inputs** — midpoint and market pegs price against VFeeds'
  consolidated view — the same quote always yields the same peg.
- **SOR context** — routing decisions see the external market
  before committing an order to a venue.

## Deep dive

[VFeeds reference](/docs/reference/vfeeds/) — harvested from
`Exchange8-dev/exchange8-vfeeds`.