import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "clearing",
      link: {
        type: "doc",
        id: "api/clearing/exchange-8-clearing",
      },
      items: [
        {
          type: "doc",
          id: "api/clearing/clearing-health",
          label: "Spec wrapper for the shell-owned `/v1/health` mount.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/clearing/list-orders",
          label: "`GET /v1/orders` — the order day log (FIX_ORDER).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/clearing/list-trades",
          label: "`GET /v1/trades` — list executions (RLS-scoped). Both per-side rows of a\ntrade carry the same `trade_id` (one-row-per-side shape).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/clearing/bust-trade",
          label: "`POST /v1/trades/bust` — bust a trade (step-up auth: `exchange8:trade:bust`).",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "exchange8-admin",
      link: {
        type: "doc",
        id: "api/clearing/exchange-8-clearing",
      },
      items: [
        {
          type: "doc",
          id: "api/clearing/admin-list-orders",
          label: "Spec wrapper for the alias route (same handler as the public path).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/clearing/admin-list-trades",
          label: "Spec wrapper for the alias route (same handler as the public path).",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/clearing/exchange-8-clearing",
      },
      items: [
        {
          type: "doc",
          id: "api/clearing/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/clearing/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/clearing/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/clearing/policy-delete-attribute-path",
          label: "policy_delete_attribute_path",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/clearing/policy-list-decisions",
          label: "policy_list_decisions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/clearing/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/clearing/policy-create-set",
          label: "policy_create_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/clearing/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/clearing/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/clearing/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/clearing/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/clearing/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/clearing/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/clearing/policy-save-set",
          label: "policy_save_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/clearing/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/clearing/policy-flip-set",
          label: "policy_flip_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/clearing/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/clearing/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/clearing/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/clearing/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/clearing/policy-delete-relation-path",
          label: "policy_delete_relation_path",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
