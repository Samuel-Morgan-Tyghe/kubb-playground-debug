import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetCapitalCallInvoicesQueryParams,
  GetCapitalCallInvoicesQueryResponse,
} from "../../types/capitalCallInvoices/GetCapitalCallInvoices";

/**
 * @summary Get all capital-call-invoices or distribution-invoices
 * @link /capital-call-invoices
 */
export async function getCapitalCallInvoicesService(
  params?: GetCapitalCallInvoicesQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetCapitalCallInvoicesQueryResponse>["data"]> {
  const res = await client<GetCapitalCallInvoicesQueryResponse>({
    method: "get",
    params,
    url: "/capital-call-invoices",
    ...options,
  });

  return res.data;
}
