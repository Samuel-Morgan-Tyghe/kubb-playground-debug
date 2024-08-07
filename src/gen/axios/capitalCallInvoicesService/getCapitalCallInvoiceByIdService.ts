import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetCapitalCallInvoiceByIdPathParams,
  GetCapitalCallInvoiceByIdQueryResponse,
} from "../../types/capitalCallInvoices/GetCapitalCallInvoiceById";

/**
 * @summary Retrieve a single capital call or distribution invoice
 * @link /capital-call-invoices/:capitalCallInvoiceId
 */
export async function getCapitalCallInvoiceByIdService(
  capitalCallInvoiceId: GetCapitalCallInvoiceByIdPathParams["capitalCallInvoiceId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetCapitalCallInvoiceByIdQueryResponse>["data"]> {
  const res = await client<GetCapitalCallInvoiceByIdQueryResponse>({
    method: "get",
    url: `/capital-call-invoices/${capitalCallInvoiceId}`,
    ...options,
  });

  return res.data;
}
