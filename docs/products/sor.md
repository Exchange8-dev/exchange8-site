---
sidebar_position: 6
---

# Exchange8:SOR — smart order routing

The smart order router: it routes orders to external venues and home
again — consuming routing requests, resolving venue destinations,
executing, consolidating fills, and re-posting to Exchange8:ME so the home
market sees the full picture.

## Use cases

- **External venue execution** — an order routes to the best venue
  per the configured strategy; fills return as consolidated events.
- **Home re-posting** — external executions re-post to the ME so
  Clearing, Regulatory, and Surveillance see one unified event
  stream.
- **Venue state supervision** — venue sessions, health, and
  entitlements managed with the same certificate identity as every
  other edge.

## Deep dive

[SOR reference](/docs/reference/sor/) — harvested from
`Exchange8-dev/exchange8-sor`.