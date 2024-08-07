import { type AssetSource } from "./AssetSource";
import { type AssetStatus } from "./AssetStatus";
import { type AssetType } from "./AssetType";
import { type AssetValuationType } from "./AssetValuationType";
import { type Currency } from "./Currency";

export type UpdateAssetRequest = {
  assetClass?: AssetValuationType;
  assetStrategy?: AssetSource;
  /**
   * @type string | undefined
   */
  closingDate?: string;
  /**
   * @type string | undefined, uuid
   */
  counterPartyId?: string;
  currency?: Currency;
  /**
   * @type string | undefined
   */
  description?: string;
  /**
   * @type string | undefined, uuid
   */
  id?: string;
  /**
   * @type string | undefined
   */
  isin?: string;
  /**
   * @type string | undefined
   */
  logoUrl?: string;
  /**
   * @type string | undefined
   */
  longDescription?: string;
  /**
   * @type number | undefined
   */
  minimumInvestment?: number;
  /**
   * @type string | undefined
   */
  name?: string;
  /**
   * @type string | undefined
   */
  shortName?: string;
  /**
   * @type string | undefined
   */
  smallLogoUrl?: string;
  status?: AssetStatus;
  type?: AssetType;
};
