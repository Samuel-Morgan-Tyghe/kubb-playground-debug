import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  UpdateCapitalCallInvoiceMutationRequest,
  UpdateCapitalCallInvoiceMutationResponse,
  UpdateCapitalCallInvoicePathParams,
} from "../../types/capitalCallInvoices/UpdateCapitalCallInvoice";

/**
 * @summary Update a capital call invoice or distribution invoice
 * @link /capital-call-invoices/:capitalCallInvoiceId
 */
export async function updateCapitalCallInvoiceService(
  capitalCallInvoiceId: UpdateCapitalCallInvoicePathParams["capitalCallInvoiceId"],
  data?: UpdateCapitalCallInvoiceMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateCapitalCallInvoiceMutationResponse>["data"]> {
  const res = await client<
    UpdateCapitalCallInvoiceMutationResponse,
    UpdateCapitalCallInvoiceMutationRequest
  >({
    data,
    method: "patch",
    url: `/capital-call-invoices/${capitalCallInvoiceId}`,
    ...options,
  });

  return res.data;
}
