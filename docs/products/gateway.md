---
sidebar_position: 2
---

# Ex8:Gateway — market access

The market-access front end: it terminates FIX 4.2 client sessions
(with an OUCH binary-codec subset and BFF-proxied REST/WebSocket
order shapes), runs the FIX session protocol (logon, sequence
integrity, resends, heartbeats), and owns the order states above the
fill. Books and fills belong to Ex8:ME.

## Use cases

- **Member connectivity** — a member firm connects over FIX 4.2 or
  the OUCH binary codec; sessions carry sequence integrity, resend
  handling, and heartbeat supervision.
- **Order lifecycle above the fill** — Gateway owns new/replace/cancel
  acknowledgments and order-state reporting; the matching engine owns
  the book.
- **Web/WebSocket members** — the eExchange app and API clients enter
  orders through the BFF-proxied shapes; the same submission pipeline
  runs the pre-trade risk gate.

## Deep dive

[Gateway reference](/docs/reference/gateway/) — README, DESIGN,
BUSINESS harvested from `Exchange8-dev/exchange8-gateway`.