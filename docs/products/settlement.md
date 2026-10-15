---
sidebar_position: 8
---

# Exchange8:Settlement — external settlement integrations

The external settlement integrations service: novation (the central
counterparty substitutes itself for both original counterparties per
trade), custody and collateral for crypto and fiat rails, and
give-up/give-in flows.

## Use cases

- **Novation** — cleared trades transform into CCP-facing obligations;
  original counterparty exposure terminates at the CCP boundary.
- **Custody & collateral** — asset positions and collateral movements
  at external custodians integrate through their own rails.
- **Give-up / give-in** — broker-to-clearing-broker transfers with
  full audit on both sides.

## Deep dive

[Settlement reference](/docs/reference/settlement/) — harvested from
`Exchange8-dev/exchange8-settlement`.