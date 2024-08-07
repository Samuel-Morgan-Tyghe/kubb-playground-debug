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
  GetUsersForLimitedPartnerQueryParams,
  GetUsersForLimitedPartnerQueryResponse,
} from "../../types/kyc/GetUsersForLimitedPartner";

type GetUsersForLimitedPartnerClient = typeof client<
  GetUsersForLimitedPartnerQueryResponse,
  never,
  never
>;

type GetUsersForLimitedPartner = {
  client: {
    parameters: Partial<Parameters<GetUsersForLimitedPartnerClient>[0]>;
    return: Awaited<ReturnType<GetUsersForLimitedPartnerClient>>;
  };
  data: GetUsersForLimitedPartnerQueryResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: GetUsersForLimitedPartnerQueryParams;
  request: never;
  response: Awaited<ReturnType<GetUsersForLimitedPartnerClient>>;
};

export const getUsersForLimitedPartnerQueryKey = (
  params: GetUsersForLimitedPartner["queryParams"],
) => [{ url: "/users" }, ...(params ? [params] : [])] as const;
export type GetUsersForLimitedPartnerQueryKey = ReturnType<
  typeof getUsersForLimitedPartnerQueryKey
>;
export function getUsersForLimitedPartnerQueryOptions(
  params: GetUsersForLimitedPartner["queryParams"],
  options: GetUsersForLimitedPartner["client"]["parameters"] = {},
) {
  const queryKey = getUsersForLimitedPartnerQueryKey(params);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetUsersForLimitedPartner["data"],
        GetUsersForLimitedPartner["error"]
      >({
        method: "get",
        params,
        url: "/users",
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get a list of all users belonging to an LP
 * @link /users
 */
export function useGetUsersForLimitedPartner<
  TData = GetUsersForLimitedPartner["response"],
  TQueryData = GetUsersForLimitedPartner["response"],
  TQueryKey extends QueryKey = GetUsersForLimitedPartnerQueryKey,
>(
  params: GetUsersForLimitedPartner["queryParams"],
  options: {
    client?: GetUsersForLimitedPartner["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetUsersForLimitedPartner["response"],
        GetUsersForLimitedPartner["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetUsersForLimitedPartner["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getUsersForLimitedPartnerQueryKey(params);
  const query = useQuery({
    ...(getUsersForLimitedPartnerQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetUsersForLimitedPartner["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getUsersForLimitedPartnerSuspenseQueryKey = (
  params: GetUsersForLimitedPartner["queryParams"],
) => [{ url: "/users" }, ...(params ? [params] : [])] as const;
export type GetUsersForLimitedPartnerSuspenseQueryKey = ReturnType<
  typeof getUsersForLimitedPartnerSuspenseQueryKey
>;
export function getUsersForLimitedPartnerSuspenseQueryOptions(
  params: GetUsersForLimitedPartner["queryParams"],
  options: GetUsersForLimitedPartner["client"]["parameters"] = {},
) {
  const queryKey = getUsersForLimitedPartnerSuspenseQueryKey(params);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetUsersForLimitedPartner["data"],
        GetUsersForLimitedPartner["error"]
      >({
        method: "get",
        params,
        url: "/users",
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get a list of all users belonging to an LP
 * @link /users
 */
export function useGetUsersForLimitedPartnerSuspense<
  TData = GetUsersForLimitedPartner["response"],
  TQueryKey extends QueryKey = GetUsersForLimitedPartnerSuspenseQueryKey,
>(
  params: GetUsersForLimitedPartner["queryParams"],
  options: {
    client?: GetUsersForLimitedPartner["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetUsersForLimitedPartner["response"],
        GetUsersForLimitedPartner["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetUsersForLimitedPartner["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getUsersForLimitedPartnerSuspenseQueryKey(params);
  const query = useSuspenseQuery({
    ...(getUsersForLimitedPartnerSuspenseQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetUsersForLimitedPartner["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
