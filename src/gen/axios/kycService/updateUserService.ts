import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  UpdateUserMutationRequest,
  UpdateUserMutationResponse,
  UpdateUserPathParams,
} from "../../types/kyc/UpdateUser";

/**
 * @summary Update the details of a user
 * @link /users/:userId
 */
export async function updateUserService(
  userId: UpdateUserPathParams["userId"],
  data?: UpdateUserMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateUserMutationResponse>["data"]> {
  const res = await client<
    UpdateUserMutationResponse,
    UpdateUserMutationRequest
  >({ data, method: "patch", url: `/users/${userId}`, ...options });

  return res.data;
}
