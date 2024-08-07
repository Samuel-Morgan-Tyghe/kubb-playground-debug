import { http } from "msw";

import { createGetTransactionsQueryResponse } from "../../mocks/transactions/createGetTransactions";

export const getTransactionsHandler = http.get(
  "*/transactions",
  function handler(info) {
    return new Response(JSON.stringify(createGetTransactionsQueryResponse()), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
);
