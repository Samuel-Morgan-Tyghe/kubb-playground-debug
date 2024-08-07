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
  GetTransactionsQueryParams,
  GetTransactionsQueryResponse,
} from "../../types/transactions/GetTransactions";

type GetTransactionsClient = typeof client<
  GetTransactionsQueryResponse,
  never,
  never
>;

type GetTransactions = {
  client: {
    parameters: Partial<Parameters<GetTransactionsClient>[0]>;
    return: Awaited<ReturnType<GetTransactionsClient>>;
  };
  data: GetTransactionsQueryResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: GetTransactionsQueryParams;
  request: never;
  response: Awaited<ReturnType<GetTransactionsClient>>;
};

export const getTransactionsQueryKey = (
  params: GetTransactions["queryParams"],
) => [{ url: "/transactions" }, ...(params ? [params] : [])] as const;
export type GetTransactionsQueryKey = ReturnType<
  typeof getTransactionsQueryKey
>;
export function getTransactionsQueryOptions(
  params: GetTransactions["queryParams"],
  options: GetTransactions["client"]["parameters"] = {},
) {
  const queryKey = getTransactionsQueryKey(params);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetTransactions["data"],
        GetTransactions["error"]
      >({
        method: "get",
        params,
        url: "/transactions",
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Fetches all transactions for a counterparty
 * @link /transactions
 */
export function useGetTransactions<
  TData = GetTransactions["response"],
  TQueryData = GetTransactions["response"],
  TQueryKey extends QueryKey = GetTransactionsQueryKey,
>(
  params: GetTransactions["queryParams"],
  options: {
    client?: GetTransactions["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetTransactions["response"],
        GetTransactions["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetTransactions["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getTransactionsQueryKey(params);
  const query = useQuery({
    ...(getTransactionsQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetTransactions["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getTransactionsSuspenseQueryKey = (
  params: GetTransactions["queryParams"],
) => [{ url: "/transactions" }, ...(params ? [params] : [])] as const;
export type GetTransactionsSuspenseQueryKey = ReturnType<
  typeof getTransactionsSuspenseQueryKey
>;
export function getTransactionsSuspenseQueryOptions(
  params: GetTransactions["queryParams"],
  options: GetTransactions["client"]["parameters"] = {},
) {
  const queryKey = getTransactionsSuspenseQueryKey(params);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetTransactions["data"],
        GetTransactions["error"]
      >({
        method: "get",
        params,
        url: "/transactions",
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Fetches all transactions for a counterparty
 * @link /transactions
 */
export function useGetTransactionsSuspense<
  TData = GetTransactions["response"],
  TQueryKey extends QueryKey = GetTransactionsSuspenseQueryKey,
>(
  params: GetTransactions["queryParams"],
  options: {
    client?: GetTransactions["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetTransactions["response"],
        GetTransactions["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetTransactions["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getTransactionsSuspenseQueryKey(params);
  const query = useSuspenseQuery({
    ...(getTransactionsSuspenseQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetTransactions["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
