import { type LimitedPartnersStatus } from "./LimitedPartnersStatus";

export type LimitedPartnerResponse = {
  /**
   * @type string, uuid
   */
  generalPartnerId: string;
  /**
   * @type string, uuid
   */
  id: string;
  limitedPartnerStatus: LimitedPartnersStatus;
  /**
   * @type string
   */
  name: string;
};
