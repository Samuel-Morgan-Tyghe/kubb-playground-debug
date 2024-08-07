import type { ApiResponseCapitalCall } from "../ApiResponseCapitalCall";

export type GetCapitalCallByIdPathParams = {
  /**
   * @type string
   */
  capitalCallId: string;
};
/**
 * @description OK
 */
export type GetCapitalCallById200 = ApiResponseCapitalCall;
/**
 * @description OK
 */
export type GetCapitalCallByIdQueryResponse = ApiResponseCapitalCall;
export type GetCapitalCallByIdQuery = {
  PathParams: GetCapitalCallByIdPathParams;
  Response: GetCapitalCallByIdQueryResponse;
};
