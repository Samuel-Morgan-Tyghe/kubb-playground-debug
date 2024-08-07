import { http } from "msw";

import { createUpdateUserMutationResponse } from "../../mocks/kyc/createUpdateUser";

export const updateUserHandler = http.patch(
  "*/users/:userId",
  function handler(info) {
    return new Response(JSON.stringify(createUpdateUserMutationResponse()), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
);
