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
  GetFundAdminByAssetIdPathParams,
  GetFundAdminByAssetIdQueryResponse,
} from "../../types/fundManagement/GetFundAdminByAssetId";

type GetFundAdminByAssetIdClient = typeof client<
  GetFundAdminByAssetIdQueryResponse,
  never,
  never
>;

type GetFundAdminByAssetId = {
  client: {
    parameters: Partial<Parameters<GetFundAdminByAssetIdClient>[0]>;
    return: Awaited<ReturnType<GetFundAdminByAssetIdClient>>;
  };
  data: GetFundAdminByAssetIdQueryResponse;
  error: never;
  headerParams: never;
  pathParams: GetFundAdminByAssetIdPathParams;
  queryParams: never;
  request: never;
  response: Awaited<ReturnType<GetFundAdminByAssetIdClient>>;
};

export const getFundAdminByAssetIdQueryKey = (
  assetId: GetFundAdminByAssetIdPathParams["assetId"],
) =>
  [
    { params: { assetId: assetId }, url: "/assets/:assetId/fund-admins" },
  ] as const;
export type GetFundAdminByAssetIdQueryKey = ReturnType<
  typeof getFundAdminByAssetIdQueryKey
>;
export function getFundAdminByAssetIdQueryOptions(
  assetId: GetFundAdminByAssetIdPathParams["assetId"],
  options: GetFundAdminByAssetId["client"]["parameters"] = {},
) {
  const queryKey = getFundAdminByAssetIdQueryKey(assetId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetFundAdminByAssetId["data"],
        GetFundAdminByAssetId["error"]
      >({
        method: "get",
        url: `/assets/${assetId}/fund-admins`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get a single asset's admin
 * @link /assets/:assetId/fund-admins
 */
export function useGetFundAdminByAssetId<
  TData = GetFundAdminByAssetId["response"],
  TQueryData = GetFundAdminByAssetId["response"],
  TQueryKey extends QueryKey = GetFundAdminByAssetIdQueryKey,
>(
  assetId: GetFundAdminByAssetIdPathParams["assetId"],
  options: {
    client?: GetFundAdminByAssetId["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetFundAdminByAssetId["response"],
        GetFundAdminByAssetId["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetFundAdminByAssetId["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getFundAdminByAssetIdQueryKey(assetId);
  const query = useQuery({
    ...(getFundAdminByAssetIdQueryOptions(
      assetId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetFundAdminByAssetId["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getFundAdminByAssetIdSuspenseQueryKey = (
  assetId: GetFundAdminByAssetIdPathParams["assetId"],
) =>
  [
    { params: { assetId: assetId }, url: "/assets/:assetId/fund-admins" },
  ] as const;
export type GetFundAdminByAssetIdSuspenseQueryKey = ReturnType<
  typeof getFundAdminByAssetIdSuspenseQueryKey
>;
export function getFundAdminByAssetIdSuspenseQueryOptions(
  assetId: GetFundAdminByAssetIdPathParams["assetId"],
  options: GetFundAdminByAssetId["client"]["parameters"] = {},
) {
  const queryKey = getFundAdminByAssetIdSuspenseQueryKey(assetId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetFundAdminByAssetId["data"],
        GetFundAdminByAssetId["error"]
      >({
        method: "get",
        url: `/assets/${assetId}/fund-admins`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get a single asset's admin
 * @link /assets/:assetId/fund-admins
 */
export function useGetFundAdminByAssetIdSuspense<
  TData = GetFundAdminByAssetId["response"],
  TQueryKey extends QueryKey = GetFundAdminByAssetIdSuspenseQueryKey,
>(
  assetId: GetFundAdminByAssetIdPathParams["assetId"],
  options: {
    client?: GetFundAdminByAssetId["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetFundAdminByAssetId["response"],
        GetFundAdminByAssetId["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetFundAdminByAssetId["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getFundAdminByAssetIdSuspenseQueryKey(assetId);
  const query = useSuspenseQuery({
    ...(getFundAdminByAssetIdSuspenseQueryOptions(
      assetId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetFundAdminByAssetId["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
