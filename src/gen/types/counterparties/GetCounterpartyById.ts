import type { ApiResponseCounterparty } from "../ApiResponseCounterparty";

export type GetCounterpartyByIdPathParams = {
  /**
   * @type string, uuid
   */
  counterpartyId: string;
};
/**
 * @description OK
 */
export type GetCounterpartyById200 = ApiResponseCounterparty;
/**
 * @description OK
 */
export type GetCounterpartyByIdQueryResponse = ApiResponseCounterparty;
export type GetCounterpartyByIdQuery = {
  PathParams: GetCounterpartyByIdPathParams;
  Response: GetCounterpartyByIdQueryResponse;
};
