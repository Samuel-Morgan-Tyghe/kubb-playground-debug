import { http } from "msw";

import { createCreateTransactionMutationResponse } from "../../mocks/transactions/createCreateTransaction";

export const createTransactionHandler = http.post(
  "*/transactions",
  function handler(info) {
    return new Response(
      JSON.stringify(createCreateTransactionMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
