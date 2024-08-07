import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import client from "@configs/kubb/customClientQuery";

import type {
  CreateAdminForAssetMutationRequest,
  CreateAdminForAssetMutationResponse,
  CreateAdminForAssetPathParams,
} from "../../types/fundManagement/CreateAdminForAsset";

type CreateAdminForAssetClient = typeof client<
  CreateAdminForAssetMutationResponse,
  never,
  CreateAdminForAssetMutationRequest
>;

type CreateAdminForAsset = {
  client: {
    parameters: Partial<Parameters<CreateAdminForAssetClient>[0]>;
    return: Awaited<ReturnType<CreateAdminForAssetClient>>;
  };
  data: CreateAdminForAssetMutationResponse;
  error: never;
  headerParams: never;
  pathParams: CreateAdminForAssetPathParams;
  queryParams: never;
  request: CreateAdminForAssetMutationRequest;
  response: Awaited<ReturnType<CreateAdminForAssetClient>>;
};

/**
 * @summary Create a new fund-admin for an asset
 * @link /assets/:assetId/fund-admins
 */
export function useCreateAdminForAsset(
  options: {
    client?: CreateAdminForAsset["client"]["parameters"];
    mutation?: UseMutationOptions<
      CreateAdminForAsset["response"],
      CreateAdminForAsset["error"],
      {
        assetId: CreateAdminForAssetPathParams["assetId"];
        data: CreateAdminForAsset["request"];
      }
    >;
  } = {},
) {
  const { client: clientOptions = {}, mutation: mutationOptions } =
    options ?? {};

  return useMutation({
    mutationFn: async ({ assetId, data }) => {
      const res = await client<
        CreateAdminForAsset["data"],
        CreateAdminForAsset["error"],
        CreateAdminForAsset["request"]
      >({
        data,
        method: "post",
        url: `/assets/${assetId}/fund-admins`,
        ...clientOptions,
      });

      return res;
    },
    ...mutationOptions,
  });
}
