---
title: "Exchange8:RefData - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Exchange8-dev/exchange8-refdata/edit/main/docs/openapi.json
---
Sentin8 exchange8 refdata service.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**55 endpoints** across 4 groups.

## policy

### `GET /v1/admin/attributes`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Principal attributes of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `PUT /v1/admin/attributes`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Attribute stored | - |
| 400 | Invalid attribute definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/attributes`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Attribute deleted | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/attributes/{id}/delete`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Attribute deleted | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/policy-decisions`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Recent decision log | -[] |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/policy-sets`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy sets of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy set created | - |
| 400 | Invalid policy set definition | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/disable`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets disabled | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/enforce`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets switched to enforce mode | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/shadow`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets switched to shadow mode | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The policy set | - |
| 403 | Caller lacks the admin scope | - |
| 404 | Unknown policy set name | - |

### `PUT /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy set stored | - |
| 400 | Invalid policy set definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy set deleted | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/{name}/save`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy set saved | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/{name}/test`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Dry-run decision trace | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/{name}/{action}`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |
| `action` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Action applied | - |
| 400 | Unknown row action | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/relations`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | ReBAC relations of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `PUT /v1/admin/relations`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Relation stored | - |
| 400 | Invalid relation definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/relations`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Relation deleted | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/relations/check`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `subject` | query | yes | string |
| `relation` | query | yes | string |
| `object` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The check verdict | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/relations/{id}/delete`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Relation deleted | - |
| 403 | Caller lacks the admin scope | - |


## exchange8-admin

### `GET /v1/admin/corporate-actions`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `POST /v1/admin/corporate-actions`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/admin/corporate-actions/calendar`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `POST /v1/admin/corporate-actions/{id}/cancel`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/admin/markets`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `POST /v1/admin/markets`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `POST /v1/admin/markets/{id}/update`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/admin/securities`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `POST /v1/admin/securities`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/admin/securities/{id}`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `PUT /v1/admin/securities/{id}`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `DELETE /v1/admin/securities/{id}`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `POST /v1/admin/securities/{id}/delete`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `POST /v1/admin/securities/{id}/update`

Spec wrapper for the `/v1/admin` alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/admin/ui/{page}`

`GET /v1/admin/ui/&#123;page&#125;` - the RFW page definition (Dash renders it). Gated on the page's declared Shield action - UI definitions carry no tenant data; the decision is the step-5 mirror evaluation (the platform-admin trio rides the live evaluation). Returns 404 for an undeclared page.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |


## refdata

### `POST /v1/books/connections`

`POST /v1/books/connections` - register a book↔connection membership (outbox ``book-connection:created`` + audit journal row).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/corporate-actions`

`GET /v1/corporate-actions` - list corporate actions (RLS-scoped; the CA lifecycle calendar view).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/corporate-actions`

`POST /v1/corporate-actions` - announce a corporate action (stage `announced`; outbox `announced` event; audit journal row).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/corporate-actions/calendar`

`GET /v1/corporate-actions/calendar` - the upcoming-action view (calendar rows joined to their actions; CA read scope).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/corporate-actions/{id}/cancel`

`POST /v1/corporate-actions/&#123;id&#125;/cancel` - withdraw an action while it is still `announced` (the stage predicate is the guard: a raced tick that already advanced makes the cancel a 409). Events + journal in the same tx.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/health`

Spec wrapper for the shell-owned `/v1/health` mount.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Service is healthy | - |

### `POST /v1/holidays`

`POST /v1/holidays` - declare a market holiday (+ per-market closure rows; outbox ``holiday:created`` + audit journal row).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/markets`

`GET /v1/markets` - list markets (RLS-scoped).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/markets`

`POST /v1/markets` + `POST /v1/admin/markets` - create a market.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/markets/{id}`

`PUT /v1/markets/&#123;id&#125;` - update a market (guarded, full snapshot event).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/securities`

`GET /v1/securities` - list securities (RLS-scoped).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/securities`

`POST /v1/securities` - create a security (RLS-scoped insert).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/securities/{id}`

`GET /v1/securities/&#123;id&#125;` - single lookup.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/securities/{id}`

`PUT /v1/securities/&#123;id&#125;` - update mutable security fields. Halting/ trading-state changes are Exchange8:ME's (market control) - the refdata update path carries identity/precision/book fields only.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `DELETE /v1/securities/{id}`

`DELETE /v1/securities/&#123;id&#125;` - remove a security row. Blocked when the security is referenced (the FK errors map to 409).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/tick-rules`

`GET /v1/tick-rules` - list tick rules.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/tick-rules`

`POST /v1/tick-rules` - create a tick rule + its bands in one tx (outbox ``tick-rule:created`` + audit journal row).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/tick-rules/{id}`

`PUT /v1/tick-rules/&#123;id&#125;` - rename a tick rule (band edits are separate writes under the same write scope; renames are the admin-surface mutation).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |


## refdata-internal

### `POST /v1/internal/schedules/run`

`POST /v1/internal/schedules/run` - Sentin8:Cron proxy-back target for the corporate-action transition worker (the platform secrets precedent: the ticker calls back with its own workload certificate, verified like any other principal; step 5 evaluates the dedicated transition action and the mirror admits the cron workload's ``sentin8:cron:write``).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

