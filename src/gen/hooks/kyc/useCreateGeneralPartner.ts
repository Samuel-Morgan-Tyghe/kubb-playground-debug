import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import client from "@configs/kubb/customClientQuery";

import type {
  CreateGeneralPartnerMutationRequest,
  CreateGeneralPartnerMutationResponse,
} from "../../types/kyc/CreateGeneralPartner";

type CreateGeneralPartnerClient = typeof client<
  CreateGeneralPartnerMutationResponse,
  never,
  CreateGeneralPartnerMutationRequest
>;

type CreateGeneralPartner = {
  client: {
    parameters: Partial<Parameters<CreateGeneralPartnerClient>[0]>;
    return: Awaited<ReturnType<CreateGeneralPartnerClient>>;
  };
  data: CreateGeneralPartnerMutationResponse;
  error: never;
  headerParams: never;
  pathParams: never;
  queryParams: never;
  request: CreateGeneralPartnerMutationRequest;
  response: Awaited<ReturnType<CreateGeneralPartnerClient>>;
};

/**
 * @summary Create new general-partner
 * @link /general-partners
 */
export function useCreateGeneralPartner(
  options: {
    client?: CreateGeneralPartner["client"]["parameters"];
    mutation?: UseMutationOptions<
      CreateGeneralPartner["response"],
      CreateGeneralPartner["error"],
      {
        data: CreateGeneralPartner["request"];
      }
    >;
  } = {},
) {
  const { client: clientOptions = {}, mutation: mutationOptions } =
    options ?? {};

  return useMutation({
    mutationFn: async ({ data }) => {
      const res = await client<
        CreateGeneralPartner["data"],
        CreateGeneralPartner["error"],
        CreateGeneralPartner["request"]
      >({
        data,
        method: "post",
        url: "/general-partners",
        ...clientOptions,
      });

      return res;
    },
    ...mutationOptions,
  });
}
