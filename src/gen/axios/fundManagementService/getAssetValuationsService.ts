import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetAssetValuationsPathParams,
  GetAssetValuationsQueryResponse,
} from "../../types/fundManagement/GetAssetValuations";

/**
 * @summary Retrieves a single asset's valuations sorted by date
 * @link /assets/:assetId/valuations
 */
export async function getAssetValuationsService(
  assetId: GetAssetValuationsPathParams["assetId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetAssetValuationsQueryResponse>["data"]> {
  const res = await client<GetAssetValuationsQueryResponse>({
    method: "get",
    url: `/assets/${assetId}/valuations`,
    ...options,
  });

  return res.data;
}
