---
sidebar_position: 1
---

# Developers — building on exchange8

## The single-repo story

Clone any exchange8 service and build — the platform SDK and the
exchange8 SDK arrive as pinned git dependencies; committed `.sqlx`
caches mean no live database is needed to compile:

```bash
git clone https://github.com/Exchange8-dev/exchange8-me.git
cd exchange8-me
cargo build
cargo test     # offline
```

## The vertical lifecycle

```bash
make infra-up        # platform TLS-only PG 18 + Valkey
sentin8-cli db bootstrap
vertical init        # creates the exchange8 database + per-service schemas
vertical enroll      # registers services, scopes, admin UIs, triggers
make start           # captain spawns the fleet
```

No migration code exists — greenfield: schema changes rewrite the
init SQL and re-run `vertical init`.

## Integration surface

- **Rust**: the `exchange8-sdk` shared plane (FIX/OUCH/ITCH codecs,
  Price-Qty math, event contracts) — see the [SDK page](/docs/sdk/)
- **FIX/OUCH members**: connect sessions through Ex8:Gateway
- **App/API clients**: BFF-proxied REST/WebSocket order shapes
- **Events**: the venue flow over Sentin8:Bus

## Deep dive

Every service's full docs live in its [reference section](/docs/reference/) —
harvested from the public repositories at build time.