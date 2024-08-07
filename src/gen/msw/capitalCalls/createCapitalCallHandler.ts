import { http } from "msw";

import { createCreateCapitalCallMutationResponse } from "../../mocks/capitalCalls/createCreateCapitalCall";

export const createCapitalCallHandler = http.post(
  "*/capital-calls",
  function handler(info) {
    return new Response(
      JSON.stringify(createCreateCapitalCallMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
