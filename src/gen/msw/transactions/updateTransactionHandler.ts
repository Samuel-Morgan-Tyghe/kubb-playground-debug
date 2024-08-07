import { http } from "msw";

import { createUpdateTransactionMutationResponse } from "../../mocks/transactions/createUpdateTransaction";

export const updateTransactionHandler = http.patch(
  "*/transactions/:transactionId",
  function handler(info) {
    return new Response(
      JSON.stringify(createUpdateTransactionMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
