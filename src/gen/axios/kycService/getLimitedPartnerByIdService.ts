import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetLimitedPartnerByIdPathParams,
  GetLimitedPartnerByIdQueryResponse,
} from "../../types/kyc/GetLimitedPartnerById";

/**
 * @summary Get a limitedPartner by its id
 * @link /limited-partners/:limitedPartnerId
 */
export async function getLimitedPartnerByIdService(
  limitedPartnerId: GetLimitedPartnerByIdPathParams["limitedPartnerId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetLimitedPartnerByIdQueryResponse>["data"]> {
  const res = await client<GetLimitedPartnerByIdQueryResponse>({
    method: "get",
    url: `/limited-partners/${limitedPartnerId}`,
    ...options,
  });

  return res.data;
}
