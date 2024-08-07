import { type Gender } from "./Gender";
import { type OwnerType } from "./OwnerType";

export type UserResponse = {
  /**
   * @type string, date-time
   */
  createdAt: string;
  /**
   * @type string | undefined, date-time
   */
  deletedAt?: string;
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
   * @type string, uuid
   */
  id: string;
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
  /**
   * @type string, date-time
   */
  updatedAt: string;
};
