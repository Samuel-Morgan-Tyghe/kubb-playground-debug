import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  CreateAssetMutationRequest,
  CreateAssetMutationResponse,
} from "../../types/fundManagement/CreateAsset";

/**
 * @summary Create a new asset
 * @link /assets
 */
export async function createAssetService(
  data: CreateAssetMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateAssetMutationResponse>["data"]> {
  const res = await client<
    CreateAssetMutationResponse,
    CreateAssetMutationRequest
  >({ data, method: "post", url: "/assets", ...options });

  return res.data;
}
