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
  GetAssetValuationsPathParams,
  GetAssetValuationsQueryResponse,
} from "../../types/fundManagement/GetAssetValuations";

type GetAssetValuationsClient = typeof client<
  GetAssetValuationsQueryResponse,
  never,
  never
>;

type GetAssetValuations = {
  client: {
    parameters: Partial<Parameters<GetAssetValuationsClient>[0]>;
    return: Awaited<ReturnType<GetAssetValuationsClient>>;
  };
  data: GetAssetValuationsQueryResponse;
  error: never;
  headerParams: never;
  pathParams: GetAssetValuationsPathParams;
  queryParams: never;
  request: never;
  response: Awaited<ReturnType<GetAssetValuationsClient>>;
};

export const getAssetValuationsQueryKey = (
  assetId: GetAssetValuationsPathParams["assetId"],
) =>
  [
    { params: { assetId: assetId }, url: "/assets/:assetId/valuations" },
  ] as const;
export type GetAssetValuationsQueryKey = ReturnType<
  typeof getAssetValuationsQueryKey
>;
export function getAssetValuationsQueryOptions(
  assetId: GetAssetValuationsPathParams["assetId"],
  options: GetAssetValuations["client"]["parameters"] = {},
) {
  const queryKey = getAssetValuationsQueryKey(assetId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetAssetValuations["data"],
        GetAssetValuations["error"]
      >({
        method: "get",
        url: `/assets/${assetId}/valuations`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Retrieves a single asset's valuations sorted by date
 * @link /assets/:assetId/valuations
 */
export function useGetAssetValuations<
  TData = GetAssetValuations["response"],
  TQueryData = GetAssetValuations["response"],
  TQueryKey extends QueryKey = GetAssetValuationsQueryKey,
>(
  assetId: GetAssetValuationsPathParams["assetId"],
  options: {
    client?: GetAssetValuations["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetAssetValuations["response"],
        GetAssetValuations["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetAssetValuations["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getAssetValuationsQueryKey(assetId);
  const query = useQuery({
    ...(getAssetValuationsQueryOptions(
      assetId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetAssetValuations["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getAssetValuationsSuspenseQueryKey = (
  assetId: GetAssetValuationsPathParams["assetId"],
) =>
  [
    { params: { assetId: assetId }, url: "/assets/:assetId/valuations" },
  ] as const;
export type GetAssetValuationsSuspenseQueryKey = ReturnType<
  typeof getAssetValuationsSuspenseQueryKey
>;
export function getAssetValuationsSuspenseQueryOptions(
  assetId: GetAssetValuationsPathParams["assetId"],
  options: GetAssetValuations["client"]["parameters"] = {},
) {
  const queryKey = getAssetValuationsSuspenseQueryKey(assetId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetAssetValuations["data"],
        GetAssetValuations["error"]
      >({
        method: "get",
        url: `/assets/${assetId}/valuations`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Retrieves a single asset's valuations sorted by date
 * @link /assets/:assetId/valuations
 */
export function useGetAssetValuationsSuspense<
  TData = GetAssetValuations["response"],
  TQueryKey extends QueryKey = GetAssetValuationsSuspenseQueryKey,
>(
  assetId: GetAssetValuationsPathParams["assetId"],
  options: {
    client?: GetAssetValuations["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetAssetValuations["response"],
        GetAssetValuations["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetAssetValuations["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getAssetValuationsSuspenseQueryKey(assetId);
  const query = useSuspenseQuery({
    ...(getAssetValuationsSuspenseQueryOptions(
      assetId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetAssetValuations["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
