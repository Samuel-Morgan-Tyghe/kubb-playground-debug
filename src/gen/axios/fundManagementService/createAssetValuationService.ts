import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  CreateAssetValuationMutationRequest,
  CreateAssetValuationMutationResponse,
  CreateAssetValuationPathParams,
} from "../../types/fundManagement/CreateAssetValuation";

/**
 * @summary Create a new valuation for an asset
 * @link /assets/:assetId/valuations
 */
export async function createAssetValuationService(
  assetId: CreateAssetValuationPathParams["assetId"],
  data: CreateAssetValuationMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateAssetValuationMutationResponse>["data"]> {
  const res = await client<
    CreateAssetValuationMutationResponse,
    CreateAssetValuationMutationRequest
  >({ data, method: "post", url: `/assets/${assetId}/valuations`, ...options });

  return res.data;
}
