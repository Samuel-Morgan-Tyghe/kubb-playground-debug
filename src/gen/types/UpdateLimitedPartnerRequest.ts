export enum UpdateLimitedPartnerRequestType {
  "corporate" = "corporate",
  "highNetWorthLimitedPartner" = "highNetWorthLimitedPartner",
  "individual" = "individual",
  "institutional" = "institutional",
  "sophisticatedLimitedPartner" = "sophisticatedLimitedPartner",
}
export enum UpdateLimitedPartnerRequestStatus {
  "ACCESS_DENIED" = "ACCESS_DENIED",
  "ACCESS_GRANTED" = "ACCESS_GRANTED",
  "ACTIVE" = "ACTIVE",
  "COOLING_OFF" = "COOLING_OFF",
  "CREATED" = "CREATED",
  "DELETED" = "DELETED",
  "INVITATION_REVOKED" = "INVITATION_REVOKED",
  "INVITATION_SENT" = "INVITATION_SENT",
  "LOCKED" = "LOCKED",
  "ONBOARDING" = "ONBOARDING",
  "READ_ONLY" = "READ_ONLY",
  "TERMINATED" = "TERMINATED",
  "UNLOCKED" = "UNLOCKED",
  "WAITING_FOR_REVIEW" = "WAITING_FOR_REVIEW",
}
export type UpdateLimitedPartnerRequest = {
  /**
   * @type string | undefined, uuid
   */
  advisorId?: string;
  /**
   * @type string | undefined, date-time
   */
  createdAt?: string;
  /**
   * @type string | undefined, uuid
   */
  groupId?: string;
  /**
   * @type string | undefined, uuid
   */
  id?: string;
  /**
   * @type integer | undefined, int32
   */
  minimumInvestment?: number;
  /**
   * @type string | undefined, uuid
   */
  onboardingFlowId?: string;
  /**
   * @type string | undefined, uuid
   */
  onfidoApplicantId?: string;
  /**
   * @type string | undefined, uuid
   */
  profileId?: string;
  /**
   * @type string | undefined
   */
  status?: UpdateLimitedPartnerRequestStatus;
  /**
   * @type string | undefined
   */
  type?: UpdateLimitedPartnerRequestType;
  /**
   * @type string | undefined, date-time
   */
  updatedAt?: string;
  /**
   * @type string | undefined, uuid
   */
  userId?: string;
};
