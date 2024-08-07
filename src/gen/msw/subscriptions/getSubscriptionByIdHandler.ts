import { http } from "msw";

import { createGetSubscriptionByIdQueryResponse } from "../../mocks/subscriptions/createGetSubscriptionById";

export const getSubscriptionByIdHandler = http.get(
  "*/subscriptions/:subscriptionId",
  function handler(info) {
    return new Response(
      JSON.stringify(createGetSubscriptionByIdQueryResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
