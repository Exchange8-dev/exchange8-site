import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "sor",
      link: {
        type: "doc",
        id: "api/sor/exchange-8-sor",
      },
      items: [
        {
          type: "doc",
          id: "api/sor/health",
          label: "Spec wrapper for the shell-owned `/v1/health` mount.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/sor/exchange-8-sor",
      },
      items: [
        {
          type: "doc",
          id: "api/sor/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/sor/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/sor/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/sor/policy-delete-attribute-path",
          label: "policy_delete_attribute_path",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/sor/policy-list-decisions",
          label: "policy_list_decisions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/sor/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/sor/policy-create-set",
          label: "policy_create_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/sor/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/sor/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/sor/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/sor/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/sor/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/sor/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/sor/policy-save-set",
          label: "policy_save_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/sor/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/sor/policy-flip-set",
          label: "policy_flip_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/sor/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/sor/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/sor/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/sor/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/sor/policy-delete-relation-path",
          label: "policy_delete_relation_path",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
