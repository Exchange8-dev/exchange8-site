import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "margin",
      link: {
        type: "doc",
        id: "api/margin/exchange-8-margin",
      },
      items: [
        {
          type: "doc",
          id: "api/margin/margin-health",
          label: "Spec wrapper for the shell-owned `/v1/health` mount.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/list-liquidations",
          label: "`GET /v1/liquidations` — liquidation events.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/list-margin-accounts",
          label: "`GET /v1/margin-accounts` — margin balances + maintenance levels.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/list-positions",
          label: "`GET /v1/positions` — net positions per (account, contract).",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "exchange8-admin",
      link: {
        type: "doc",
        id: "api/margin/exchange-8-margin",
      },
      items: [
        {
          type: "doc",
          id: "api/margin/admin-list-liquidations",
          label: "Spec wrapper for the alias route (same handler as the public path).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/admin-list-margin-accounts",
          label: "Spec wrapper for the alias route (same handler as the public path).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/admin-list-positions",
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
        id: "api/margin/exchange-8-margin",
      },
      items: [
        {
          type: "doc",
          id: "api/margin/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/margin/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/margin/policy-delete-attribute-path",
          label: "policy_delete_attribute_path",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-list-decisions",
          label: "policy_list_decisions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/policy-create-set",
          label: "policy_create_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/margin/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/margin/policy-save-set",
          label: "policy_save_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-flip-set",
          label: "policy_flip_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/margin/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/margin/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/policy-delete-relation-path",
          label: "policy_delete_relation_path",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
