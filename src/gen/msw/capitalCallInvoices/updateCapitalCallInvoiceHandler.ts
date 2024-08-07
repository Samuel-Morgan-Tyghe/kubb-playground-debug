import { http } from "msw";

import { createUpdateCapitalCallInvoiceMutationResponse } from "../../mocks/capitalCallInvoices/createUpdateCapitalCallInvoice";

export const updateCapitalCallInvoiceHandler = http.patch(
  "*/capital-call-invoices/:capitalCallInvoiceId",
  function handler(info) {
    return new Response(
      JSON.stringify(createUpdateCapitalCallInvoiceMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
