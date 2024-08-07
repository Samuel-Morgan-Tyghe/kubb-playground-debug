import { http } from "msw";

import { createUpdateBankAccountMutationResponse } from "../../mocks/bankAccounts/createUpdateBankAccount";

export const updateBankAccountHandler = http.patch(
  "*/bank-accounts/:bankAccountId",
  function handler(info) {
    return new Response(
      JSON.stringify(createUpdateBankAccountMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
