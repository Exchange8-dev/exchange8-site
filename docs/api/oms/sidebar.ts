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
          label: "`GET /v1/health`",
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
          label: "`POST /v1/admin/algo-orders`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/pause-algo-order",
          label: "`POST /v1/admin/algo-orders/{id}/pause`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/resume-algo-order",
          label: "`POST /v1/admin/algo-orders/{id}/resume`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/admin-conditionals",
          label: "`POST /v1/admin/conditionals`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/admin-pegs",
          label: "`POST /v1/admin/pegs`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/admin-ui-page",
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
        id: "api/oms/exchange-8-oms",
      },
      items: [
        {
          type: "doc",
          id: "api/oms/policy-list-attributes",
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/oms/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/oms/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/oms/policy-delete-attribute-path",
          label: "`POST /v1/admin/attributes/{id}/delete`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-list-decisions",
          label: "`GET /v1/admin/policy-decisions`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/oms/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/oms/policy-create-set",
          label: "`POST /v1/admin/policy-sets`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/oms/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/oms/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/oms/policy-save-set",
          label: "`POST /v1/admin/policy-sets/{name}/save`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-flip-set",
          label: "`POST /v1/admin/policy-sets/{name}/{action}`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/oms/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/oms/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/oms/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/oms/policy-check-relation",
          label: "`GET /v1/admin/relations/check`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/oms/policy-delete-relation-path",
          label: "`POST /v1/admin/relations/{id}/delete`",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
