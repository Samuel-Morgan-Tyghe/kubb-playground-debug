import type { ApiResponseUser } from "../ApiResponseUser";
import { type CreateUserRequest } from "../CreateUserRequest";

/**
 * @description OK
 */
export type CreateUser200 = ApiResponseUser;
export type CreateUserMutationRequest = CreateUserRequest;
/**
 * @description OK
 */
export type CreateUserMutationResponse = ApiResponseUser;
export type CreateUserMutation = {
  Request: CreateUserMutationRequest;
  Response: CreateUserMutationResponse;
};
