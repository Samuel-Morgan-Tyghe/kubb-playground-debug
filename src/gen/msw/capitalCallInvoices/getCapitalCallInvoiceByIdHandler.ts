import { http } from "msw";

import { createGetCapitalCallInvoiceByIdQueryResponse } from "../../mocks/capitalCallInvoices/createGetCapitalCallInvoiceById";

export const getCapitalCallInvoiceByIdHandler = http.get(
  "*/capital-call-invoices/:capitalCallInvoiceId",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetCapitalCallInvoiceByIdQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
