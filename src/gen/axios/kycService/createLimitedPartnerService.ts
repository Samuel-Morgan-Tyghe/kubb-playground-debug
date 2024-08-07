import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  CreateLimitedPartnerMutationRequest,
  CreateLimitedPartnerMutationResponse,
} from "../../types/kyc/CreateLimitedPartner";

/**
 * @summary Create a limited partner
 * @link /limited-partners
 */
export async function createLimitedPartnerService(
  data: CreateLimitedPartnerMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateLimitedPartnerMutationResponse>["data"]> {
  const res = await client<
    CreateLimitedPartnerMutationResponse,
    CreateLimitedPartnerMutationRequest
  >({ data, method: "post", url: "/limited-partners", ...options });

  return res.data;
}
