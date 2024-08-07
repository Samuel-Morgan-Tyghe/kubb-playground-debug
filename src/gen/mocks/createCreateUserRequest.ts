import { faker } from "@faker-js/faker";

import type { CreateUserRequest } from "../types/CreateUserRequest";

import { createGender } from "./createGender";
import { createOwnerType } from "./createOwnerType";

export function createCreateUserRequest(
  data: NonNullable<Partial<CreateUserRequest>> = {},
): NonNullable<CreateUserRequest> {
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
