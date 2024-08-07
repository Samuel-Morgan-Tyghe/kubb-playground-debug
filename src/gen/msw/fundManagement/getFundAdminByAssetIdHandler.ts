import { http } from "msw";

import { createGetFundAdminByAssetIdQueryResponse } from "../../mocks/fundManagement/createGetFundAdminByAssetId";

export const getFundAdminByAssetIdHandler = http.get(
  "*/assets/:assetId/fund-admins",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetFundAdminByAssetIdQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
