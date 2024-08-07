import { http } from "msw";

import { createUpdateSubscriptionMutationResponse } from "../../mocks/subscriptions/createUpdateSubscription";

export const updateSubscriptionHandler = http.patch(
  "*/subscriptions/:subscriptionId",
  function handler(info) {
    return new Response(
      JSON.stringify(createUpdateSubscriptionMutationResponse()),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);
