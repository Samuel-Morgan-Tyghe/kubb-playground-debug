import type { ResponseConfig } from "@configs/kubb/customClientAxios";
import client from "@configs/kubb/customClientAxios";

import type {
  GetCapitalCallByIdPathParams,
  GetCapitalCallByIdQueryResponse,
} from "../../types/capitalCalls/GetCapitalCallById";

/**
 * @summary Retrieve a single capital call or distribution
 * @link /capital-calls/:capitalCallId
 */
export async function getCapitalCallByIdService(
  capitalCallId: GetCapitalCallByIdPathParams["capitalCallId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetCapitalCallByIdQueryResponse>["data"]> {
  const res = await client<GetCapitalCallByIdQueryResponse>({
    method: "get",
    url: `/capital-calls/${capitalCallId}`,
    ...options,
  });

  return res.data;
}
