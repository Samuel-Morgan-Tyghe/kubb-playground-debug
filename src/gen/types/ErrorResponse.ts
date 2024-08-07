import { type HttpStatusCode } from "./HttpStatusCode";

export type ErrorResponse = {
  /**
   * @type integer | undefined, int64
   */
  errorCode?: number;
  /**
   * @type string | undefined
   */
  message?: string;
  statusCode?: HttpStatusCode;
};
