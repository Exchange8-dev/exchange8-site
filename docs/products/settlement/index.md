---
sidebar_position: 8
---

# Exchange8:Settlement - external settlement integrations

The external settlement integrations service: novation (the central
counterparty substitutes itself for both original counterparties per
trade), custody and collateral for crypto and fiat rails, and
give-up/give-in flows.

## Use cases

- **Novation** - cleared trades transform into CCP-facing obligations;
  original counterparty exposure terminates at the CCP boundary.
- **Custody & collateral** - asset positions and collateral movements
  at external custodians integrate through their own rails.
- **Give-up / give-in** - broker-to-clearing-broker transfers with
  full audit on both sides.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/settlement/) - the maintainer's README in the consolidated reference section.

