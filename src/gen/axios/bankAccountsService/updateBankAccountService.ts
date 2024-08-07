import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  UpdateBankAccountMutationRequest,
  UpdateBankAccountMutationResponse,
  UpdateBankAccountPathParams,
} from "../../types/bankAccounts/UpdateBankAccount";

/**
 * @summary Updates the information of a bank account
 * @link /bank-accounts/:bankAccountId
 */
export async function updateBankAccountService(
  bankAccountId: UpdateBankAccountPathParams["bankAccountId"],
  data?: UpdateBankAccountMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateBankAccountMutationResponse>["data"]> {
  const res = await client<
    UpdateBankAccountMutationResponse,
    UpdateBankAccountMutationRequest
  >({
    data,
    method: "patch",
    url: `/bank-accounts/${bankAccountId}`,
    ...options,
  });

  return res.data;
}
