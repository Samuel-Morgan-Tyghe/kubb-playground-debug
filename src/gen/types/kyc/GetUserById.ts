import type { ApiResponseUser } from "../ApiResponseUser";

export type GetUserByIdPathParams = {
  /**
   * @type string
   */
  userId: string;
};
/**
 * @description OK
 */
export type GetUserById200 = ApiResponseUser;
/**
 * @description OK
 */
export type GetUserByIdQueryResponse = ApiResponseUser;
export type GetUserByIdQuery = {
  PathParams: GetUserByIdPathParams;
  Response: GetUserByIdQueryResponse;
};
