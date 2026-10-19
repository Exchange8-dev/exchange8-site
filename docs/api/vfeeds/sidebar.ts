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
          label: "`GET /v1/health`",
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
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-delete-attribute-path",
          label: "`POST /v1/admin/attributes/{id}/delete`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-list-decisions",
          label: "`GET /v1/admin/policy-decisions`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-create-set",
          label: "`POST /v1/admin/policy-sets`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-save-set",
          label: "`POST /v1/admin/policy-sets/{name}/save`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-flip-set",
          label: "`POST /v1/admin/policy-sets/{name}/{action}`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-check-relation",
          label: "`GET /v1/admin/relations/check`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vfeeds/policy-delete-relation-path",
          label: "`POST /v1/admin/relations/{id}/delete`",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
