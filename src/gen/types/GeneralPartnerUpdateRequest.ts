import { type Currency } from "./Currency";
import { type DefaultMode } from "./DefaultMode";

export type GeneralPartnerUpdateRequest = {
  /**
   * @type string | undefined
   */
  borderRadius?: string;
  currency?: Currency;
  defaultMode?: DefaultMode;
  /**
   * @type string | undefined
   */
  email?: string;
  /**
   * @type string | undefined
   */
  footerText?: string;
  /**
   * @type boolean | undefined
   */
  isThemeToggleVisible?: boolean;
  /**
   * @type string | undefined
   */
  logoDark?: string;
  /**
   * @type string | undefined
   */
  logoLight?: string;
  /**
   * @type string | undefined
   */
  name?: string;
  /**
   * @type string | undefined
   */
  phone?: string;
  /**
   * @type string | undefined
   */
  primaryColour?: string;
  /**
   * @type string | undefined
   */
  privacyPolicy?: string;
  /**
   * @type string | undefined
   */
  riskWarning?: string;
  /**
   * @type string | undefined
   */
  smallLogo?: string;
  /**
   * @type string | undefined
   */
  smallLogoDark?: string;
  /**
   * @type string | undefined
   */
  smallLogoLight?: string;
  /**
   * @type string | undefined
   */
  termsAndConditions?: string;
};
