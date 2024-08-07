import { http } from "msw";

import { createCreateSubscriptionMutationResponse } from "../../mocks/subscriptions/createCreateSubscription";

export const createSubscriptionHandler = http.post(
  "*/subscriptions",
  function handler(info) {
    return new Response(
      JSON.stringify(createCreateSubscriptionMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
