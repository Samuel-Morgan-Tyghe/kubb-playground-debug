import type {
  QueryKey,
  QueryObserverOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import {
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";

import client from "@configs/kubb/customClientQuery";

import type {
  GetCapitalCallsForAssetQueryParams,
  GetCapitalCallsForAssetQueryResponse,
} from "../../types/capitalCalls/GetCapitalCallsForAsset";

type GetCapitalCallsForAssetClient = typeof client<
  GetCapitalCallsForAssetQueryResponse,
  never,
  never
>;

type GetCapitalCallsForAsset = {
  client: {
    parameters: Partial<Parameters<GetCapitalCallsForAssetClient>[0]>;
    return: Awaited<ReturnType<GetCapitalCallsForAssetClient>>;
  };
  data: GetCapitalCallsForAssetQueryResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: GetCapitalCallsForAssetQueryParams;
  request: never;
  response: Awaited<ReturnType<GetCapitalCallsForAssetClient>>;
};

export const getCapitalCallsForAssetQueryKey = (
  params: GetCapitalCallsForAsset["queryParams"],
) => [{ url: "/capital-calls" }, ...(params ? [params] : [])] as const;
export type GetCapitalCallsForAssetQueryKey = ReturnType<
  typeof getCapitalCallsForAssetQueryKey
>;
export function getCapitalCallsForAssetQueryOptions(
  params: GetCapitalCallsForAsset["queryParams"],
  options: GetCapitalCallsForAsset["client"]["parameters"] = {},
) {
  const queryKey = getCapitalCallsForAssetQueryKey(params);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetCapitalCallsForAsset["data"],
        GetCapitalCallsForAsset["error"]
      >({
        method: "get",
        params,
        url: "/capital-calls",
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get all capital calls or distributions for an asset
 * @link /capital-calls
 */
export function useGetCapitalCallsForAsset<
  TData = GetCapitalCallsForAsset["response"],
  TQueryData = GetCapitalCallsForAsset["response"],
  TQueryKey extends QueryKey = GetCapitalCallsForAssetQueryKey,
>(
  params: GetCapitalCallsForAsset["queryParams"],
  options: {
    client?: GetCapitalCallsForAsset["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetCapitalCallsForAsset["response"],
        GetCapitalCallsForAsset["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetCapitalCallsForAsset["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getCapitalCallsForAssetQueryKey(params);
  const query = useQuery({
    ...(getCapitalCallsForAssetQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetCapitalCallsForAsset["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getCapitalCallsForAssetSuspenseQueryKey = (
  params: GetCapitalCallsForAsset["queryParams"],
) => [{ url: "/capital-calls" }, ...(params ? [params] : [])] as const;
export type GetCapitalCallsForAssetSuspenseQueryKey = ReturnType<
  typeof getCapitalCallsForAssetSuspenseQueryKey
>;
export function getCapitalCallsForAssetSuspenseQueryOptions(
  params: GetCapitalCallsForAsset["queryParams"],
  options: GetCapitalCallsForAsset["client"]["parameters"] = {},
) {
  const queryKey = getCapitalCallsForAssetSuspenseQueryKey(params);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetCapitalCallsForAsset["data"],
        GetCapitalCallsForAsset["error"]
      >({
        method: "get",
        params,
        url: "/capital-calls",
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get all capital calls or distributions for an asset
 * @link /capital-calls
 */
export function useGetCapitalCallsForAssetSuspense<
  TData = GetCapitalCallsForAsset["response"],
  TQueryKey extends QueryKey = GetCapitalCallsForAssetSuspenseQueryKey,
>(
  params: GetCapitalCallsForAsset["queryParams"],
  options: {
    client?: GetCapitalCallsForAsset["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetCapitalCallsForAsset["response"],
        GetCapitalCallsForAsset["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetCapitalCallsForAsset["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getCapitalCallsForAssetSuspenseQueryKey(params);
  const query = useSuspenseQuery({
    ...(getCapitalCallsForAssetSuspenseQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetCapitalCallsForAsset["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
