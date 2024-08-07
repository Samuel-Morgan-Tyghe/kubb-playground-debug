import { http } from "msw";

import { createGetCounterpartyByIdQueryResponse } from "../../mocks/counterparties/createGetCounterpartyById";

export const getCounterpartyByIdHandler = http.get(
  "*/counterparties/:counterpartyId",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetCounterpartyByIdQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
