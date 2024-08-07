import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  CreateAdminForAssetMutationRequest,
  CreateAdminForAssetMutationResponse,
  CreateAdminForAssetPathParams,
} from "../../types/fundManagement/CreateAdminForAsset";

/**
 * @summary Create a new fund-admin for an asset
 * @link /assets/:assetId/fund-admins
 */
export async function createAdminForAssetService(
  assetId: CreateAdminForAssetPathParams["assetId"],
  data: CreateAdminForAssetMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateAdminForAssetMutationResponse>["data"]> {
  const res = await client<
    CreateAdminForAssetMutationResponse,
    CreateAdminForAssetMutationRequest
  >({
    data,
    method: "post",
    url: `/assets/${assetId}/fund-admins`,
    ...options,
  });

  return res.data;
}
