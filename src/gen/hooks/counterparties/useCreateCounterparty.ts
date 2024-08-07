import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import client from "@configs/kubb/customClientQuery";

import type {
  CreateCounterpartyMutationRequest,
  CreateCounterpartyMutationResponse,
} from "../../types/counterparties/CreateCounterparty";

type CreateCounterpartyClient = typeof client<
  CreateCounterpartyMutationResponse,
  never,
  CreateCounterpartyMutationRequest
>;

type CreateCounterparty = {
  client: {
    parameters: Partial<Parameters<CreateCounterpartyClient>[0]>;
    return: Awaited<ReturnType<CreateCounterpartyClient>>;
  };
  data: CreateCounterpartyMutationResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: never;
  request: CreateCounterpartyMutationRequest;
  response: Awaited<ReturnType<CreateCounterpartyClient>>;
};

/**
 * @summary Creates a new counterparty to allow trading
 * @link /counterparties
 */
export function useCreateCounterparty(
  options: {
    client?: CreateCounterparty["client"]["parameters"];
    mutation?: UseMutationOptions<
      CreateCounterparty["response"],
      CreateCounterparty["error"],
      {
        data: CreateCounterparty["request"];
      }
    >;
  } = {},
) {
  const { client: clientOptions = {}, mutation: mutationOptions } =
    options ?? {};

  return useMutation({
    mutationFn: async ({ data }) => {
      const res = await client<
        CreateCounterparty["data"],
        CreateCounterparty["error"],
        CreateCounterparty["request"]
      >({
        data,
        method: "post",
        url: "/counterparties",
        ...clientOptions,
      });

      return res;
    },
    ...mutationOptions,
  });
}
