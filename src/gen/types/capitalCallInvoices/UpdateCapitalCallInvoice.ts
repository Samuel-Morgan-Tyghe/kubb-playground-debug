import type { ApiResponseCapitalCallInvoice } from "../ApiResponseCapitalCallInvoice";
import { type CapitalCallInvoiceUpdateRequest } from "../CapitalCallInvoiceUpdateRequest";

export type UpdateCapitalCallInvoicePathParams = {
  /**
   * @type string
   */
  capitalCallInvoiceId: string;
};
/**
 * @description OK
 */
export type UpdateCapitalCallInvoice200 = ApiResponseCapitalCallInvoice;
export type UpdateCapitalCallInvoiceMutationRequest =
  CapitalCallInvoiceUpdateRequest;
/**
 * @description OK
 */
export type UpdateCapitalCallInvoiceMutationResponse =
  ApiResponseCapitalCallInvoice;
export type UpdateCapitalCallInvoiceMutation = {
  PathParams: UpdateCapitalCallInvoicePathParams;
  Request: UpdateCapitalCallInvoiceMutationRequest;
  Response: UpdateCapitalCallInvoiceMutationResponse;
};
