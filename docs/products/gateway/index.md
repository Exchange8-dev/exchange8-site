---
sidebar_position: 2
---

# Exchange8:Gateway - market access

The market-access front end: it terminates FIX 4.2 client sessions
(with an OUCH binary-codec subset and BFF-proxied REST/WebSocket
order shapes), runs the FIX session protocol (logon, sequence
integrity, resends, heartbeats), and owns the order states above the
fill. Books and fills belong to Exchange8:ME.

## Use cases

- **Member connectivity** - a member firm connects over FIX 4.2 or
  the OUCH binary codec; sessions carry sequence integrity, resend
  handling, and heartbeat supervision.
- **Order lifecycle above the fill** - Gateway owns new/replace/cancel
  acknowledgments and order-state reporting; the matching engine owns
  the book.
- **Web/WebSocket members** - the eExchange app and API clients enter
  orders through the BFF-proxied shapes; the same submission pipeline
  runs the pre-trade risk gate.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/gateway/) - the maintainer's README in the consolidated reference section.

