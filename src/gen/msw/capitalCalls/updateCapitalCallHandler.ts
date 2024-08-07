import { http } from "msw";

import { createUpdateCapitalCallMutationResponse } from "../../mocks/capitalCalls/createUpdateCapitalCall";

export const updateCapitalCallHandler = http.patch(
  "*/capital-calls/:capitalCallId",
  function handler(info) {
    return new Response(
      JSON.stringify(createUpdateCapitalCallMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
