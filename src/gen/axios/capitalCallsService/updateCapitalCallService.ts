import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  UpdateCapitalCallMutationRequest,
  UpdateCapitalCallMutationResponse,
  UpdateCapitalCallPathParams,
} from "../../types/capitalCalls/UpdateCapitalCall";

/**
 * @summary Update a capital call or distributions for an asset
 * @link /capital-calls/:capitalCallId
 */
export async function updateCapitalCallService(
  capitalCallId: UpdateCapitalCallPathParams["capitalCallId"],
  data?: UpdateCapitalCallMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateCapitalCallMutationResponse>["data"]> {
  const res = await client<
    UpdateCapitalCallMutationResponse,
    UpdateCapitalCallMutationRequest
  >({
    data,
    method: "patch",
    url: `/capital-calls/${capitalCallId}`,
    ...options,
  });

  return res.data;
}
