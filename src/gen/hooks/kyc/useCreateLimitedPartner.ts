import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import client from "@configs/kubb/customClientQuery";

import type {
  CreateLimitedPartnerMutationRequest,
  CreateLimitedPartnerMutationResponse,
} from "../../types/kyc/CreateLimitedPartner";

type CreateLimitedPartnerClient = typeof client<
  CreateLimitedPartnerMutationResponse,
  never,
  CreateLimitedPartnerMutationRequest
>;

type CreateLimitedPartner = {
  client: {
    parameters: Partial<Parameters<CreateLimitedPartnerClient>[0]>;
    return: Awaited<ReturnType<CreateLimitedPartnerClient>>;
  };
  data: CreateLimitedPartnerMutationResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: never;
  request: CreateLimitedPartnerMutationRequest;
  response: Awaited<ReturnType<CreateLimitedPartnerClient>>;
};

/**
 * @summary Create a limited partner
 * @link /limited-partners
 */
export function useCreateLimitedPartner(
  options: {
    client?: CreateLimitedPartner["client"]["parameters"];
    mutation?: UseMutationOptions<
      CreateLimitedPartner["response"],
      CreateLimitedPartner["error"],
      {
        data: CreateLimitedPartner["request"];
      }
    >;
  } = {},
) {
  const { client: clientOptions = {}, mutation: mutationOptions } =
    options ?? {};

  return useMutation({
    mutationFn: async ({ data }) => {
      const res = await client<
        CreateLimitedPartner["data"],
        CreateLimitedPartner["error"],
        CreateLimitedPartner["request"]
      >({
        data,
        method: "post",
        url: "/limited-partners",
        ...clientOptions,
      });

      return res;
    },
    ...mutationOptions,
  });
}
