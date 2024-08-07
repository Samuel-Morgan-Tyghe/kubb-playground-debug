import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  CreateUserMutationRequest,
  CreateUserMutationResponse,
} from "../../types/kyc/CreateUser";

/**
 * @summary Create a user
 * @link /users
 */
export async function createUserService(
  data: CreateUserMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateUserMutationResponse>["data"]> {
  const res = await client<
    CreateUserMutationResponse,
    CreateUserMutationRequest
  >({ data, method: "post", url: "/users", ...options });

  return res.data;
}
