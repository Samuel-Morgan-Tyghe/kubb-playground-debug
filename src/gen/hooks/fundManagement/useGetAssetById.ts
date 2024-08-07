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
  GetAssetByIdPathParams,
  GetAssetByIdQueryResponse,
} from "../../types/fundManagement/GetAssetById";

type GetAssetByIdClient = typeof client<
  GetAssetByIdQueryResponse,
  never,
  never
>;

type GetAssetById = {
  client: {
    parameters: Partial<Parameters<GetAssetByIdClient>[0]>;
    return: Awaited<ReturnType<GetAssetByIdClient>>;
  };
  data: GetAssetByIdQueryResponse;
  error: never;
  headerParams: never;
  pathParams: GetAssetByIdPathParams;
  queryParams: never;
  request: never;
  response: Awaited<ReturnType<GetAssetByIdClient>>;
};

export const getAssetByIdQueryKey = (
  assetId: GetAssetByIdPathParams["assetId"],
) => [{ params: { assetId: assetId }, url: "/assets/:assetId" }] as const;
export type GetAssetByIdQueryKey = ReturnType<typeof getAssetByIdQueryKey>;
export function getAssetByIdQueryOptions(
  assetId: GetAssetByIdPathParams["assetId"],
  options: GetAssetById["client"]["parameters"] = {},
) {
  const queryKey = getAssetByIdQueryKey(assetId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<GetAssetById["data"], GetAssetById["error"]>({
        method: "get",
        url: `/assets/${assetId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get a new asset by id
 * @link /assets/:assetId
 */
export function useGetAssetById<
  TData = GetAssetById["response"],
  TQueryData = GetAssetById["response"],
  TQueryKey extends QueryKey = GetAssetByIdQueryKey,
>(
  assetId: GetAssetByIdPathParams["assetId"],
  options: {
    client?: GetAssetById["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetAssetById["response"],
        GetAssetById["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetAssetById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getAssetByIdQueryKey(assetId);
  const query = useQuery({
    ...(getAssetByIdQueryOptions(
      assetId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetAssetById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getAssetByIdSuspenseQueryKey = (
  assetId: GetAssetByIdPathParams["assetId"],
) => [{ params: { assetId: assetId }, url: "/assets/:assetId" }] as const;
export type GetAssetByIdSuspenseQueryKey = ReturnType<
  typeof getAssetByIdSuspenseQueryKey
>;
export function getAssetByIdSuspenseQueryOptions(
  assetId: GetAssetByIdPathParams["assetId"],
  options: GetAssetById["client"]["parameters"] = {},
) {
  const queryKey = getAssetByIdSuspenseQueryKey(assetId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<GetAssetById["data"], GetAssetById["error"]>({
        method: "get",
        url: `/assets/${assetId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get a new asset by id
 * @link /assets/:assetId
 */
export function useGetAssetByIdSuspense<
  TData = GetAssetById["response"],
  TQueryKey extends QueryKey = GetAssetByIdSuspenseQueryKey,
>(
  assetId: GetAssetByIdPathParams["assetId"],
  options: {
    client?: GetAssetById["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetAssetById["response"],
        GetAssetById["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetAssetById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getAssetByIdSuspenseQueryKey(assetId);
  const query = useSuspenseQuery({
    ...(getAssetByIdSuspenseQueryOptions(
      assetId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetAssetById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
