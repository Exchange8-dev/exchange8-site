---
sidebar_position: 13
---

# Exchange8:Regulatory — multi-jurisdiction reporting

The multi-jurisdiction regulatory reporting service: reportable
order, trade, and quote activity normalizes into a single event
shape, fans out to every reporting jurisdiction configured for the
environment, and tracks the per-jurisdiction submission lifecycle.

## Use cases

- **One event, many regimes** — a trade reports to CAT/OATS-style
  US obligations, MiFID II RTS-style EU obligations, and any
  configured regime from the same normalized event.
- **Submission lifecycle** — generate, submit, acknowledge, and
  amend with the full audit trail the platform mandates.
- **Configuration over code** — jurisdictions are data; a new regime
  is a configuration entry, not a release.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) — the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) — the full document, harvested from the unit's repository at build time.
- [Security](security) — the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/regulatory/) — the maintainer's README in the consolidated reference section.

