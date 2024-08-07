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
  GetTransactionByIdPathParams,
  GetTransactionByIdQueryResponse,
} from "../../types/transactions/GetTransactionById";

type GetTransactionByIdClient = typeof client<
  GetTransactionByIdQueryResponse,
  never,
  never
>;

type GetTransactionById = {
  client: {
    parameters: Partial<Parameters<GetTransactionByIdClient>[0]>;
    return: Awaited<ReturnType<GetTransactionByIdClient>>;
  };
  data: GetTransactionByIdQueryResponse;
  error: never;
  headerParams: never;
  pathParams: GetTransactionByIdPathParams;
  queryParams: never;
  request: never;
  response: Awaited<ReturnType<GetTransactionByIdClient>>;
};

export const getTransactionByIdQueryKey = (
  transactionId: GetTransactionByIdPathParams["transactionId"],
) =>
  [
    {
      params: { transactionId: transactionId },
      url: "/transactions/:transactionId",
    },
  ] as const;
export type GetTransactionByIdQueryKey = ReturnType<
  typeof getTransactionByIdQueryKey
>;
export function getTransactionByIdQueryOptions(
  transactionId: GetTransactionByIdPathParams["transactionId"],
  options: GetTransactionById["client"]["parameters"] = {},
) {
  const queryKey = getTransactionByIdQueryKey(transactionId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetTransactionById["data"],
        GetTransactionById["error"]
      >({
        method: "get",
        url: `/transactions/${transactionId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Fetches a transaction
 * @link /transactions/:transactionId
 */
export function useGetTransactionById<
  TData = GetTransactionById["response"],
  TQueryData = GetTransactionById["response"],
  TQueryKey extends QueryKey = GetTransactionByIdQueryKey,
>(
  transactionId: GetTransactionByIdPathParams["transactionId"],
  options: {
    client?: GetTransactionById["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetTransactionById["response"],
        GetTransactionById["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetTransactionById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getTransactionByIdQueryKey(transactionId);
  const query = useQuery({
    ...(getTransactionByIdQueryOptions(
      transactionId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetTransactionById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getTransactionByIdSuspenseQueryKey = (
  transactionId: GetTransactionByIdPathParams["transactionId"],
) =>
  [
    {
      params: { transactionId: transactionId },
      url: "/transactions/:transactionId",
    },
  ] as const;
export type GetTransactionByIdSuspenseQueryKey = ReturnType<
  typeof getTransactionByIdSuspenseQueryKey
>;
export function getTransactionByIdSuspenseQueryOptions(
  transactionId: GetTransactionByIdPathParams["transactionId"],
  options: GetTransactionById["client"]["parameters"] = {},
) {
  const queryKey = getTransactionByIdSuspenseQueryKey(transactionId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetTransactionById["data"],
        GetTransactionById["error"]
      >({
        method: "get",
        url: `/transactions/${transactionId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Fetches a transaction
 * @link /transactions/:transactionId
 */
export function useGetTransactionByIdSuspense<
  TData = GetTransactionById["response"],
  TQueryKey extends QueryKey = GetTransactionByIdSuspenseQueryKey,
>(
  transactionId: GetTransactionByIdPathParams["transactionId"],
  options: {
    client?: GetTransactionById["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetTransactionById["response"],
        GetTransactionById["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetTransactionById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getTransactionByIdSuspenseQueryKey(transactionId);
  const query = useSuspenseQuery({
    ...(getTransactionByIdSuspenseQueryOptions(
      transactionId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetTransactionById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
