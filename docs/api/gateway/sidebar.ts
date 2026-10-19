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
          label: "`GET /v1/connections` — list client sessions (RLS-scoped).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/get-seq-state",
          label: "`GET /v1/connections/{id}/seq` — persisted FIX sequence counters.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/seq-reset",
          label: "`POST /v1/connections/{id}/seq-reset` — admin sequence reset\n(the platform spec seq reset parity; design §6 admin ops).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/gateway-health",
          label: "Spec wrapper for the shell-owned `/v1/health` mount.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/ws-upgrade",
          label: "Spec wrapper for the alias route (same handler as the public path).",
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
          label: "Spec wrapper for the alias route (same handler as the public path).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/list-fix-messages",
          label: "`GET /v1/admin/messages` — the resend-window store rows (the `messages`\npage data endpoint; retention-purged per DESIGN.md §6).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/admin-list-sessions",
          label: "Spec wrapper for the alias route (same handler as the public path).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/stop-session",
          label: "`POST /v1/admin/sessions/{id}/stop` — admin session stop (design §4.5\n`sessions` page action; the runtime registry delivers the logout).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/admin-stop-session-post",
          label: "Spec wrapper for the alias route (same handler as the public path).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/admin-ui-page",
          label: "`GET /v1/admin/ui/{page}` — the RFW page definition (Dash renders it;\ngated by the page's declared admin scope).",
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
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/gateway/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/gateway/policy-delete-attribute-path",
          label: "policy_delete_attribute_path",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-list-decisions",
          label: "policy_list_decisions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/policy-create-set",
          label: "policy_create_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/gateway/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/gateway/policy-save-set",
          label: "policy_save_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-flip-set",
          label: "policy_flip_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/gateway/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/gateway/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/gateway/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/gateway/policy-delete-relation-path",
          label: "policy_delete_relation_path",
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
          label: "internal_schedules_run",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
