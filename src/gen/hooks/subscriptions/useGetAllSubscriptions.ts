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
  GetAllSubscriptionsQueryParams,
  GetAllSubscriptionsQueryResponse,
} from "../../types/subscriptions/GetAllSubscriptions";

type GetAllSubscriptionsClient = typeof client<
  GetAllSubscriptionsQueryResponse,
  never,
  never
>;

type GetAllSubscriptions = {
  client: {
    parameters: Partial<Parameters<GetAllSubscriptionsClient>[0]>;
    return: Awaited<ReturnType<GetAllSubscriptionsClient>>;
  };
  data: GetAllSubscriptionsQueryResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: GetAllSubscriptionsQueryParams;
  request: never;
  response: Awaited<ReturnType<GetAllSubscriptionsClient>>;
};

export const getAllSubscriptionsQueryKey = (
  params?: GetAllSubscriptions["queryParams"],
) => [{ url: "/subscriptions" }, ...(params ? [params] : [])] as const;
export type GetAllSubscriptionsQueryKey = ReturnType<
  typeof getAllSubscriptionsQueryKey
>;
export function getAllSubscriptionsQueryOptions(
  params?: GetAllSubscriptions["queryParams"],
  options: GetAllSubscriptions["client"]["parameters"] = {},
) {
  const queryKey = getAllSubscriptionsQueryKey(params);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetAllSubscriptions["data"],
        GetAllSubscriptions["error"]
      >({
        method: "get",
        params,
        url: "/subscriptions",
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get all subscriptions for assetId or counterpartyId
 * @link /subscriptions
 */
export function useGetAllSubscriptions<
  TData = GetAllSubscriptions["response"],
  TQueryData = GetAllSubscriptions["response"],
  TQueryKey extends QueryKey = GetAllSubscriptionsQueryKey,
>(
  params?: GetAllSubscriptions["queryParams"],
  options: {
    client?: GetAllSubscriptions["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetAllSubscriptions["response"],
        GetAllSubscriptions["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetAllSubscriptions["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getAllSubscriptionsQueryKey(params);
  const query = useQuery({
    ...(getAllSubscriptionsQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetAllSubscriptions["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getAllSubscriptionsSuspenseQueryKey = (
  params?: GetAllSubscriptions["queryParams"],
) => [{ url: "/subscriptions" }, ...(params ? [params] : [])] as const;
export type GetAllSubscriptionsSuspenseQueryKey = ReturnType<
  typeof getAllSubscriptionsSuspenseQueryKey
>;
export function getAllSubscriptionsSuspenseQueryOptions(
  params?: GetAllSubscriptions["queryParams"],
  options: GetAllSubscriptions["client"]["parameters"] = {},
) {
  const queryKey = getAllSubscriptionsSuspenseQueryKey(params);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetAllSubscriptions["data"],
        GetAllSubscriptions["error"]
      >({
        method: "get",
        params,
        url: "/subscriptions",
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get all subscriptions for assetId or counterpartyId
 * @link /subscriptions
 */
export function useGetAllSubscriptionsSuspense<
  TData = GetAllSubscriptions["response"],
  TQueryKey extends QueryKey = GetAllSubscriptionsSuspenseQueryKey,
>(
  params?: GetAllSubscriptions["queryParams"],
  options: {
    client?: GetAllSubscriptions["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetAllSubscriptions["response"],
        GetAllSubscriptions["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetAllSubscriptions["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getAllSubscriptionsSuspenseQueryKey(params);
  const query = useSuspenseQuery({
    ...(getAllSubscriptionsSuspenseQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetAllSubscriptions["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
