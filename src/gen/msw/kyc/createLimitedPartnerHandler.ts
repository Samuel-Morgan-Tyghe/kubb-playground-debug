import { http } from "msw";

import { createCreateLimitedPartnerMutationResponse } from "../../mocks/kyc/createCreateLimitedPartner";

export const createLimitedPartnerHandler = http.post(
  "*/limited-partners",
  function handler(info) {
    return new Response(
      JSON.stringify(createCreateLimitedPartnerMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
