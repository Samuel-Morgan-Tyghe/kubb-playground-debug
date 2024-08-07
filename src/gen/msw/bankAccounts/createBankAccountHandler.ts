import { http } from "msw";

import { createCreateBankAccountMutationResponse } from "../../mocks/bankAccounts/createCreateBankAccount";

export const createBankAccountHandler = http.post(
  "*/bank-accounts",
  function handler(info) {
    return new Response(
      JSON.stringify(createCreateBankAccountMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
