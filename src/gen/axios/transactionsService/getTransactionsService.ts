import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetTransactionsQueryParams,
  GetTransactionsQueryResponse,
} from "../../types/transactions/GetTransactions";

/**
 * @summary Fetches all transactions for a counterparty
 * @link /transactions
 */
export async function getTransactionsService(
  params: GetTransactionsQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetTransactionsQueryResponse>["data"]> {
  const res = await client<GetTransactionsQueryResponse>({
    method: "get",
    params,
    url: "/transactions",
    ...options,
  });

  return res.data;
}
