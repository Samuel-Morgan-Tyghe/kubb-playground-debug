import { http } from "msw";

import { createGetTransactionByIdQueryResponse } from "../../mocks/transactions/createGetTransactionById";

export const getTransactionByIdHandler = http.get(
  "*/transactions/:transactionId",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetTransactionByIdQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
