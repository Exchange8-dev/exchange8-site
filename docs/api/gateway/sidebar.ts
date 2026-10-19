import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "gateway",
      link: {
        type: "doc",
        id: "api/gateway/exchange-8-gateway",
      },
      items: [
        {
          type: "doc",
          id: "api/gateway/list-connections",
          label: "`GET /v1/connections`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/get-seq-state",
          label: "`GET /v1/connections/{id}/seq`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/seq-reset",
          label: "`POST /v1/connections/{id}/seq-reset`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/gateway-health",
          label: "`GET /v1/health`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/ws-upgrade",
          label: "`GET /ws`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "exchange8-admin",
      link: {
        type: "doc",
        id: "api/gateway/exchange-8-gateway",
      },
      items: [
        {
          type: "doc",
          id: "api/gateway/admin-list-connections",
          label: "`GET /v1/admin/connections`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/list-fix-messages",
          label: "`GET /v1/admin/messages`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/admin-list-sessions",
          label: "`GET /v1/admin/sessions`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/stop-session",
          label: "`POST /v1/admin/sessions`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/admin-stop-session-post",
          label: "`POST /v1/admin/sessions/{id}/stop`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/admin-ui-page",
          label: "`GET /v1/admin/ui/{page}`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/gateway/exchange-8-gateway",
      },
      items: [
        {
          type: "doc",
          id: "api/gateway/policy-list-attributes",
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/gateway/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/gateway/policy-delete-attribute-path",
          label: "`POST /v1/admin/attributes/{id}/delete`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-list-decisions",
          label: "`GET /v1/admin/policy-decisions`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/policy-create-set",
          label: "`POST /v1/admin/policy-sets`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/gateway/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/gateway/policy-save-set",
          label: "`POST /v1/admin/policy-sets/{name}/save`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-flip-set",
          label: "`POST /v1/admin/policy-sets/{name}/{action}`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/gateway/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/gateway/policy-check-relation",
          label: "`GET /v1/admin/relations/check`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/policy-delete-relation-path",
          label: "`POST /v1/admin/relations/{id}/delete`",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "gateway-internal",
      items: [
        {
          type: "doc",
          id: "api/gateway/internal-schedules-run",
          label: "`POST /v1/internal/schedules/run`",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
