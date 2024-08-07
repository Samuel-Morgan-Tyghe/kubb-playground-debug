import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  UpdateCounterpartyMutationRequest,
  UpdateCounterpartyMutationResponse,
  UpdateCounterpartyPathParams,
} from "../../types/counterparties/UpdateCounterparty";

/**
 * @summary Updates the information of a counterparty
 * @link /counterparties/:counterpartyId
 */
export async function updateCounterpartyService(
  counterpartyId: UpdateCounterpartyPathParams["counterpartyId"],
  data?: UpdateCounterpartyMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateCounterpartyMutationResponse>["data"]> {
  const res = await client<
    UpdateCounterpartyMutationResponse,
    UpdateCounterpartyMutationRequest
  >({
    data,
    method: "patch",
    url: `/counterparties/${counterpartyId}`,
    ...options,
  });

  return res.data;
}
