import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetCapitalCallsForAssetQueryParams,
  GetCapitalCallsForAssetQueryResponse,
} from "../../types/capitalCalls/GetCapitalCallsForAsset";

/**
 * @summary Get all capital calls or distributions for an asset
 * @link /capital-calls
 */
export async function getCapitalCallsForAssetService(
  params: GetCapitalCallsForAssetQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetCapitalCallsForAssetQueryResponse>["data"]> {
  const res = await client<GetCapitalCallsForAssetQueryResponse>({
    method: "get",
    params,
    url: "/capital-calls",
    ...options,
  });

  return res.data;
}
