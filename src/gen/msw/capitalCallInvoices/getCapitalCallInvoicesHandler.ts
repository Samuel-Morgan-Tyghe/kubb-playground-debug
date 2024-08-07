import { http } from "msw";

import { createGetCapitalCallInvoicesQueryResponse } from "../../mocks/capitalCallInvoices/createGetCapitalCallInvoices";

export const getCapitalCallInvoicesHandler = http.get(
  "*/capital-call-invoices",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetCapitalCallInvoicesQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
