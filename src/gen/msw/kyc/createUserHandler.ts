import { http } from "msw";

import { createCreateUserMutationResponse } from "../../mocks/kyc/createCreateUser";

export const createUserHandler = http.post("*/users", function handler(info) {
  return new Response(JSON.stringify(createCreateUserMutationResponse()), {
    headers: {
      "Content-Type": "application/json",
    },
  });
});
