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
  GetCapitalCallInvoiceByIdPathParams,
  GetCapitalCallInvoiceByIdQueryResponse,
} from "../../types/capitalCallInvoices/GetCapitalCallInvoiceById";

type GetCapitalCallInvoiceByIdClient = typeof client<
  GetCapitalCallInvoiceByIdQueryResponse,
  never,
  never
>;

type GetCapitalCallInvoiceById = {
  client: {
    parameters: Partial<Parameters<GetCapitalCallInvoiceByIdClient>[0]>;
    return: Awaited<ReturnType<GetCapitalCallInvoiceByIdClient>>;
  };
  data: GetCapitalCallInvoiceByIdQueryResponse;
  error: never;
  headerParams: never;
  pathParams: GetCapitalCallInvoiceByIdPathParams;
  queryParams: never;
  request: never;
  response: Awaited<ReturnType<GetCapitalCallInvoiceByIdClient>>;
};

export const getCapitalCallInvoiceByIdQueryKey = (
  capitalCallInvoiceId: GetCapitalCallInvoiceByIdPathParams["capitalCallInvoiceId"],
) =>
  [
    {
      params: { capitalCallInvoiceId: capitalCallInvoiceId },
      url: "/capital-call-invoices/:capitalCallInvoiceId",
    },
  ] as const;
export type GetCapitalCallInvoiceByIdQueryKey = ReturnType<
  typeof getCapitalCallInvoiceByIdQueryKey
>;
export function getCapitalCallInvoiceByIdQueryOptions(
  capitalCallInvoiceId: GetCapitalCallInvoiceByIdPathParams["capitalCallInvoiceId"],
  options: GetCapitalCallInvoiceById["client"]["parameters"] = {},
) {
  const queryKey = getCapitalCallInvoiceByIdQueryKey(capitalCallInvoiceId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetCapitalCallInvoiceById["data"],
        GetCapitalCallInvoiceById["error"]
      >({
        method: "get",
        url: `/capital-call-invoices/${capitalCallInvoiceId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Retrieve a single capital call or distribution invoice
 * @link /capital-call-invoices/:capitalCallInvoiceId
 */
export function useGetCapitalCallInvoiceById<
  TData = GetCapitalCallInvoiceById["response"],
  TQueryData = GetCapitalCallInvoiceById["response"],
  TQueryKey extends QueryKey = GetCapitalCallInvoiceByIdQueryKey,
>(
  capitalCallInvoiceId: GetCapitalCallInvoiceByIdPathParams["capitalCallInvoiceId"],
  options: {
    client?: GetCapitalCallInvoiceById["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetCapitalCallInvoiceById["response"],
        GetCapitalCallInvoiceById["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetCapitalCallInvoiceById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getCapitalCallInvoiceByIdQueryKey(capitalCallInvoiceId);
  const query = useQuery({
    ...(getCapitalCallInvoiceByIdQueryOptions(
      capitalCallInvoiceId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetCapitalCallInvoiceById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getCapitalCallInvoiceByIdSuspenseQueryKey = (
  capitalCallInvoiceId: GetCapitalCallInvoiceByIdPathParams["capitalCallInvoiceId"],
) =>
  [
    {
      params: { capitalCallInvoiceId: capitalCallInvoiceId },
      url: "/capital-call-invoices/:capitalCallInvoiceId",
    },
  ] as const;
export type GetCapitalCallInvoiceByIdSuspenseQueryKey = ReturnType<
  typeof getCapitalCallInvoiceByIdSuspenseQueryKey
>;
export function getCapitalCallInvoiceByIdSuspenseQueryOptions(
  capitalCallInvoiceId: GetCapitalCallInvoiceByIdPathParams["capitalCallInvoiceId"],
  options: GetCapitalCallInvoiceById["client"]["parameters"] = {},
) {
  const queryKey =
    getCapitalCallInvoiceByIdSuspenseQueryKey(capitalCallInvoiceId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetCapitalCallInvoiceById["data"],
        GetCapitalCallInvoiceById["error"]
      >({
        method: "get",
        url: `/capital-call-invoices/${capitalCallInvoiceId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Retrieve a single capital call or distribution invoice
 * @link /capital-call-invoices/:capitalCallInvoiceId
 */
export function useGetCapitalCallInvoiceByIdSuspense<
  TData = GetCapitalCallInvoiceById["response"],
  TQueryKey extends QueryKey = GetCapitalCallInvoiceByIdSuspenseQueryKey,
>(
  capitalCallInvoiceId: GetCapitalCallInvoiceByIdPathParams["capitalCallInvoiceId"],
  options: {
    client?: GetCapitalCallInvoiceById["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetCapitalCallInvoiceById["response"],
        GetCapitalCallInvoiceById["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetCapitalCallInvoiceById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getCapitalCallInvoiceByIdSuspenseQueryKey(capitalCallInvoiceId);
  const query = useSuspenseQuery({
    ...(getCapitalCallInvoiceByIdSuspenseQueryOptions(
      capitalCallInvoiceId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetCapitalCallInvoiceById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
