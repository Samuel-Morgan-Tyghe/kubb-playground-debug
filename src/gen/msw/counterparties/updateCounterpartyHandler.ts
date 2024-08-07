import { http } from "msw";

import { createUpdateCounterpartyMutationResponse } from "../../mocks/counterparties/createUpdateCounterparty";

export const updateCounterpartyHandler = http.patch(
  "*/counterparties/:counterpartyId",
  function handler(info) {
    return new Response(
      JSON.stringify(createUpdateCounterpartyMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
