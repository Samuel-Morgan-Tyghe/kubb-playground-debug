import { http } from "msw";

import { createGetGeneralPartnerByIdQueryResponse } from "../../mocks/kyc/createGetGeneralPartnerById";

export const getGeneralPartnerByIdHandler = http.get(
  "*/general-partners/:generalPartnerId",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetGeneralPartnerByIdQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
