import { http } from "msw";

import { createGetCapitalCallsForAssetQueryResponse } from "../../mocks/capitalCalls/createGetCapitalCallsForAsset";

export const getCapitalCallsForAssetHandler = http.get(
  "*/capital-calls",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetCapitalCallsForAssetQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
