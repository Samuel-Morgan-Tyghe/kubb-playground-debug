import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetBankAccountByIdPathParams,
  GetBankAccountByIdQueryResponse,
} from "../../types/bankAccounts/GetBankAccountById";

/**
 * @summary Get the details of a bank account
 * @link /bank-accounts/:bankAccountId
 */
export async function getBankAccountByIdService(
  bankAccountId: GetBankAccountByIdPathParams["bankAccountId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetBankAccountByIdQueryResponse>["data"]> {
  const res = await client<GetBankAccountByIdQueryResponse>({
    method: "get",
    url: `/bank-accounts/${bankAccountId}`,
    ...options,
  });

  return res.data;
}
