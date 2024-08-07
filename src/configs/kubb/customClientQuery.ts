/* eslint-disable import/no-default-export */
import type { AxiosError, AxiosRequestConfig } from "axios";

import { type ResponseConfig as SwaggerResponseConfig } from "@kubb/swagger-client/client";

import { swaggerAxiosInstance } from "./customInstance";

export type RequestConfig<TVariables = unknown> = {
  data?: TVariables;
  headers?: AxiosRequestConfig["headers"];
  method: "delete" | "get" | "patch" | "post" | "put";
  params?: unknown;
  responseType?:
    | "arraybuffer"
    | "blob"
    | "document"
    | "json"
    | "stream"
    | "text";
  signal?: AbortSignal;
  url: string;
};

export const swaggerAxiosClient = async <
  TData,
  TError = unknown,
  TVariables = unknown,
>(
  config: RequestConfig<TVariables>,
): Promise<TData> => {
  const promise = swaggerAxiosInstance
    .request<TData>({ ...config })
    .then(({ data }) => data)
    .catch((e: AxiosError<TError>) => {
      throw e;
    });

  return promise;
};
export type ResponseConfig<t> = SwaggerResponseConfig<t>;

export default swaggerAxiosClient;
