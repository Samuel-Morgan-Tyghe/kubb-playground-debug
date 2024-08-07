import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  CreateGeneralPartnerMutationRequest,
  CreateGeneralPartnerMutationResponse,
} from "../../types/kyc/CreateGeneralPartner";

/**
 * @summary Create new general-partner
 * @link /general-partners
 */
export async function createGeneralPartnerService(
  data: CreateGeneralPartnerMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateGeneralPartnerMutationResponse>["data"]> {
  const res = await client<
    CreateGeneralPartnerMutationResponse,
    CreateGeneralPartnerMutationRequest
  >({ data, method: "post", url: "/general-partners", ...options });

  return res.data;
}
