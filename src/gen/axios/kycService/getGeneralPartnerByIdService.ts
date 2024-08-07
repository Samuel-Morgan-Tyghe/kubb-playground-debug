import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetGeneralPartnerByIdPathParams,
  GetGeneralPartnerByIdQueryResponse,
} from "../../types/kyc/GetGeneralPartnerById";

/**
 * @summary Get a general-partner by its id
 * @link /general-partners/:generalPartnerId
 */
export async function getGeneralPartnerByIdService(
  generalPartnerId: GetGeneralPartnerByIdPathParams["generalPartnerId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetGeneralPartnerByIdQueryResponse>["data"]> {
  const res = await client<GetGeneralPartnerByIdQueryResponse>({
    method: "get",
    url: `/general-partners/${generalPartnerId}`,
    ...options,
  });

  return res.data;
}
