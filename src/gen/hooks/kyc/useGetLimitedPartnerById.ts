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
  GetLimitedPartnerByIdPathParams,
  GetLimitedPartnerByIdQueryResponse,
} from "../../types/kyc/GetLimitedPartnerById";

type GetLimitedPartnerByIdClient = typeof client<
  GetLimitedPartnerByIdQueryResponse,
  never,
  never
>;

type GetLimitedPartnerById = {
  client: {
    parameters: Partial<Parameters<GetLimitedPartnerByIdClient>[0]>;
    return: Awaited<ReturnType<GetLimitedPartnerByIdClient>>;
  };
  data: GetLimitedPartnerByIdQueryResponse;
  error: never;
  headerParams: never;
  pathParams: GetLimitedPartnerByIdPathParams;
  queryParams: never;
  request: never;
  response: Awaited<ReturnType<GetLimitedPartnerByIdClient>>;
};

export const getLimitedPartnerByIdQueryKey = (
  limitedPartnerId: GetLimitedPartnerByIdPathParams["limitedPartnerId"],
) =>
  [
    {
      params: { limitedPartnerId: limitedPartnerId },
      url: "/limited-partners/:limitedPartnerId",
    },
  ] as const;
export type GetLimitedPartnerByIdQueryKey = ReturnType<
  typeof getLimitedPartnerByIdQueryKey
>;
export function getLimitedPartnerByIdQueryOptions(
  limitedPartnerId: GetLimitedPartnerByIdPathParams["limitedPartnerId"],
  options: GetLimitedPartnerById["client"]["parameters"] = {},
) {
  const queryKey = getLimitedPartnerByIdQueryKey(limitedPartnerId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetLimitedPartnerById["data"],
        GetLimitedPartnerById["error"]
      >({
        method: "get",
        url: `/limited-partners/${limitedPartnerId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get a limitedPartner by its id
 * @link /limited-partners/:limitedPartnerId
 */
export function useGetLimitedPartnerById<
  TData = GetLimitedPartnerById["response"],
  TQueryData = GetLimitedPartnerById["response"],
  TQueryKey extends QueryKey = GetLimitedPartnerByIdQueryKey,
>(
  limitedPartnerId: GetLimitedPartnerByIdPathParams["limitedPartnerId"],
  options: {
    client?: GetLimitedPartnerById["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetLimitedPartnerById["response"],
        GetLimitedPartnerById["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetLimitedPartnerById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getLimitedPartnerByIdQueryKey(limitedPartnerId);
  const query = useQuery({
    ...(getLimitedPartnerByIdQueryOptions(
      limitedPartnerId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetLimitedPartnerById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getLimitedPartnerByIdSuspenseQueryKey = (
  limitedPartnerId: GetLimitedPartnerByIdPathParams["limitedPartnerId"],
) =>
  [
    {
      params: { limitedPartnerId: limitedPartnerId },
      url: "/limited-partners/:limitedPartnerId",
    },
  ] as const;
export type GetLimitedPartnerByIdSuspenseQueryKey = ReturnType<
  typeof getLimitedPartnerByIdSuspenseQueryKey
>;
export function getLimitedPartnerByIdSuspenseQueryOptions(
  limitedPartnerId: GetLimitedPartnerByIdPathParams["limitedPartnerId"],
  options: GetLimitedPartnerById["client"]["parameters"] = {},
) {
  const queryKey = getLimitedPartnerByIdSuspenseQueryKey(limitedPartnerId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetLimitedPartnerById["data"],
        GetLimitedPartnerById["error"]
      >({
        method: "get",
        url: `/limited-partners/${limitedPartnerId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get a limitedPartner by its id
 * @link /limited-partners/:limitedPartnerId
 */
export function useGetLimitedPartnerByIdSuspense<
  TData = GetLimitedPartnerById["response"],
  TQueryKey extends QueryKey = GetLimitedPartnerByIdSuspenseQueryKey,
>(
  limitedPartnerId: GetLimitedPartnerByIdPathParams["limitedPartnerId"],
  options: {
    client?: GetLimitedPartnerById["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetLimitedPartnerById["response"],
        GetLimitedPartnerById["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetLimitedPartnerById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getLimitedPartnerByIdSuspenseQueryKey(limitedPartnerId);
  const query = useSuspenseQuery({
    ...(getLimitedPartnerByIdSuspenseQueryOptions(
      limitedPartnerId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetLimitedPartnerById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
