import { type Currency } from "./Currency";
import { type DefaultMode } from "./DefaultMode";

export type CreateGeneralPartnerRequest = {
  /**
   * @type string
   */
  borderRadius: string;
  currency: Currency;
  defaultMode: DefaultMode;
  /**
   * @type string
   */
  email: string;
  /**
   * @type string
   */
  footerText: string;
  /**
   * @type boolean
   */
  isThemeToggleVisible: boolean;
  /**
   * @type string
   */
  logoDark: string;
  /**
   * @type string
   */
  logoLight: string;
  /**
   * @type string
   */
  name: string;
  /**
   * @type string
   */
  phone: string;
  /**
   * @type string
   */
  primaryColour: string;
  /**
   * @type string
   */
  privacyPolicy: string;
  /**
   * @type string
   */
  riskWarning: string;
  /**
   * @type string
   */
  smallLogo: string;
  /**
   * @type string
   */
  smallLogoDark: string;
  /**
   * @type string
   */
  smallLogoLight: string;
  /**
   * @type string
   */
  termsAndConditions: string;
};
