import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetFundAdminByAssetIdPathParams,
  GetFundAdminByAssetIdQueryResponse,
} from "../../types/fundManagement/GetFundAdminByAssetId";

/**
 * @summary Get a single asset's admin
 * @link /assets/:assetId/fund-admins
 */
export async function getFundAdminByAssetIdService(
  assetId: GetFundAdminByAssetIdPathParams["assetId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetFundAdminByAssetIdQueryResponse>["data"]> {
  const res = await client<GetFundAdminByAssetIdQueryResponse>({
    method: "get",
    url: `/assets/${assetId}/fund-admins`,
    ...options,
  });

  return res.data;
}
