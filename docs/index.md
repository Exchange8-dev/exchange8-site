---
sidebar_position: 1
---

# Exchange8 - the capital-markets vertical

Exchange8 is a full exchange / MTF / ATS platform on Sentin8:
fourteen Rust services covering market access (FIX/OUCH), a
deterministic matching engine, peg and conditional order supervision,
smart order routing, clearing, margin, market data, reference data,
regulatory reporting, and surveillance - plus the eExchange trading
app.

```mermaid
graph TD
    subgraph access["Market access"]
        GW["Exchange8:Gateway<br/>(FIX 4.2 / OUCH / REST)"]
    end
    subgraph matching["Matching tier"]
        OMS["Exchange8:OMS<br/>(peg / iceberg / conditional)"]
        ME["Exchange8:ME<br/>(deterministic CLOB)"]
        RISK["Exchange8:Risk<br/>(pre-trade gate)"]
    end
    subgraph data["Market data"]
        MD["Exchange8:MD"]
        VF["Exchange8:VFeeds"]
        RD["Exchange8:RefData"]
    end
    subgraph post["Post-trade"]
        CLR["Exchange8:Clearing"]
        SET["Exchange8:Settlement"]
        MAR["Exchange8:Margin"]
        RFQ["Exchange8:RFQ"]
    end
    subgraph compliance["Compliance"]
        REG["Exchange8:Regulatory"]
        SUR["Exchange8:Surveillance"]
    end
    APP["eExchange app"] -->|"via Sentin8:BFF"| GW
    GW --> RISK --> ME
    OMS --> ME
    SOR["Exchange8:SOR"] --> ME
    ME --> MD & CLR
    CLR --> SET & MAR
    GW & ME --> REG & SUR
    VF --> MD
    RD --> ME
```

## The products

| Tier | Products |
|---|---|
| Access | [Gateway](/docs/products/gateway) |
| Matching | [ME](/docs/products/me) · [OMS](/docs/products/oms) · [Risk](/docs/products/risk) |
| Routing | [SOR](/docs/products/sor) · [VFeeds](/docs/products/vfeeds) |
| Post-trade | [Clearing](/docs/products/clearing) · [Settlement](/docs/products/settlement) · [Margin](/docs/products/margin) |
| Quote-driven | [RFQ](/docs/products/rfq) |
| Data | [MD](/docs/products/md) · [RefData](/docs/products/refdata) |
| Compliance | [Regulatory](/docs/products/regulatory) · [Surveillance](/docs/products/surveillance) |

## Security

Exchange8 inherits the platform's five pillars and adds market
guarantees: deterministic matching, synchronous pre-trade
authorization on every order, event-sourced books, and surveillance
as a first-class tier. Read the [security page](/docs/security).