import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetTransactionByIdPathParams,
  GetTransactionByIdQueryResponse,
} from "../../types/transactions/GetTransactionById";

/**
 * @summary Fetches a transaction
 * @link /transactions/:transactionId
 */
export async function getTransactionByIdService(
  transactionId: GetTransactionByIdPathParams["transactionId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetTransactionByIdQueryResponse>["data"]> {
  const res = await client<GetTransactionByIdQueryResponse>({
    method: "get",
    url: `/transactions/${transactionId}`,
    ...options,
  });

  return res.data;
}
