import { http } from "msw";

import { createGetCapitalCallByIdQueryResponse } from "../../mocks/capitalCalls/createGetCapitalCallById";

export const getCapitalCallByIdHandler = http.get(
  "*/capital-calls/:capitalCallId",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetCapitalCallByIdQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
