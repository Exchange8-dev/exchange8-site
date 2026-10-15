---
sidebar_position: 12
---

# Ex8:RefData — the reference-data authority

The reference-data authority: the security master, markets, MIC
venues, currencies, order books, tick rules, market calendars, and
the customer/firm registration every other exchange8 tier resolves
against.

## Use cases

- **Security master** — instruments with tick rules, lot rules, and
  venue registrations; every tier resolves symbols against it.
- **Market calendars** — trading sessions, holidays, and halts drive
  the ME and Gateway.
- **Member registration** — firms, customers, and their entitlements
  register here; the authorization tiers consume it through
  reference, not direct table access.

## Deep dive

[RefData reference](/docs/reference/refdata/) — harvested from
`Exchange8-dev/exchange8-refdata`.