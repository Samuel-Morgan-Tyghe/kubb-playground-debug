import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import client from "@configs/kubb/customClientQuery";

import type {
  CreateSubscriptionMutationRequest,
  CreateSubscriptionMutationResponse,
} from "../../types/subscriptions/CreateSubscription";

type CreateSubscriptionClient = typeof client<
  CreateSubscriptionMutationResponse,
  never,
  CreateSubscriptionMutationRequest
>;

type CreateSubscription = {
  client: {
    parameters: Partial<Parameters<CreateSubscriptionClient>[0]>;
    return: Awaited<ReturnType<CreateSubscriptionClient>>;
  };
  data: CreateSubscriptionMutationResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: never;
  request: CreateSubscriptionMutationRequest;
  response: Awaited<ReturnType<CreateSubscriptionClient>>;
};

/**
 * @summary Create a new subscription
 * @link /subscriptions
 */
export function useCreateSubscription(
  options: {
    client?: CreateSubscription["client"]["parameters"];
    mutation?: UseMutationOptions<
      CreateSubscription["response"],
      CreateSubscription["error"],
      {
        data: CreateSubscription["request"];
      }
    >;
  } = {},
) {
  const { client: clientOptions = {}, mutation: mutationOptions } =
    options ?? {};

  return useMutation({
    mutationFn: async ({ data }) => {
      const res = await client<
        CreateSubscription["data"],
        CreateSubscription["error"],
        CreateSubscription["request"]
      >({
        data,
        method: "post",
        url: "/subscriptions",
        ...clientOptions,
      });

      return res;
    },
    ...mutationOptions,
  });
}
