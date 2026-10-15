---
sidebar_position: 14
---

# Ex8:Surveillance — market abuse detection

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

## Deep dive

[Surveillance reference](/docs/reference/surveillance/) — harvested
from `Exchange8-dev/exchange8-surveillance`.