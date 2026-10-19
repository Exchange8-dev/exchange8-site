import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "oms",
      link: {
        type: "doc",
        id: "api/oms/exchange-8-oms",
      },
      items: [
        {
          type: "doc",
          id: "api/oms/oms-health",
          label: "Spec wrapper for the shell-owned `/v1/health` mount.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "exchange8-admin",
      link: {
        type: "doc",
        id: "api/oms/exchange-8-oms",
      },
      items: [
        {
          type: "doc",
          id: "api/oms/admin-algo-orders",
          label: "`POST /v1/admin/algo-orders` — the durable algo parents (RFW page data;\nRLS-scoped read of `oms.algo_order` with explicit `env_id`). Gate: the\n`algos` read scope.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/pause-algo-order",
          label: "`POST /v1/admin/algo-orders/{id}/pause` — pause the running parent\n(`running → paused`; the durable binding + transition event + audit).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/resume-algo-order",
          label: "`POST /v1/admin/algo-orders/{id}/resume` — resume the paused parent\n(`paused → running`).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/admin-conditionals",
          label: "`POST /v1/admin/conditionals` — the held conditional table (RFW page\ndata; read-only). Gate: the `conditionals` page's read scope.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/admin-pegs",
          label: "`POST /v1/admin/pegs` — the live peg table (RFW page data; read-only).\nGate: the `pegs` page's read scope.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/admin-ui-page",
          label: "`GET /v1/admin/ui/{page}` — the declared RFW page definition (Dash\nrenders it; gated by the page's Shield action; 404 for undeclared\nslugs) — the refdata `handlers::admin_ui_page` pattern.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/oms/exchange-8-oms",
      },
      items: [
        {
          type: "doc",
          id: "api/oms/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/oms/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/oms/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/oms/policy-delete-attribute-path",
          label: "policy_delete_attribute_path",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-list-decisions",
          label: "policy_list_decisions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/oms/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/oms/policy-create-set",
          label: "policy_create_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/oms/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/oms/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/oms/policy-save-set",
          label: "policy_save_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-flip-set",
          label: "policy_flip_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/oms/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/oms/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/oms/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/oms/policy-delete-relation-path",
          label: "policy_delete_relation_path",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
