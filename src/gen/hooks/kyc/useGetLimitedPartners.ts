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
  GetLimitedPartnersQueryParams,
  GetLimitedPartnersQueryResponse,
} from "../../types/kyc/GetLimitedPartners";

type GetLimitedPartnersClient = typeof client<
  GetLimitedPartnersQueryResponse,
  never,
  never
>;

type GetLimitedPartners = {
  client: {
    parameters: Partial<Parameters<GetLimitedPartnersClient>[0]>;
    return: Awaited<ReturnType<GetLimitedPartnersClient>>;
  };
  data: GetLimitedPartnersQueryResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: GetLimitedPartnersQueryParams;
  request: never;
  response: Awaited<ReturnType<GetLimitedPartnersClient>>;
};

export const getLimitedPartnersQueryKey = (
  params: GetLimitedPartners["queryParams"],
) => [{ url: "/limited-partners" }, ...(params ? [params] : [])] as const;
export type GetLimitedPartnersQueryKey = ReturnType<
  typeof getLimitedPartnersQueryKey
>;
export function getLimitedPartnersQueryOptions(
  params: GetLimitedPartners["queryParams"],
  options: GetLimitedPartners["client"]["parameters"] = {},
) {
  const queryKey = getLimitedPartnersQueryKey(params);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetLimitedPartners["data"],
        GetLimitedPartners["error"]
      >({
        method: "get",
        params,
        url: "/limited-partners",
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get all the limited-partners of a general-partner by id
 * @link /limited-partners
 */
export function useGetLimitedPartners<
  TData = GetLimitedPartners["response"],
  TQueryData = GetLimitedPartners["response"],
  TQueryKey extends QueryKey = GetLimitedPartnersQueryKey,
>(
  params: GetLimitedPartners["queryParams"],
  options: {
    client?: GetLimitedPartners["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetLimitedPartners["response"],
        GetLimitedPartners["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetLimitedPartners["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getLimitedPartnersQueryKey(params);
  const query = useQuery({
    ...(getLimitedPartnersQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetLimitedPartners["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getLimitedPartnersSuspenseQueryKey = (
  params: GetLimitedPartners["queryParams"],
) => [{ url: "/limited-partners" }, ...(params ? [params] : [])] as const;
export type GetLimitedPartnersSuspenseQueryKey = ReturnType<
  typeof getLimitedPartnersSuspenseQueryKey
>;
export function getLimitedPartnersSuspenseQueryOptions(
  params: GetLimitedPartners["queryParams"],
  options: GetLimitedPartners["client"]["parameters"] = {},
) {
  const queryKey = getLimitedPartnersSuspenseQueryKey(params);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetLimitedPartners["data"],
        GetLimitedPartners["error"]
      >({
        method: "get",
        params,
        url: "/limited-partners",
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get all the limited-partners of a general-partner by id
 * @link /limited-partners
 */
export function useGetLimitedPartnersSuspense<
  TData = GetLimitedPartners["response"],
  TQueryKey extends QueryKey = GetLimitedPartnersSuspenseQueryKey,
>(
  params: GetLimitedPartners["queryParams"],
  options: {
    client?: GetLimitedPartners["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetLimitedPartners["response"],
        GetLimitedPartners["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetLimitedPartners["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getLimitedPartnersSuspenseQueryKey(params);
  const query = useSuspenseQuery({
    ...(getLimitedPartnersSuspenseQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetLimitedPartners["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
