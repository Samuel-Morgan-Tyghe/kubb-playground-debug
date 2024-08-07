import { type Gender } from "./Gender";
import { type OwnerType } from "./OwnerType";

export type CreateUserRequest = {
  /**
   * @type string
   */
  email: string;
  /**
   * @type string
   */
  firstName: string;
  gender: Gender;
  /**
   * @type string
   */
  lastName: string;
  /**
   * @type string
   */
  middleName: string;
  /**
   * @type string, uuid
   */
  ownerId: string;
  ownerType: OwnerType;
  /**
   * @type string
   */
  phone: string;
};
