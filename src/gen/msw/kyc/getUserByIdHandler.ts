import { http } from "msw";

import { createGetUserByIdQueryResponse } from "../../mocks/kyc/createGetUserById";

export const getUserByIdHandler = http.get(
  "*/users/:userId",
  function handler(info) {
    return new Response(JSON.stringify(createGetUserByIdQueryResponse()), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
);
