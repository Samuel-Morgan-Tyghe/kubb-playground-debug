import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetAssetByIdPathParams,
  GetAssetByIdQueryResponse,
} from "../../types/fundManagement/GetAssetById";

/**
 * @summary Get a new asset by id
 * @link /assets/:assetId
 */
export async function getAssetByIdService(
  assetId: GetAssetByIdPathParams["assetId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetAssetByIdQueryResponse>["data"]> {
  const res = await client<GetAssetByIdQueryResponse>({
    method: "get",
    url: `/assets/${assetId}`,
    ...options,
  });

  return res.data;
}
