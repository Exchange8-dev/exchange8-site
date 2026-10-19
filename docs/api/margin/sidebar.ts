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
          label: "`GET /v1/health`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/list-liquidations",
          label: "`GET /v1/liquidations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/list-margin-accounts",
          label: "`GET /v1/margin-accounts`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/list-positions",
          label: "`GET /v1/positions`",
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
          label: "`GET /v1/admin/liquidations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/admin-list-margin-accounts",
          label: "`GET /v1/admin/margin-accounts`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/admin-list-positions",
          label: "`GET /v1/admin/positions`",
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
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/margin/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/margin/policy-delete-attribute-path",
          label: "`POST /v1/admin/attributes/{id}/delete`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-list-decisions",
          label: "`GET /v1/admin/policy-decisions`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/policy-create-set",
          label: "`POST /v1/admin/policy-sets`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/margin/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/margin/policy-save-set",
          label: "`POST /v1/admin/policy-sets/{name}/save`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-flip-set",
          label: "`POST /v1/admin/policy-sets/{name}/{action}`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/margin/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/margin/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/margin/policy-check-relation",
          label: "`GET /v1/admin/relations/check`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/margin/policy-delete-relation-path",
          label: "`POST /v1/admin/relations/{id}/delete`",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
