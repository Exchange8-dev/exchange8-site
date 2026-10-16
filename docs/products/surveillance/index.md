---
sidebar_position: 14
---

# Exchange8:Surveillance — market abuse detection

The market-surveillance service: the compliance tier that detects
market-abuse patterns in the trade/order event stream and turns
detections into reviewable cases. It implements the eight regulatory
detection families — spoofing, layering, wash trades, marking the
close, and more.

## Use cases

- **Detection families** — the eight regulatory detection patterns
  run on the live stream; every detection carries its evidence
  window.
- **Case lifecycle** — detections become reviewable cases with
  analyst disposition; terminal states never regress.
- **Event-sourced evidence** — the triggering event sequence
  persists with the case — the evidence is replayable, not
  summarized.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) — the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) — the full document, harvested from the unit's repository at build time.
- [Security](security) — the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/surveillance/) — the maintainer's README in the consolidated reference section.

