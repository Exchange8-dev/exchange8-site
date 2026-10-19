import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "vfeeds",
      link: {
        type: "doc",
        id: "api/vfeeds/exchange-8-vfeeds",
      },
      items: [
        {
          type: "doc",
          id: "api/vfeeds/health",
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
        id: "api/vfeeds/exchange-8-vfeeds",
      },
      items: [
        {
          type: "doc",
          id: "api/vfeeds/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-delete-attribute-path",
          label: "policy_delete_attribute_path",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-list-decisions",
          label: "policy_list_decisions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-create-set",
          label: "policy_create_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-save-set",
          label: "policy_save_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-flip-set",
          label: "policy_flip_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-delete-relation-path",
          label: "policy_delete_relation_path",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
