import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  CreateTransactionMutationRequest,
  CreateTransactionMutationResponse,
} from "../../types/transactions/CreateTransaction";

/**
 * @summary Creates a new transaction
 * @link /transactions
 */
export async function createTransactionService(
  data: CreateTransactionMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateTransactionMutationResponse>["data"]> {
  const res = await client<
    CreateTransactionMutationResponse,
    CreateTransactionMutationRequest
  >({ data, method: "post", url: "/transactions", ...options });

  return res.data;
}
