import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetLimitedPartnersQueryParams,
  GetLimitedPartnersQueryResponse,
} from "../../types/kyc/GetLimitedPartners";

/**
 * @summary Get all the limited-partners of a general-partner by id
 * @link /limited-partners
 */
export async function getLimitedPartnersService(
  params: GetLimitedPartnersQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetLimitedPartnersQueryResponse>["data"]> {
  const res = await client<GetLimitedPartnersQueryResponse>({
    method: "get",
    params,
    url: "/limited-partners",
    ...options,
  });

  return res.data;
}
