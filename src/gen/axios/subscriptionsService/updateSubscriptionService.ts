import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  UpdateSubscriptionMutationRequest,
  UpdateSubscriptionMutationResponse,
  UpdateSubscriptionPathParams,
} from "../../types/subscriptions/UpdateSubscription";

/**
 * @summary Update a subscription
 * @link /subscriptions/:subscriptionId
 */
export async function updateSubscriptionService(
  subscriptionId: UpdateSubscriptionPathParams["subscriptionId"],
  data?: UpdateSubscriptionMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateSubscriptionMutationResponse>["data"]> {
  const res = await client<
    UpdateSubscriptionMutationResponse,
    UpdateSubscriptionMutationRequest
  >({
    data,
    method: "patch",
    url: `/subscriptions/${subscriptionId}`,
    ...options,
  });

  return res.data;
}
