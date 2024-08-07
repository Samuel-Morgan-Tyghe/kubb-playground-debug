import { http } from "msw";

import { createCreateAdminForAssetMutationResponse } from "../../mocks/fundManagement/createCreateAdminForAsset";

export const createAdminForAssetHandler = http.post(
  "*/assets/:assetId/fund-admins",
  function handler(info) {
    return new Response(
      JSON.stringify(createCreateAdminForAssetMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
