import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetCounterpartyByIdPathParams,
  GetCounterpartyByIdQueryResponse,
} from "../../types/counterparties/GetCounterpartyById";

/**
 * @summary Fetches details of a counterparty
 * @link /counterparties/:counterpartyId
 */
export async function getCounterpartyByIdService(
  counterpartyId: GetCounterpartyByIdPathParams["counterpartyId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetCounterpartyByIdQueryResponse>["data"]> {
  const res = await client<GetCounterpartyByIdQueryResponse>({
    method: "get",
    url: `/counterparties/${counterpartyId}`,
    ...options,
  });

  return res.data;
}
