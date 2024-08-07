import { http } from "msw";

import { createGetLimitedPartnerByIdQueryResponse } from "../../mocks/kyc/createGetLimitedPartnerById";

export const getLimitedPartnerByIdHandler = http.get(
  "*/limited-partners/:limitedPartnerId",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetLimitedPartnerByIdQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
