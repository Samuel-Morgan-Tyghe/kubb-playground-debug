import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  CreateBankAccountMutationRequest,
  CreateBankAccountMutationResponse,
} from "../../types/bankAccounts/CreateBankAccount";

/**
 * @summary Create a new bank account
 * @link /bank-accounts
 */
export async function createBankAccountService(
  data: CreateBankAccountMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateBankAccountMutationResponse>["data"]> {
  const res = await client<
    CreateBankAccountMutationResponse,
    CreateBankAccountMutationRequest
  >({ data, method: "post", url: "/bank-accounts", ...options });

  return res.data;
}
