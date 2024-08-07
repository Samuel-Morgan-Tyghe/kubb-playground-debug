import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  CreateCounterpartyMutationRequest,
  CreateCounterpartyMutationResponse,
} from "../../types/counterparties/CreateCounterparty";

/**
 * @summary Creates a new counterparty to allow trading
 * @link /counterparties
 */
export async function createCounterpartyService(
  data: CreateCounterpartyMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateCounterpartyMutationResponse>["data"]> {
  const res = await client<
    CreateCounterpartyMutationResponse,
    CreateCounterpartyMutationRequest
  >({ data, method: "post", url: "/counterparties", ...options });

  return res.data;
}
