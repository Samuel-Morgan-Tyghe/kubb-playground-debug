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
  GetCounterpartyByIdPathParams,
  GetCounterpartyByIdQueryResponse,
} from "../../types/counterparties/GetCounterpartyById";

type GetCounterpartyByIdClient = typeof client<
  GetCounterpartyByIdQueryResponse,
  never,
  never
>;

type GetCounterpartyById = {
  client: {
    parameters: Partial<Parameters<GetCounterpartyByIdClient>[0]>;
    return: Awaited<ReturnType<GetCounterpartyByIdClient>>;
  };
  data: GetCounterpartyByIdQueryResponse;
  error: never;
  headerParams: never;
  pathParams: GetCounterpartyByIdPathParams;
  queryParams: never;
  request: never;
  response: Awaited<ReturnType<GetCounterpartyByIdClient>>;
};

export const getCounterpartyByIdQueryKey = (
  counterpartyId: GetCounterpartyByIdPathParams["counterpartyId"],
) =>
  [
    {
      params: { counterpartyId: counterpartyId },
      url: "/counterparties/:counterpartyId",
    },
  ] as const;
export type GetCounterpartyByIdQueryKey = ReturnType<
  typeof getCounterpartyByIdQueryKey
>;
export function getCounterpartyByIdQueryOptions(
  counterpartyId: GetCounterpartyByIdPathParams["counterpartyId"],
  options: GetCounterpartyById["client"]["parameters"] = {},
) {
  const queryKey = getCounterpartyByIdQueryKey(counterpartyId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetCounterpartyById["data"],
        GetCounterpartyById["error"]
      >({
        method: "get",
        url: `/counterparties/${counterpartyId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Fetches details of a counterparty
 * @link /counterparties/:counterpartyId
 */
export function useGetCounterpartyById<
  TData = GetCounterpartyById["response"],
  TQueryData = GetCounterpartyById["response"],
  TQueryKey extends QueryKey = GetCounterpartyByIdQueryKey,
>(
  counterpartyId: GetCounterpartyByIdPathParams["counterpartyId"],
  options: {
    client?: GetCounterpartyById["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetCounterpartyById["response"],
        GetCounterpartyById["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetCounterpartyById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getCounterpartyByIdQueryKey(counterpartyId);
  const query = useQuery({
    ...(getCounterpartyByIdQueryOptions(
      counterpartyId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetCounterpartyById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getCounterpartyByIdSuspenseQueryKey = (
  counterpartyId: GetCounterpartyByIdPathParams["counterpartyId"],
) =>
  [
    {
      params: { counterpartyId: counterpartyId },
      url: "/counterparties/:counterpartyId",
    },
  ] as const;
export type GetCounterpartyByIdSuspenseQueryKey = ReturnType<
  typeof getCounterpartyByIdSuspenseQueryKey
>;
export function getCounterpartyByIdSuspenseQueryOptions(
  counterpartyId: GetCounterpartyByIdPathParams["counterpartyId"],
  options: GetCounterpartyById["client"]["parameters"] = {},
) {
  const queryKey = getCounterpartyByIdSuspenseQueryKey(counterpartyId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetCounterpartyById["data"],
        GetCounterpartyById["error"]
      >({
        method: "get",
        url: `/counterparties/${counterpartyId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Fetches details of a counterparty
 * @link /counterparties/:counterpartyId
 */
export function useGetCounterpartyByIdSuspense<
  TData = GetCounterpartyById["response"],
  TQueryKey extends QueryKey = GetCounterpartyByIdSuspenseQueryKey,
>(
  counterpartyId: GetCounterpartyByIdPathParams["counterpartyId"],
  options: {
    client?: GetCounterpartyById["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetCounterpartyById["response"],
        GetCounterpartyById["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetCounterpartyById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getCounterpartyByIdSuspenseQueryKey(counterpartyId);
  const query = useSuspenseQuery({
    ...(getCounterpartyByIdSuspenseQueryOptions(
      counterpartyId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetCounterpartyById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
