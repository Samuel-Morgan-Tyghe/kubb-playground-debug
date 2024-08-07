import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  CreateSubscriptionMutationRequest,
  CreateSubscriptionMutationResponse,
} from "../../types/subscriptions/CreateSubscription";

/**
 * @summary Create a new subscription
 * @link /subscriptions
 */
export async function createSubscriptionService(
  data: CreateSubscriptionMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateSubscriptionMutationResponse>["data"]> {
  const res = await client<
    CreateSubscriptionMutationResponse,
    CreateSubscriptionMutationRequest
  >({ data, method: "post", url: "/subscriptions", ...options });

  return res.data;
}
