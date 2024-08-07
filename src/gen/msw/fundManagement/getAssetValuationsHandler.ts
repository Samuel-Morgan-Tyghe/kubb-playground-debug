import { http } from "msw";

import { createGetAssetValuationsQueryResponse } from "../../mocks/fundManagement/createGetAssetValuations";

export const getAssetValuationsHandler = http.get(
  "*/assets/:assetId/valuations",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetAssetValuationsQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
