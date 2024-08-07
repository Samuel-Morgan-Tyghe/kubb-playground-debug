import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetUsersForLimitedPartnerQueryParams,
  GetUsersForLimitedPartnerQueryResponse,
} from "../../types/kyc/GetUsersForLimitedPartner";

/**
 * @summary Get a list of all users belonging to an LP
 * @link /users
 */
export async function getUsersForLimitedPartnerService(
  params: GetUsersForLimitedPartnerQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetUsersForLimitedPartnerQueryResponse>["data"]> {
  const res = await client<GetUsersForLimitedPartnerQueryResponse>({
    method: "get",
    params,
    url: "/users",
    ...options,
  });

  return res.data;
}
