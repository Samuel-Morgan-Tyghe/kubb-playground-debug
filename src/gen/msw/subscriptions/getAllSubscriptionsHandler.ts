import { http } from "msw";

import { createGetAllSubscriptionsQueryResponse } from "../../mocks/subscriptions/createGetAllSubscriptions";

export const getAllSubscriptionsHandler = http.get(
  "*/subscriptions",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetAllSubscriptionsQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
