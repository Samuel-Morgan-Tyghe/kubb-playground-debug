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
  GetCapitalCallInvoicesQueryParams,
  GetCapitalCallInvoicesQueryResponse,
} from "../../types/capitalCallInvoices/GetCapitalCallInvoices";

type GetCapitalCallInvoicesClient = typeof client<
  GetCapitalCallInvoicesQueryResponse,
  never,
  never
>;

type GetCapitalCallInvoices = {
  client: {
    parameters: Partial<Parameters<GetCapitalCallInvoicesClient>[0]>;
    return: Awaited<ReturnType<GetCapitalCallInvoicesClient>>;
  };
  data: GetCapitalCallInvoicesQueryResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: GetCapitalCallInvoicesQueryParams;
  request: never;
  response: Awaited<ReturnType<GetCapitalCallInvoicesClient>>;
};

export const getCapitalCallInvoicesQueryKey = (
  params?: GetCapitalCallInvoices["queryParams"],
) => [{ url: "/capital-call-invoices" }, ...(params ? [params] : [])] as const;
export type GetCapitalCallInvoicesQueryKey = ReturnType<
  typeof getCapitalCallInvoicesQueryKey
>;
export function getCapitalCallInvoicesQueryOptions(
  params?: GetCapitalCallInvoices["queryParams"],
  options: GetCapitalCallInvoices["client"]["parameters"] = {},
) {
  const queryKey = getCapitalCallInvoicesQueryKey(params);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetCapitalCallInvoices["data"],
        GetCapitalCallInvoices["error"]
      >({
        method: "get",
        params,
        url: "/capital-call-invoices",
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get all capital-call-invoices or distribution-invoices
 * @link /capital-call-invoices
 */
export function useGetCapitalCallInvoices<
  TData = GetCapitalCallInvoices["response"],
  TQueryData = GetCapitalCallInvoices["response"],
  TQueryKey extends QueryKey = GetCapitalCallInvoicesQueryKey,
>(
  params?: GetCapitalCallInvoices["queryParams"],
  options: {
    client?: GetCapitalCallInvoices["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetCapitalCallInvoices["response"],
        GetCapitalCallInvoices["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetCapitalCallInvoices["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getCapitalCallInvoicesQueryKey(params);
  const query = useQuery({
    ...(getCapitalCallInvoicesQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetCapitalCallInvoices["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getCapitalCallInvoicesSuspenseQueryKey = (
  params?: GetCapitalCallInvoices["queryParams"],
) => [{ url: "/capital-call-invoices" }, ...(params ? [params] : [])] as const;
export type GetCapitalCallInvoicesSuspenseQueryKey = ReturnType<
  typeof getCapitalCallInvoicesSuspenseQueryKey
>;
export function getCapitalCallInvoicesSuspenseQueryOptions(
  params?: GetCapitalCallInvoices["queryParams"],
  options: GetCapitalCallInvoices["client"]["parameters"] = {},
) {
  const queryKey = getCapitalCallInvoicesSuspenseQueryKey(params);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetCapitalCallInvoices["data"],
        GetCapitalCallInvoices["error"]
      >({
        method: "get",
        params,
        url: "/capital-call-invoices",
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get all capital-call-invoices or distribution-invoices
 * @link /capital-call-invoices
 */
export function useGetCapitalCallInvoicesSuspense<
  TData = GetCapitalCallInvoices["response"],
  TQueryKey extends QueryKey = GetCapitalCallInvoicesSuspenseQueryKey,
>(
  params?: GetCapitalCallInvoices["queryParams"],
  options: {
    client?: GetCapitalCallInvoices["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetCapitalCallInvoices["response"],
        GetCapitalCallInvoices["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetCapitalCallInvoices["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getCapitalCallInvoicesSuspenseQueryKey(params);
  const query = useSuspenseQuery({
    ...(getCapitalCallInvoicesSuspenseQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetCapitalCallInvoices["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
