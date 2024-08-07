import { faker } from "@faker-js/faker";

import type { UserResponse } from "../types/UserResponse";

import { createGender } from "./createGender";
import { createOwnerType } from "./createOwnerType";

export function createUserResponse(
  data: NonNullable<Partial<UserResponse>> = {},
): NonNullable<UserResponse> {
  faker.seed([100]);

  return {
    ...{
      createdAt: faker.date.anytime().toISOString(),
      deletedAt: faker.date.anytime().toISOString(),
      email: faker.string.alpha(),
      firstName: faker.string.alpha(),
      gender: createGender(),
      id: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      lastName: faker.string.alpha(),
      middleName: faker.string.alpha(),
      ownerId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      ownerType: createOwnerType(),
      phone: faker.string.alpha(),
      updatedAt: faker.date.anytime().toISOString(),
    },
    ...data,
  };
}
