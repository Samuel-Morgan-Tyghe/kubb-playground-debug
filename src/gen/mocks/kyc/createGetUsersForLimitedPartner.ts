import { faker } from "@faker-js/faker";

import type {
  GetUsersForLimitedPartner200,
  GetUsersForLimitedPartnerQueryParams,
  GetUsersForLimitedPartnerQueryResponse,
} from "../../types/kyc/GetUsersForLimitedPartner";
import { createApiResponseUser } from "../createApiResponseUser";

export function createGetUsersForLimitedPartnerQueryParams(): NonNullable<GetUsersForLimitedPartnerQueryParams> {
  faker.seed([100]);

  return { limitedPartnerId: faker.string.alpha() };
}

/**
 * @description OK
 */
export function createGetUsersForLimitedPartner200(): NonNullable<GetUsersForLimitedPartner200> {
  faker.seed([100]);

  return faker.helpers.arrayElements([createApiResponseUser()]) as any;
}

/**
 * @description OK
 */
export function createGetUsersForLimitedPartnerQueryResponse(): NonNullable<GetUsersForLimitedPartnerQueryResponse> {
  faker.seed([100]);

  return faker.helpers.arrayElements([createApiResponseUser()]) as any;
}
