---
title: "Exchange8:Gateway - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Exchange8-dev/exchange8-gateway/edit/main/docs/openapi.json
---
Sentin8 exchange8 gateway service.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**33 endpoints** across 4 groups.

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

### `GET /v1/admin/connections`

Spec wrapper for the alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/admin/messages`

`GET /v1/admin/messages` - the resend-window store rows (the `messages` page data endpoint; retention-purged per DESIGN.md §6).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/admin/sessions`

Spec wrapper for the alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `POST /v1/admin/sessions`

`POST /v1/admin/sessions/&#123;id&#125;/stop` - admin session stop (design §4.5 `sessions` page action; the runtime registry delivers the logout).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/admin/sessions/{id}/stop`

Spec wrapper for the alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/admin/ui/{page}`

`GET /v1/admin/ui/&#123;page&#125;` - the RFW page definition (Dash renders it; gated by the page's declared admin scope).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |


## gateway

### `GET /v1/connections`

`GET /v1/connections` - list client sessions (RLS-scoped).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/connections/{id}/seq`

`GET /v1/connections/&#123;id&#125;/seq` - persisted FIX sequence counters.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/connections/{id}/seq-reset`

`POST /v1/connections/&#123;id&#125;/seq-reset` - admin sequence reset (the platform spec seq reset parity; design §6 admin ops).

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

### `GET /ws`

Spec wrapper for the alias route (same handler as the public path).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |


## gateway-internal

### `POST /v1/internal/schedules/run`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

