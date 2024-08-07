import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetUserByIdPathParams,
  GetUserByIdQueryResponse,
} from "../../types/kyc/GetUserById";

/**
 * @summary Get a specific user
 * @link /users/:userId
 */
export async function getUserByIdService(
  userId: GetUserByIdPathParams["userId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetUserByIdQueryResponse>["data"]> {
  const res = await client<GetUserByIdQueryResponse>({
    method: "get",
    url: `/users/${userId}`,
    ...options,
  });

  return res.data;
}
