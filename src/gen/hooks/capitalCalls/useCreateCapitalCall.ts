import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import client from "@configs/kubb/customClientQuery";

import type {
  CreateCapitalCallMutationRequest,
  CreateCapitalCallMutationResponse,
} from "../../types/capitalCalls/CreateCapitalCall";

type CreateCapitalCallClient = typeof client<
  CreateCapitalCallMutationResponse,
  never,
  CreateCapitalCallMutationRequest
>;

type CreateCapitalCall = {
  client: {
    parameters: Partial<Parameters<CreateCapitalCallClient>[0]>;
    return: Awaited<ReturnType<CreateCapitalCallClient>>;
  };
  data: CreateCapitalCallMutationResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: never;
  request: CreateCapitalCallMutationRequest;
  response: Awaited<ReturnType<CreateCapitalCallClient>>;
};

/**
 * @summary Create a capital call or distributions for an asset
 * @link /capital-calls
 */
export function useCreateCapitalCall(
  options: {
    client?: CreateCapitalCall["client"]["parameters"];
    mutation?: UseMutationOptions<
      CreateCapitalCall["response"],
      CreateCapitalCall["error"],
      {
        data: CreateCapitalCall["request"];
      }
    >;
  } = {},
) {
  const { client: clientOptions = {}, mutation: mutationOptions } =
    options ?? {};

  return useMutation({
    mutationFn: async ({ data }) => {
      const res = await client<
        CreateCapitalCall["data"],
        CreateCapitalCall["error"],
        CreateCapitalCall["request"]
      >({
        data,
        method: "post",
        url: "/capital-calls",
        ...clientOptions,
      });

      return res;
    },
    ...mutationOptions,
  });
}
