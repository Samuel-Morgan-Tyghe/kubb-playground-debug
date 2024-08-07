import { http } from "msw";

import { createGetBankAccountByIdQueryResponse } from "../../mocks/bankAccounts/createGetBankAccountById";

export const getBankAccountByIdHandler = http.get(
  "*/bank-accounts/:bankAccountId",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetBankAccountByIdQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
