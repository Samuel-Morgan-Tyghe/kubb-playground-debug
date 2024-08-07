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
  GetCapitalCallByIdPathParams,
  GetCapitalCallByIdQueryResponse,
} from "../../types/capitalCalls/GetCapitalCallById";

type GetCapitalCallByIdClient = typeof client<
  GetCapitalCallByIdQueryResponse,
  never,
  never
>;

type GetCapitalCallById = {
  client: {
    parameters: Partial<Parameters<GetCapitalCallByIdClient>[0]>;
    return: Awaited<ReturnType<GetCapitalCallByIdClient>>;
  };
  data: GetCapitalCallByIdQueryResponse;
  error: never;
  headerParams: never;
  pathParams: GetCapitalCallByIdPathParams;
  queryParams: never;
  request: never;
  response: Awaited<ReturnType<GetCapitalCallByIdClient>>;
};

export const getCapitalCallByIdQueryKey = (
  capitalCallId: GetCapitalCallByIdPathParams["capitalCallId"],
) =>
  [
    {
      params: { capitalCallId: capitalCallId },
      url: "/capital-calls/:capitalCallId",
    },
  ] as const;
export type GetCapitalCallByIdQueryKey = ReturnType<
  typeof getCapitalCallByIdQueryKey
>;
export function getCapitalCallByIdQueryOptions(
  capitalCallId: GetCapitalCallByIdPathParams["capitalCallId"],
  options: GetCapitalCallById["client"]["parameters"] = {},
) {
  const queryKey = getCapitalCallByIdQueryKey(capitalCallId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetCapitalCallById["data"],
        GetCapitalCallById["error"]
      >({
        method: "get",
        url: `/capital-calls/${capitalCallId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Retrieve a single capital call or distribution
 * @link /capital-calls/:capitalCallId
 */
export function useGetCapitalCallById<
  TData = GetCapitalCallById["response"],
  TQueryData = GetCapitalCallById["response"],
  TQueryKey extends QueryKey = GetCapitalCallByIdQueryKey,
>(
  capitalCallId: GetCapitalCallByIdPathParams["capitalCallId"],
  options: {
    client?: GetCapitalCallById["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetCapitalCallById["response"],
        GetCapitalCallById["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetCapitalCallById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getCapitalCallByIdQueryKey(capitalCallId);
  const query = useQuery({
    ...(getCapitalCallByIdQueryOptions(
      capitalCallId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetCapitalCallById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getCapitalCallByIdSuspenseQueryKey = (
  capitalCallId: GetCapitalCallByIdPathParams["capitalCallId"],
) =>
  [
    {
      params: { capitalCallId: capitalCallId },
      url: "/capital-calls/:capitalCallId",
    },
  ] as const;
export type GetCapitalCallByIdSuspenseQueryKey = ReturnType<
  typeof getCapitalCallByIdSuspenseQueryKey
>;
export function getCapitalCallByIdSuspenseQueryOptions(
  capitalCallId: GetCapitalCallByIdPathParams["capitalCallId"],
  options: GetCapitalCallById["client"]["parameters"] = {},
) {
  const queryKey = getCapitalCallByIdSuspenseQueryKey(capitalCallId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetCapitalCallById["data"],
        GetCapitalCallById["error"]
      >({
        method: "get",
        url: `/capital-calls/${capitalCallId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Retrieve a single capital call or distribution
 * @link /capital-calls/:capitalCallId
 */
export function useGetCapitalCallByIdSuspense<
  TData = GetCapitalCallById["response"],
  TQueryKey extends QueryKey = GetCapitalCallByIdSuspenseQueryKey,
>(
  capitalCallId: GetCapitalCallByIdPathParams["capitalCallId"],
  options: {
    client?: GetCapitalCallById["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetCapitalCallById["response"],
        GetCapitalCallById["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetCapitalCallById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getCapitalCallByIdSuspenseQueryKey(capitalCallId);
  const query = useSuspenseQuery({
    ...(getCapitalCallByIdSuspenseQueryOptions(
      capitalCallId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetCapitalCallById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
