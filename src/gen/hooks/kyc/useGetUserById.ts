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
  GetUserByIdPathParams,
  GetUserByIdQueryResponse,
} from "../../types/kyc/GetUserById";

type GetUserByIdClient = typeof client<GetUserByIdQueryResponse, never, never>;

type GetUserById = {
  client: {
    parameters: Partial<Parameters<GetUserByIdClient>[0]>;
    return: Awaited<ReturnType<GetUserByIdClient>>;
  };
  data: GetUserByIdQueryResponse;
  error: never;
  headerParams: never;
  pathParams: GetUserByIdPathParams;
  queryParams: never;
  request: never;
  response: Awaited<ReturnType<GetUserByIdClient>>;
};

export const getUserByIdQueryKey = (userId: GetUserByIdPathParams["userId"]) =>
  [{ params: { userId: userId }, url: "/users/:userId" }] as const;
export type GetUserByIdQueryKey = ReturnType<typeof getUserByIdQueryKey>;
export function getUserByIdQueryOptions(
  userId: GetUserByIdPathParams["userId"],
  options: GetUserById["client"]["parameters"] = {},
) {
  const queryKey = getUserByIdQueryKey(userId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<GetUserById["data"], GetUserById["error"]>({
        method: "get",
        url: `/users/${userId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get a specific user
 * @link /users/:userId
 */
export function useGetUserById<
  TData = GetUserById["response"],
  TQueryData = GetUserById["response"],
  TQueryKey extends QueryKey = GetUserByIdQueryKey,
>(
  userId: GetUserByIdPathParams["userId"],
  options: {
    client?: GetUserById["client"]["parameters"];
    query?: Partial<
      QueryObserverOptions<
        GetUserById["response"],
        GetUserById["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
  } = {},
): UseQueryResult<TData, GetUserById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getUserByIdQueryKey(userId);
  const query = useQuery({
    ...(getUserByIdQueryOptions(
      userId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetUserById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
export const getUserByIdSuspenseQueryKey = (
  userId: GetUserByIdPathParams["userId"],
) => [{ params: { userId: userId }, url: "/users/:userId" }] as const;
export type GetUserByIdSuspenseQueryKey = ReturnType<
  typeof getUserByIdSuspenseQueryKey
>;
export function getUserByIdSuspenseQueryOptions(
  userId: GetUserByIdPathParams["userId"],
  options: GetUserById["client"]["parameters"] = {},
) {
  const queryKey = getUserByIdSuspenseQueryKey(userId);

  return queryOptions({
    queryFn: async () => {
      const res = await client<GetUserById["data"], GetUserById["error"]>({
        method: "get",
        url: `/users/${userId}`,
        ...options,
      });

      return res;
    },
    queryKey,
  });
}
/**
 * @summary Get a specific user
 * @link /users/:userId
 */
export function useGetUserByIdSuspense<
  TData = GetUserById["response"],
  TQueryKey extends QueryKey = GetUserByIdSuspenseQueryKey,
>(
  userId: GetUserByIdPathParams["userId"],
  options: {
    client?: GetUserById["client"]["parameters"];
    query?: Partial<
      UseSuspenseQueryOptions<
        GetUserById["response"],
        GetUserById["error"],
        TData,
        TQueryKey
      >
    >;
  } = {},
): UseSuspenseQueryResult<TData, GetUserById["error"]> & {
  queryKey: TQueryKey;
} {
  const { client: clientOptions = {}, query: queryOptions } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getUserByIdSuspenseQueryKey(userId);
  const query = useSuspenseQuery({
    ...(getUserByIdSuspenseQueryOptions(
      userId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetUserById["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;

  return query;
}
