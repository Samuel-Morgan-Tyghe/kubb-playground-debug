import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  UpdateTransactionMutationRequest,
  UpdateTransactionMutationResponse,
  UpdateTransactionPathParams,
} from "../../types/transactions/UpdateTransaction";

/**
 * @summary Updates a transaction's details
 * @link /transactions/:transactionId
 */
export async function updateTransactionService(
  transactionId: UpdateTransactionPathParams["transactionId"],
  data?: UpdateTransactionMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateTransactionMutationResponse>["data"]> {
  const res = await client<
    UpdateTransactionMutationResponse,
    UpdateTransactionMutationRequest
  >({
    data,
    method: "patch",
    url: `/transactions/${transactionId}`,
    ...options,
  });

  return res.data;
}
