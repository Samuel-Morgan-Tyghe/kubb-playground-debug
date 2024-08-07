import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import client from "@configs/kubb/customClientQuery";

import type {
  CreateAssetMutationRequest,
  CreateAssetMutationResponse,
} from "../../types/fundManagement/CreateAsset";

type CreateAssetClient = typeof client<
  CreateAssetMutationResponse,
  never,
  CreateAssetMutationRequest
>;

type CreateAsset = {
  client: {
    parameters: Partial<Parameters<CreateAssetClient>[0]>;
    return: Awaited<ReturnType<CreateAssetClient>>;
  };
  data: CreateAssetMutationResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: never;
  request: CreateAssetMutationRequest;
  response: Awaited<ReturnType<CreateAssetClient>>;
};

/**
 * @summary Create a new asset
 * @link /assets
 */
export function useCreateAsset(
  options: {
    client?: CreateAsset["client"]["parameters"];
    mutation?: UseMutationOptions<
      CreateAsset["response"],
      CreateAsset["error"],
      {
        data: CreateAsset["request"];
      }
    >;
  } = {},
) {
  const { client: clientOptions = {}, mutation: mutationOptions } =
    options ?? {};

  return useMutation({
    mutationFn: async ({ data }) => {
      const res = await client<
        CreateAsset["data"],
        CreateAsset["error"],
        CreateAsset["request"]
      >({
        data,
        method: "post",
        url: "/assets",
        ...clientOptions,
      });

      return res;
    },
    ...mutationOptions,
  });
}
