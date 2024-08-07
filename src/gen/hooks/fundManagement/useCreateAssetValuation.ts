import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import client from "@configs/kubb/customClientQuery";

import type {
  CreateAssetValuationMutationRequest,
  CreateAssetValuationMutationResponse,
  CreateAssetValuationPathParams,
} from "../../types/fundManagement/CreateAssetValuation";

type CreateAssetValuationClient = typeof client<
  CreateAssetValuationMutationResponse,
  never,
  CreateAssetValuationMutationRequest
>;

type CreateAssetValuation = {
  client: {
    parameters: Partial<Parameters<CreateAssetValuationClient>[0]>;
    return: Awaited<ReturnType<CreateAssetValuationClient>>;
  };
  data: CreateAssetValuationMutationResponse;
  error: never;
  headerParams: never;
  pathParams: CreateAssetValuationPathParams;
  queryParams: never;
  request: CreateAssetValuationMutationRequest;
  response: Awaited<ReturnType<CreateAssetValuationClient>>;
};

/**
 * @summary Create a new valuation for an asset
 * @link /assets/:assetId/valuations
 */
export function useCreateAssetValuation(
  options: {
    client?: CreateAssetValuation["client"]["parameters"];
    mutation?: UseMutationOptions<
      CreateAssetValuation["response"],
      CreateAssetValuation["error"],
      {
        assetId: CreateAssetValuationPathParams["assetId"];
        data: CreateAssetValuation["request"];
      }
    >;
  } = {},
) {
  const { client: clientOptions = {}, mutation: mutationOptions } =
    options ?? {};

  return useMutation({
    mutationFn: async ({ assetId, data }) => {
      const res = await client<
        CreateAssetValuation["data"],
        CreateAssetValuation["error"],
        CreateAssetValuation["request"]
      >({
        data,
        method: "post",
        url: `/assets/${assetId}/valuations`,
        ...clientOptions,
      });

      return res;
    },
    ...mutationOptions,
  });
}
