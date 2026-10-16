---
sidebar_position: 12
---

# Exchange8:RefData - the reference-data authority

The reference-data authority: the security master, markets, MIC
venues, currencies, order books, tick rules, market calendars, and
the customer/firm registration every other exchange8 tier resolves
against.

## Use cases

- **Security master** - instruments with tick rules, lot rules, and
  venue registrations; every tier resolves symbols against it.
- **Market calendars** - trading sessions, holidays, and halts drive
  the ME and Gateway.
- **Member registration** - firms, customers, and their entitlements
  register here; the authorization tiers consume it through
  reference, not direct table access.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/refdata/) - the maintainer's README in the consolidated reference section.

