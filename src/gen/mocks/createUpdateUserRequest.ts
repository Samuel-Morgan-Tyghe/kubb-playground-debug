import { faker } from "@faker-js/faker";

import type { UpdateUserRequest } from "../types/UpdateUserRequest";

import { createGender } from "./createGender";
import { createOwnerType } from "./createOwnerType";

export function createUpdateUserRequest(
  data: NonNullable<Partial<UpdateUserRequest>> = {},
): NonNullable<UpdateUserRequest> {
  faker.seed([100]);

  return {
    ...{
      email: faker.string.alpha(),
      firstName: faker.string.alpha(),
      gender: createGender(),
      lastName: faker.string.alpha(),
      middleName: faker.string.alpha(),
      ownerId: faker.helpers.arrayElement<any>([
        faker.string.alpha(),
        faker.string.uuid(),
      ]),
      ownerType: createOwnerType(),
      phone: faker.string.alpha(),
    },
    ...data,
  };
}
