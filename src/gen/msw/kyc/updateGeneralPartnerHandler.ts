import { http } from "msw";

import { createUpdateGeneralPartnerMutationResponse } from "../../mocks/kyc/createUpdateGeneralPartner";

export const updateGeneralPartnerHandler = http.patch(
  "*/general-partners/:generalPartnerId",
  function handler(info) {
    return new Response(
      JSON.stringify(createUpdateGeneralPartnerMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
