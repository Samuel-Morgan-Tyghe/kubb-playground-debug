import { http } from "msw";

import { createGetUsersForLimitedPartnerQueryResponse } from "../../mocks/kyc/createGetUsersForLimitedPartner";

export const getUsersForLimitedPartnerHandler = http.get(
  "*/users",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetUsersForLimitedPartnerQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
