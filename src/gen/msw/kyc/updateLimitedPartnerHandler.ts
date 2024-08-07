import { http } from "msw";

import { createUpdateLimitedPartnerMutationResponse } from "../../mocks/kyc/createUpdateLimitedPartner";

export const updateLimitedPartnerHandler = http.patch(
  "*/limited-partners/:limitedPartnerId",
  function handler(info) {
    return new Response(
      JSON.stringify(createUpdateLimitedPartnerMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
