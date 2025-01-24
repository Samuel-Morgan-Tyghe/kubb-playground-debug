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
  GetBankAccountByIdPathParams,
  GetBankAccountByIdQueryResponse,
} from "../../types/bankAccounts/GetBankAccountById";

type GetBankAccountByIdClient = typeof client<
  GetBankAccountByIdQueryResponse,
  never,
  never
>;

type GetBankAccountById = {
  client: {
    parameters: Partial<Parameters<GetBankAccountByIdClient>[0]>;
    return: Awaited<ReturnType<GetBankAccountByIdClient>>;
  };
  data: GetBankAccountByIdQueryResponse;
  error: never;
  headerParams: never;
  pathParams: GetBankAccountByIdPathParams;
  queryParams: never;
  request: never;
  response: Awaited<ReturnType<GetBankAccountByIdClient>>;
};

// TODO
// TODO:

export const getBankAccountByIdQueryKey = (
  bankAccountId: GetBankAccountByIdPathParams["bankAccountId"],
) =>
  [
    {
      params: { bankAccountId: bankAccountId },
      url: "/bank-accounts/:bankAccountId",
    },
  ] as const;
export type GetBankAccountByIdQueryKey = ReturnType<
  typeof getBankAccountByIdQueryKey
>;
export function getBankAccountByIdQueryOptions(
  bankAccountId: GetBankAccountByIdPathParams["bankAccountId"],
  options: GetBankAccountById["client"]["parameters"] = {},
) {
  const queryKey = getBankAccountByIdQueryKey(bankAccountId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetBankAccountById["data"],
        GetBankAccountById["error"]
      >({
        method: "get",
        url: `/bank-accounts/${bankAccountId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get the details of a bank account
 * @link /bank-accounts/:bankAccountId
 */
export function useGetBankAccountById<
  TData = GetBankAccountById["response"],
  TQueryData = GetBankAccountById["response"],
  TQueryKey extends QueryKey = GetBankAccountByIdQueryKey,
>(
  bankAccountId: GetBankAccountByIdPathParams["bankAccountId"],
  options: {
    client?: GetBankAccountById["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetBankAccountById["response"],
        GetBankAccountById["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetBankAccountById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getBankAccountByIdQueryKey(bankAccountId);
  const query = useQuery({
    ...(getBankAccountByIdQueryOptions(
      bankAccountId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetBankAccountById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getBankAccountByIdSuspenseQueryKey = (
  bankAccountId: GetBankAccountByIdPathParams["bankAccountId"],
) =>
  [
    {
      params: { bankAccountId: bankAccountId },
      url: "/bank-accounts/:bankAccountId",
    },
  ] as const;
export type GetBankAccountByIdSuspenseQueryKey = ReturnType<
  typeof getBankAccountByIdSuspenseQueryKey
>;
export function getBankAccountByIdSuspenseQueryOptions(
  bankAccountId: GetBankAccountByIdPathParams["bankAccountId"],
  options: GetBankAccountById["client"]["parameters"] = {},
) {
  const queryKey = getBankAccountByIdSuspenseQueryKey(bankAccountId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<
        GetBankAccountById["data"],
        GetBankAccountById["error"]
      >({
        method: "get",
        url: `/bank-accounts/${bankAccountId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get the details of a bank account
 * @link /bank-accounts/:bankAccountId
 */
export function useGetBankAccountByIdSuspense<
  TData = GetBankAccountById["response"],
  TQueryKey extends QueryKey = GetBankAccountByIdSuspenseQueryKey,
>(
  bankAccountId: GetBankAccountByIdPathParams["bankAccountId"],
  options: {
    client?: GetBankAccountById["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetBankAccountById["response"],
        GetBankAccountById["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetBankAccountById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getBankAccountByIdSuspenseQueryKey(bankAccountId);
  const query = useSuspenseQuery({
    ...(getBankAccountByIdSuspenseQueryOptions(
      bankAccountId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetBankAccountById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
