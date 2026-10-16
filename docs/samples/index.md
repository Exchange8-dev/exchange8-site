---
sidebar_position: 1
---

# Samples

First calls against a running exchange8 deployment - through the BFF
proxy from cURL/Dart, and over FIX from a member session.

## 1. Submit an order (app/API shape)

```bash
curl -c jar.txt https://bff.{env}.{org}.example.com/v1/sign-in \
  -H 'content-type: application/json' \
  -d '{"email": "you@example.com", "password": "…"}'

curl -b jar.txt \
  https://bff.{env}.{org}.example.com/proxy/gateway/v1/orders \
  -H 'content-type: application/json' \
  -d '{
    "symbol": "AAPL",
    "side": "buy",
    "order_type": "limit",
    "qty": "100",
    "limit_price": "182.50",
    "idempotency_key": "ord-001"
  }'
```

Every submission passes the Exchange8:Risk gate before the matching
engine - a rejected order 4xxs deterministically with the reason.

## 2. Watch the market data

```bash
curl -N -b jar.txt \
  "https://bff.{env}.{org}.example.com/subscribe?family=md"
```

The SSE tier streams BBO and trade prints as the venue flow
publishes them.

## 3. From Dart (the eExchange pattern)

```dart
final ctx = await fetchRuntimeContext();
final bff = Bff8ApiClient(origin: ctx.origin);

await bff.post('gateway', '/v1/orders', body: {
  'symbol': 'AAPL',
  'side': 'buy',
  'order_type': 'limit',
  'qty': '100',
  'limit_price': '182.50',
  'idempotency_key': 'ord-001',
});
```

## 4. Over FIX (member session shape)

```
8=FIX.4.2|35=D|49=MEMBER|56=EXCHG|11=ord-002|55=AAPL|54=1|38=100|40=2|44=182.50
```

Gateway terminates the session with sequence integrity, resends,
and heartbeats - the same order then rides the identical risk gate
and matching core as the API shape.

## 5. From Rust (vertical consumer)

```rust
use exchange8_sdk::fix::codec;           // shared FIX/OUCH/ITCH plane
use exchange8_sdk::events::TradePrint;   // venue-flow event contracts

let print = codec::decode_trade(&frame)?;
```

Fixed/Price-Qty math and protocol codecs come from the vertical's
shared SDK plane - one place, consumed by every service and
integrator.