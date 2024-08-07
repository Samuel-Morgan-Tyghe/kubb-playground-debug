import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import client from "@configs/kubb/customClientQuery";

import type {
  CreateUserMutationRequest,
  CreateUserMutationResponse,
} from "../../types/kyc/CreateUser";

type CreateUserClient = typeof client<
  CreateUserMutationResponse,
  never,
  CreateUserMutationRequest
>;

type CreateUser = {
  client: {
    parameters: Partial<Parameters<CreateUserClient>[0]>;
    return: Awaited<ReturnType<CreateUserClient>>;
  };
  data: CreateUserMutationResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: never;
  request: CreateUserMutationRequest;
  response: Awaited<ReturnType<CreateUserClient>>;
};

/**
 * @summary Create a user
 * @link /users
 */
export function useCreateUser(
  options: {
    client?: CreateUser["client"]["parameters"];
    mutation?: UseMutationOptions<
      CreateUser["response"],
      CreateUser["error"],
      {
        data: CreateUser["request"];
      }
    >;
  } = {},
) {
  const { client: clientOptions = {}, mutation: mutationOptions } =
    options ?? {};

  return useMutation({
    mutationFn: async ({ data }) => {
      const res = await client<
        CreateUser["data"],
        CreateUser["error"],
        CreateUser["request"]
      >({
        data,
        method: "post",
        url: "/users",
        ...clientOptions,
      });

      return res;
    },
    ...mutationOptions,
  });
}
