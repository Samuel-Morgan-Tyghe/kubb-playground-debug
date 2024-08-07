import { type Gender } from "./Gender";
import { type OwnerType } from "./OwnerType";

export type UpdateUserRequest = {
  /**
   * @type string | undefined
   */
  email?: string;
  /**
   * @type string | undefined
   */
  firstName?: string;
  gender?: Gender;
  /**
   * @type string | undefined
   */
  lastName?: string;
  /**
   * @type string | undefined
   */
  middleName?: string;
  /**
   * @type string | undefined, uuid
   */
  ownerId?: string;
  ownerType?: OwnerType;
  /**
   * @type string | undefined
   */
  phone?: string;
};
