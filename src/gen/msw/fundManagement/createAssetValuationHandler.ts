import { http } from "msw";

import { createCreateAssetValuationMutationResponse } from "../../mocks/fundManagement/createCreateAssetValuation";

export const createAssetValuationHandler = http.post(
  "*/assets/:assetId/valuations",
  function handler(info) {
    return new Response(
      JSON.stringify(createCreateAssetValuationMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
