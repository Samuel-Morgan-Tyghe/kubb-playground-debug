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
  GetSubscriptionByIdPathParams,
  GetSubscriptionByIdQueryResponse,
} from "../../types/subscriptions/GetSubscriptionById";

type GetSubscriptionByIdClient = typeof client<
  GetSubscriptionByIdQueryResponse,
  never,
  never
>;

type GetSubscriptionById = {
  client: {
    parameters: Partial<Parameters<GetSubscriptionByIdClient>[0]>;
    return: Awaited<ReturnType<GetSubscriptionByIdClient>>;
  };
  data: GetSubscriptionByIdQueryResponse;
  error: never;
  headerParams: never;
  pathParams: GetSubscriptionByIdPathParams;
  queryParams: never;
  request: never;
  response: Awaited<ReturnType<GetSubscriptionByIdClient>>;
};

export const getSubscriptionByIdQueryKey = (
  subscriptionId: GetSubscriptionByIdPathParams["subscriptionId"],
) =>
  [
    {
      params: { subscriptionId: subscriptionId },
      url: "/subscriptions/:subscriptionId",
    },
  ] as const;
export type GetSubscriptionByIdQueryKey = ReturnType<
  typeof getSubscriptionByIdQueryKey
>;
export function getSubscriptionByIdQueryOptions(
  subscriptionId: GetSubscriptionByIdPathParams["subscriptionId"],
  options: GetSubscriptionById["client"]["parameters"] = {},
) {
  const queryKey = getSubscriptionByIdQueryKey(subscriptionId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetSubscriptionById["data"],
        GetSubscriptionById["error"]
      >({
        method: "get",
        url: `/subscriptions/${subscriptionId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Retrieve a single subscription
 * @link /subscriptions/:subscriptionId
 */
export function useGetSubscriptionById<
  TData = GetSubscriptionById["response"],
  TQueryData = GetSubscriptionById["response"],
  TQueryKey extends QueryKey = GetSubscriptionByIdQueryKey,
>(
  subscriptionId: GetSubscriptionByIdPathParams["subscriptionId"],
  options: {
    client?: GetSubscriptionById["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetSubscriptionById["response"],
        GetSubscriptionById["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetSubscriptionById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getSubscriptionByIdQueryKey(subscriptionId);
  const query = useQuery({
    ...(getSubscriptionByIdQueryOptions(
      subscriptionId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetSubscriptionById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getSubscriptionByIdSuspenseQueryKey = (
  subscriptionId: GetSubscriptionByIdPathParams["subscriptionId"],
) =>
  [
    {
      params: { subscriptionId: subscriptionId },
      url: "/subscriptions/:subscriptionId",
    },
  ] as const;
export type GetSubscriptionByIdSuspenseQueryKey = ReturnType<
  typeof getSubscriptionByIdSuspenseQueryKey
>;
export function getSubscriptionByIdSuspenseQueryOptions(
  subscriptionId: GetSubscriptionByIdPathParams["subscriptionId"],
  options: GetSubscriptionById["client"]["parameters"] = {},
) {
  const queryKey = getSubscriptionByIdSuspenseQueryKey(subscriptionId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetSubscriptionById["data"],
        GetSubscriptionById["error"]
      >({
        method: "get",
        url: `/subscriptions/${subscriptionId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Retrieve a single subscription
 * @link /subscriptions/:subscriptionId
 */
export function useGetSubscriptionByIdSuspense<
  TData = GetSubscriptionById["response"],
  TQueryKey extends QueryKey = GetSubscriptionByIdSuspenseQueryKey,
>(
  subscriptionId: GetSubscriptionByIdPathParams["subscriptionId"],
  options: {
    client?: GetSubscriptionById["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetSubscriptionById["response"],
        GetSubscriptionById["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetSubscriptionById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getSubscriptionByIdSuspenseQueryKey(subscriptionId);
  const query = useSuspenseQuery({
    ...(getSubscriptionByIdSuspenseQueryOptions(
      subscriptionId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetSubscriptionById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
