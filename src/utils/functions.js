export function stringHasOnlyNumbers(string) {
  /**
   * Only digits and dot "." are allowed
   * @const
   * @type {RegExp}
   */
  const REGEX = /^[\d.]*$/;

  return REGEX.test(string);
}