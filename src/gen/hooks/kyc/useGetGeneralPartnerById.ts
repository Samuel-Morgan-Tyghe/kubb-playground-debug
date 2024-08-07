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
  GetGeneralPartnerByIdPathParams,
  GetGeneralPartnerByIdQueryResponse,
} from "../../types/kyc/GetGeneralPartnerById";

type GetGeneralPartnerByIdClient = typeof client<
  GetGeneralPartnerByIdQueryResponse,
  never,
  never
>;

type GetGeneralPartnerById = {
  client: {
    parameters: Partial<Parameters<GetGeneralPartnerByIdClient>[0]>;
    return: Awaited<ReturnType<GetGeneralPartnerByIdClient>>;
  };
  data: GetGeneralPartnerByIdQueryResponse;
  error: never;
  headerParams: never;
  pathParams: GetGeneralPartnerByIdPathParams;
  queryParams: never;
  request: never;
  response: Awaited<ReturnType<GetGeneralPartnerByIdClient>>;
};

export const getGeneralPartnerByIdQueryKey = (
  generalPartnerId: GetGeneralPartnerByIdPathParams["generalPartnerId"],
) =>
  [
    {
      params: { generalPartnerId: generalPartnerId },
      url: "/general-partners/:generalPartnerId",
    },
  ] as const;
export type GetGeneralPartnerByIdQueryKey = ReturnType<
  typeof getGeneralPartnerByIdQueryKey
>;
export function getGeneralPartnerByIdQueryOptions(
  generalPartnerId: GetGeneralPartnerByIdPathParams["generalPartnerId"],
  options: GetGeneralPartnerById["client"]["parameters"] = {},
) {
  const queryKey = getGeneralPartnerByIdQueryKey(generalPartnerId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetGeneralPartnerById["data"],
        GetGeneralPartnerById["error"]
      >({
        method: "get",
        url: `/general-partners/${generalPartnerId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get a general-partner by its id
 * @link /general-partners/:generalPartnerId
 */
export function useGetGeneralPartnerById<
  TData = GetGeneralPartnerById["response"],
  TQueryData = GetGeneralPartnerById["response"],
  TQueryKey extends QueryKey = GetGeneralPartnerByIdQueryKey,
>(
  generalPartnerId: GetGeneralPartnerByIdPathParams["generalPartnerId"],
  options: {
    client?: GetGeneralPartnerById["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetGeneralPartnerById["response"],
        GetGeneralPartnerById["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetGeneralPartnerById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getGeneralPartnerByIdQueryKey(generalPartnerId);
  const query = useQuery({
    ...(getGeneralPartnerByIdQueryOptions(
      generalPartnerId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetGeneralPartnerById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getGeneralPartnerByIdSuspenseQueryKey = (
  generalPartnerId: GetGeneralPartnerByIdPathParams["generalPartnerId"],
) =>
  [
    {
      params: { generalPartnerId: generalPartnerId },
      url: "/general-partners/:generalPartnerId",
    },
  ] as const;
export type GetGeneralPartnerByIdSuspenseQueryKey = ReturnType<
  typeof getGeneralPartnerByIdSuspenseQueryKey
>;
export function getGeneralPartnerByIdSuspenseQueryOptions(
  generalPartnerId: GetGeneralPartnerByIdPathParams["generalPartnerId"],
  options: GetGeneralPartnerById["client"]["parameters"] = {},
) {
  const queryKey = getGeneralPartnerByIdSuspenseQueryKey(generalPartnerId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetGeneralPartnerById["data"],
        GetGeneralPartnerById["error"]
      >({
        method: "get",
        url: `/general-partners/${generalPartnerId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get a general-partner by its id
 * @link /general-partners/:generalPartnerId
 */
export function useGetGeneralPartnerByIdSuspense<
  TData = GetGeneralPartnerById["response"],
  TQueryKey extends QueryKey = GetGeneralPartnerByIdSuspenseQueryKey,
>(
  generalPartnerId: GetGeneralPartnerByIdPathParams["generalPartnerId"],
  options: {
    client?: GetGeneralPartnerById["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetGeneralPartnerById["response"],
        GetGeneralPartnerById["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetGeneralPartnerById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getGeneralPartnerByIdSuspenseQueryKey(generalPartnerId);
  const query = useSuspenseQuery({
    ...(getGeneralPartnerByIdSuspenseQueryOptions(
      generalPartnerId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetGeneralPartnerById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
