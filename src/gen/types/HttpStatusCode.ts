export type HttpStatusCode = {
  /**
   * @type boolean | undefined
   */
  error?: boolean;
  /**
   * @type boolean | undefined
   */
  is1xxInformational?: boolean;
  /**
   * @type boolean | undefined
   */
  is2xxSuccessful?: boolean;
  /**
   * @type boolean | undefined
   */
  is3xxRedirection?: boolean;
  /**
   * @type boolean | undefined
   */
  is4xxClientError?: boolean;
  /**
   * @type boolean | undefined
   */
  is5xxServerError?: boolean;
};
