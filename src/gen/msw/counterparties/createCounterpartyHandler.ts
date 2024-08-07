import { http } from "msw";

import { createCreateCounterpartyMutationResponse } from "../../mocks/counterparties/createCreateCounterparty";

export const createCounterpartyHandler = http.post(
  "*/counterparties",
  function handler(info) {
    return new Response(
      JSON.stringify(createCreateCounterpartyMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
