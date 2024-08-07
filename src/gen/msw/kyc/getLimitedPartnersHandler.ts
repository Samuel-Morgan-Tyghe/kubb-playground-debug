import { http } from "msw";

import { createGetLimitedPartnersQueryResponse } from "../../mocks/kyc/createGetLimitedPartners";

export const getLimitedPartnersHandler = http.get(
  "*/limited-partners",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetLimitedPartnersQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
