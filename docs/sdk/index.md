---
sidebar_position: 1
---

# exchange8 Rust SDK

The shared vertical plane: FIX/OUCH/ITCH protocol codecs,
fixed/Price-Qty math, the venue-flow event contracts, and typed
clients - consumed by every exchange8 service and by external
integrators as a pinned git tag.

```rust
use exchange8_sdk::fix::codec;
use exchange8_sdk::math::PriceQty;
use exchange8_sdk::events::{OrderAccepted, TradePrint};
```

## What's in the plane

| Import path | Role |
|---|---|
| `exchange8_sdk::fix` | FIX 4.2 session + application-layer codecs |
| `exchange8_sdk::ouch` | OUCH binary-codec subset |
| `exchange8_sdk::itch` | ITCH market-data feed decoding |
| `exchange8_sdk::math` | fixed-point Price/Qty arithmetic (no float drift) |
| `exchange8_sdk::events` | the venue-flow event contracts (order/trade/status) |
| `exchange8_sdk::clients` | typed clients over the service APIs |

## Why a shared plane

Every exchange8 service links the same codecs and math - a fill
serialized by ME, projected by Clearing, reported by Regulatory, and
drawn by eExchange carries bit-identical numbers end to end. The SDK
plane is the single source of that truth (SDD's shared-plane
linkage boundary keeps it a `{vertical}-sdk`, not dissolved
per-service crates).

## Deep dive

[exchange8-sdk reference](/docs/reference/sdk/) - harvested from
`Exchange8-dev/exchange8-sdk`.