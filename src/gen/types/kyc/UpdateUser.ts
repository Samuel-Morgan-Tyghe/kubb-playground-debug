import type { ApiResponseUser } from "../ApiResponseUser";
import { type UpdateUserRequest } from "../UpdateUserRequest";

export type UpdateUserPathParams = {
  /**
   * @type string
   */
  userId: string;
};
/**
 * @description OK
 */
export type UpdateUser200 = ApiResponseUser;
export type UpdateUserMutationRequest = UpdateUserRequest;
/**
 * @description OK
 */
export type UpdateUserMutationResponse = ApiResponseUser;
export type UpdateUserMutation = {
  PathParams: UpdateUserPathParams;
  Request: UpdateUserMutationRequest;
  Response: UpdateUserMutationResponse;
};
