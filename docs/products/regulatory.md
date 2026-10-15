---
sidebar_position: 13
---

# Ex8:Regulatory — multi-jurisdiction reporting

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

## Deep dive

[Regulatory reference](/docs/reference/regulatory/) — harvested
from `Exchange8-dev/exchange8-regulatory`.