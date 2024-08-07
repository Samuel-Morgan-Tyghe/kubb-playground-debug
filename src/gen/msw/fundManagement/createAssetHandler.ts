import { http } from "msw";

import { createCreateAssetMutationResponse } from "../../mocks/fundManagement/createCreateAsset";

export const createAssetHandler = http.post("*/assets", function handler(info) {
  return new Response(JSON.stringify(createCreateAssetMutationResponse()), {
    headers: {
      "Content-Type": "application/json",
    },
  });
});
