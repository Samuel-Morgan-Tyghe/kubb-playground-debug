import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  UpdateAdminForAssetMutationRequest,
  UpdateAdminForAssetMutationResponse,
  UpdateAdminForAssetPathParams,
} from "../../types/fundManagement/UpdateAdminForAsset";

/**
 * @summary Update the details of an fund-admin
 * @link /assets/:assetId/fund-admins
 */
export async function updateAdminForAssetService(
  assetId: UpdateAdminForAssetPathParams["assetId"],
  data?: UpdateAdminForAssetMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateAdminForAssetMutationResponse>["data"]> {
  const res = await client<
    UpdateAdminForAssetMutationResponse,
    UpdateAdminForAssetMutationRequest
  >({
    data,
    method: "patch",
    url: `/assets/${assetId}/fund-admins`,
    ...options,
  });

  return res.data;
}
