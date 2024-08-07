import { http } from "msw";

import { createUpdateAssetMutationResponse } from "../../mocks/fundManagement/createUpdateAsset";

export const updateAssetHandler = http.patch(
  "*/assets/:assetId",
  function handler(info) {
    return new Response(JSON.stringify(createUpdateAssetMutationResponse()), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
);
