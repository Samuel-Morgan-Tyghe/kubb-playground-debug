import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  UpdateLimitedPartnerMutationRequest,
  UpdateLimitedPartnerMutationResponse,
  UpdateLimitedPartnerPathParams,
} from "../../types/kyc/UpdateLimitedPartner";

/**
 * @summary Update the details of an limitedPartner
 * @link /limited-partners/:limitedPartnerId
 */
export async function updateLimitedPartnerService(
  limitedPartnerId: UpdateLimitedPartnerPathParams["limitedPartnerId"],
  data?: UpdateLimitedPartnerMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateLimitedPartnerMutationResponse>["data"]> {
  const res = await client<
    UpdateLimitedPartnerMutationResponse,
    UpdateLimitedPartnerMutationRequest
  >({
    data,
    method: "patch",
    url: `/limited-partners/${limitedPartnerId}`,
    ...options,
  });

  return res.data;
}
