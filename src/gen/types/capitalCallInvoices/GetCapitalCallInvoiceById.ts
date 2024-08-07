import type { ApiResponseCapitalCallInvoice } from "../ApiResponseCapitalCallInvoice";

export type GetCapitalCallInvoiceByIdPathParams = {
  /**
   * @type string
   */
  capitalCallInvoiceId: string;
};
/**
 * @description OK
 */
export type GetCapitalCallInvoiceById200 = ApiResponseCapitalCallInvoice;
/**
 * @description OK
 */
export type GetCapitalCallInvoiceByIdQueryResponse =
  ApiResponseCapitalCallInvoice;
export type GetCapitalCallInvoiceByIdQuery = {
  PathParams: GetCapitalCallInvoiceByIdPathParams;
  Response: GetCapitalCallInvoiceByIdQueryResponse;
};
