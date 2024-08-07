import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetSubscriptionByIdPathParams,
  GetSubscriptionByIdQueryResponse,
} from "../../types/subscriptions/GetSubscriptionById";

/**
 * @summary Retrieve a single subscription
 * @link /subscriptions/:subscriptionId
 */
export async function getSubscriptionByIdService(
  subscriptionId: GetSubscriptionByIdPathParams["subscriptionId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetSubscriptionByIdQueryResponse>["data"]> {
  const res = await client<GetSubscriptionByIdQueryResponse>({
    method: "get",
    url: `/subscriptions/${subscriptionId}`,
    ...options,
  });

  return res.data;
}
