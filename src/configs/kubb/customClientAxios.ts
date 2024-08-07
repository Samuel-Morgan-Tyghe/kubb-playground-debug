/* eslint-disable import/no-default-export */
import { type AxiosError } from "axios";

import type {
  RequestConfig,
  ResponseConfig as SwaggerResponseConfig,
} from "@kubb/swagger-client/client";

import { swaggerAxiosInstance } from "./customInstance";

export const swaggerAxiosClient = async <
  TData,
  TError = unknown,
  TVariables = unknown,
>(
  config: RequestConfig<TVariables>,
): Promise<ResponseConfig<TData>> => {
  const promise = swaggerAxiosInstance
    .request<TData, ResponseConfig<TData>>(config)
    .catch((e: AxiosError<TError>) => {
      throw e;
    });

  return promise;
};
export type ResponseConfig<t> = SwaggerResponseConfig<t>;

export default swaggerAxiosClient;
