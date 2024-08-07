import { http } from "msw";

import { createUpdateAdminForAssetMutationResponse } from "../../mocks/fundManagement/createUpdateAdminForAsset";

export const updateAdminForAssetHandler = http.patch(
  "*/assets/:assetId/fund-admins",
  function handler(info) {
    return new Response(
      JSON.stringify(createUpdateAdminForAssetMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
