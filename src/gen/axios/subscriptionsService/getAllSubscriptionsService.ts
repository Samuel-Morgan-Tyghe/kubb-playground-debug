import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetAllSubscriptionsQueryParams,
  GetAllSubscriptionsQueryResponse,
} from "../../types/subscriptions/GetAllSubscriptions";

/**
 * @summary Get all subscriptions for assetId or counterpartyId
 * @link /subscriptions
 */
export async function getAllSubscriptionsService(
  params?: GetAllSubscriptionsQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetAllSubscriptionsQueryResponse>["data"]> {
  const res = await client<GetAllSubscriptionsQueryResponse>({
    method: "get",
    params,
    url: "/subscriptions",
    ...options,
  });

  return res.data;
}
