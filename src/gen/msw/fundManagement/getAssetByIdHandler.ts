import { http } from "msw";

import { createGetAssetByIdQueryResponse } from "../../mocks/fundManagement/createGetAssetById";

export const getAssetByIdHandler = http.get(
  "*/assets/:assetId",
  function handler(info) {
    return new Response(JSON.stringify(createGetAssetByIdQueryResponse()), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
);
