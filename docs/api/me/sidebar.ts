import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "me",
      link: {
        type: "doc",
        id: "api/me/exchange-8-me",
      },
      items: [
        {
          type: "doc",
          id: "api/me/me-health",
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
        id: "api/me/exchange-8-me",
      },
      items: [
        {
          type: "doc",
          id: "api/me/auctions-snapshot",
          label: "`POST /v1/admin/auctions` — the durable auction sessions (RFW table\ndata; RLS-scoped read of `me.auction`).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/me/admin-ui-auctions-page",
          label: "`GET /v1/admin/ui/auctions` — the auctions RFW page definition.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/me/admin-ui-engine-page",
          label: "`GET /v1/admin/ui/engine` — the RFW page definition (Dash renders it).\nGate: the page's declared scope (the `exchange8:order:read` admin\nvocabulary; the step-5 mirror admits the platform-admin trio).",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/me/exchange-8-me",
      },
      items: [
        {
          type: "doc",
          id: "api/me/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/me/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/me/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/me/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/me/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/me/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/me/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/me/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/me/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/me/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/me/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/me/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/me/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/me/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/me/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
