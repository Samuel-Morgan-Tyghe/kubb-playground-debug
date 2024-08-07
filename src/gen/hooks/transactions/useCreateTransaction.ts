import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import client from "@configs/kubb/customClientQuery";

import type {
  CreateTransactionMutationRequest,
  CreateTransactionMutationResponse,
} from "../../types/transactions/CreateTransaction";

type CreateTransactionClient = typeof client<
  CreateTransactionMutationResponse,
  never,
  CreateTransactionMutationRequest
>;

type CreateTransaction = {
  client: {
    parameters: Partial<Parameters<CreateTransactionClient>[0]>;
    return: Awaited<ReturnType<CreateTransactionClient>>;
  };
  data: CreateTransactionMutationResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: never;
  request: CreateTransactionMutationRequest;
  response: Awaited<ReturnType<CreateTransactionClient>>;
};

/**
 * @summary Creates a new transaction
 * @link /transactions
 */
export function useCreateTransaction(
  options: {
    client?: CreateTransaction["client"]["parameters"];
    mutation?: UseMutationOptions<
      CreateTransaction["response"],
      CreateTransaction["error"],
      {
        data: CreateTransaction["request"];
      }
    >;
  } = {},
) {
  const { client: clientOptions = {}, mutation: mutationOptions } =
    options ?? {};

  return useMutation({
    mutationFn: async ({ data }) => {
      const res = await client<
        CreateTransaction["data"],
        CreateTransaction["error"],
        CreateTransaction["request"]
      >({
        data,
        method: "post",
        url: "/transactions",
        ...clientOptions,
      });

      return res;
    },
    ...mutationOptions,
  });
}
