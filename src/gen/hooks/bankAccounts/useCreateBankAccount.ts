import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import client from "@configs/kubb/customClientQuery";

import type {
  CreateBankAccountMutationRequest,
  CreateBankAccountMutationResponse,
} from "../../types/bankAccounts/CreateBankAccount";

type CreateBankAccountClient = typeof client<
  CreateBankAccountMutationResponse,
  never,
  CreateBankAccountMutationRequest
>;

type CreateBankAccount = {
  client: {
    parameters: Partial<Parameters<CreateBankAccountClient>[0]>;
    return: Awaited<ReturnType<CreateBankAccountClient>>;
  };
  data: CreateBankAccountMutationResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: never;
  request: CreateBankAccountMutationRequest;
  response: Awaited<ReturnType<CreateBankAccountClient>>;
};

/**
 * @summary Create a new bank account
 * @link /bank-accounts
 */
export function useCreateBankAccount(
  options: {
    client?: CreateBankAccount["client"]["parameters"];
    mutation?: UseMutationOptions<
      CreateBankAccount["response"],
      CreateBankAccount["error"],
      {
        data: CreateBankAccount["request"];
      }
    >;
  } = {},
) {
  const { client: clientOptions = {}, mutation: mutationOptions } =
    options ?? {};

  return useMutation({
    mutationFn: async ({ data }) => {
      const res = await client<
        CreateBankAccount["data"],
        CreateBankAccount["error"],
        CreateBankAccount["request"]
      >({
        data,
        method: "post",
        url: "/bank-accounts",
        ...clientOptions,
      });

      return res;
    },
    ...mutationOptions,
  });
}
