export enum UpdateBankAccountRequestType {
  "DOMESTIC" = "DOMESTIC",
  "INTERNATIONAL" = "INTERNATIONAL",
}
export enum UpdateBankAccountRequestAccountType {
  "business" = "business",
  "individual" = "individual",
}
export type UpdateBankAccountRequest = {
  /**
   * @type string | undefined
   */
  accountHolder?: string;
  /**
   * @type string | undefined
   */
  accountNumber?: string;
  /**
   * @type string | undefined
   */
  accountType?: UpdateBankAccountRequestAccountType;
  /**
   * @type string | undefined, uuid
   */
  bankId?: string;
  /**
   * @type string | undefined
   */
  iban?: string;
  /**
   * @type string | undefined, uuid
   */
  id?: string;
  /**
   * @type string | undefined, uuid
   */
  limitedPartnerId?: string;
  /**
   * @type string | undefined
   */
  sortCode?: string;
  /**
   * @type string | undefined
   */
  swiftCode?: string;
  /**
   * @type string | undefined
   */
  type?: UpdateBankAccountRequestType;
};
