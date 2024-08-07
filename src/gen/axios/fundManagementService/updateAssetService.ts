import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  UpdateAssetMutationRequest,
  UpdateAssetMutationResponse,
  UpdateAssetPathParams,
} from "../../types/fundManagement/UpdateAsset";

/**
 * @summary Update the details of an asset
 * @link /assets/:assetId
 */
export async function updateAssetService(
  assetId: UpdateAssetPathParams["assetId"],
  data?: UpdateAssetMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateAssetMutationResponse>["data"]> {
  const res = await client<
    UpdateAssetMutationResponse,
    UpdateAssetMutationRequest
  >({ data, method: "patch", url: `/assets/${assetId}`, ...options });

  return res.data;
}
