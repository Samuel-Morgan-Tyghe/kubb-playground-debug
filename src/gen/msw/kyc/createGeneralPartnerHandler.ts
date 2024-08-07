import { http } from "msw";

import { createCreateGeneralPartnerMutationResponse } from "../../mocks/kyc/createCreateGeneralPartner";

export const createGeneralPartnerHandler = http.post(
  "*/general-partners",
  function handler(info) {
    return new Response(
      JSON.stringify(createCreateGeneralPartnerMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
