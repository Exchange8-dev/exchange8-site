---
sidebar_position: 9
---

# Exchange8:Margin — derivatives risk engine

The asynchronous, stateful derivatives-risk engine: it owns the
net-position ledger per (environment, account, contract) for
futures, perpetuals, and options; revalues positions from the mark
events; and issues margin calls.

## Use cases

- **Net-position ledger** — per-account, per-contract positions for
  listed derivatives; opening/closing events project into the
  authoritative position state.
- **Revaluation** — marks drive position revaluation on the
  configured cadence (scheduled platform work).
- **Margin calls** — shortfall detection issues calls with the full
  input snapshot; calls settle through the clearing tier's
  obligations.

## Deep dive

[Margin reference](/docs/reference/margin/) — harvested from
`Exchange8-dev/exchange8-margin`.