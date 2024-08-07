import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  UpdateGeneralPartnerMutationRequest,
  UpdateGeneralPartnerMutationResponse,
  UpdateGeneralPartnerPathParams,
} from "../../types/kyc/UpdateGeneralPartner";

/**
 * @summary Update the details of a general-partner
 * @link /general-partners/:generalPartnerId
 */
export async function updateGeneralPartnerService(
  generalPartnerId: UpdateGeneralPartnerPathParams["generalPartnerId"],
  data?: UpdateGeneralPartnerMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateGeneralPartnerMutationResponse>["data"]> {
  const res = await client<
    UpdateGeneralPartnerMutationResponse,
    UpdateGeneralPartnerMutationRequest
  >({
    data,
    method: "patch",
    url: `/general-partners/${generalPartnerId}`,
    ...options,
  });

  return res.data;
}
