import type { ApiResponseCapitalCallInvoice } from "../ApiResponseCapitalCallInvoice";

export type GetCapitalCallInvoicesQueryParams = {
  /**
   * @type string | undefined
   */
  assetId?: string;
  /**
   * @type string | undefined
   */
  capitalCallId?: string;
  /**
   * @type string | undefined
   */
  counterpartyId?: string;
};
/**
 * @description OK
 */
export type GetCapitalCallInvoices200 = ApiResponseCapitalCallInvoice[];
/**
 * @description OK
 */
export type GetCapitalCallInvoicesQueryResponse =
  ApiResponseCapitalCallInvoice[];
export type GetCapitalCallInvoicesQuery = {
  QueryParams: GetCapitalCallInvoicesQueryParams;
  Response: GetCapitalCallInvoicesQueryResponse;
};
