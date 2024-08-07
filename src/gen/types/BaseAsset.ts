import { type AssetClass } from "./AssetClass";
import { type AssetStatus } from "./AssetStatus";
import { type AssetStrategy } from "./AssetStrategy";
import { type AssetType } from "./AssetType";
import { type Currency } from "./Currency";

export type BaseAsset = {
  assetClass: AssetClass;
  assetStrategy: AssetStrategy;
  /**
   * @type string
   */
  closingDate: string;
  /**
   * @type string, uuid
   */
  counterPartyId: string;
  currency: Currency;
  /**
   * @type string
   */
  description: string;
  /**
   * @type string, uuid
   */
  id: string;
  /**
   * @type string
   */
  isin: string;
  /**
   * @type string
   */
  logoUrl: string;
  /**
   * @type string
   */
  longDescription: string;
  /**
   * @type number
   */
  minimumInvestment: number;
  /**
   * @type string
   */
  name: string;
  /**
   * @type string
   */
  shortName: string;
  /**
   * @type string
   */
  smallLogoUrl: string;
  status: AssetStatus;
  type: AssetType;
};
