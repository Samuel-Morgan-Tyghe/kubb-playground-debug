import { faker } from "@faker-js/faker";

import type { UpdateLimitedPartnerRequest } from "../types/UpdateLimitedPartnerRequest";

export function createUpdateLimitedPartnerRequest(
  data: NonNullable<Partial<UpdateLimitedPartnerRequest>> = {},
): NonNullable<UpdateLimitedPartnerRequest> {
  faker.seed([100]);

  return {
    ...{
      advisorId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      createdAt: faker.date.anytime().toISOString(),
      groupId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      id: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      minimumInvestment: faker.number.int(),
      onboardingFlowId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      onfidoApplicantId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      profileId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      status: faker.helpers.arrayElement<any>([
        "CREATED",
        "INVITATION_SENT",
        "INVITATION_REVOKED",
        "COOLING_OFF",
        "ONBOARDING",
        "ACTIVE",
        "LOCKED",
        "UNLOCKED",
        "READ_ONLY",
        "TERMINATED",
        "DELETED",
        "WAITING_FOR_REVIEW",
        "ACCESS_GRANTED",
        "ACCESS_DENIED",
      ]),
      type: faker.helpers.arrayElement<any>([
        "individual",
        "institutional",
        "highNetWorthLimitedPartner",
        "sophisticatedLimitedPartner",
        "corporate",
      ]),
      updatedAt: faker.date.anytime().toISOString(),
      userId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
    },
    ...data,
  };
}
