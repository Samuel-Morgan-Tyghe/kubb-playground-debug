import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  CreateCapitalCallMutationRequest,
  CreateCapitalCallMutationResponse,
} from "../../types/capitalCalls/CreateCapitalCall";

/**
 * @summary Create a capital call or distributions for an asset
 * @link /capital-calls
 */
export async function createCapitalCallService(
  data: CreateCapitalCallMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateCapitalCallMutationResponse>["data"]> {
  const res = await client<
    CreateCapitalCallMutationResponse,
    CreateCapitalCallMutationRequest
  >({ data, method: "post", url: "/capital-calls", ...options });

  return res.data;
}
