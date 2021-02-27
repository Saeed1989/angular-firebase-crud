/**
 * Common Util
 *
 * @version  0.1.2
 * @url
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

/**
 * check if the object is empty
 * @param target object to be checked
 */
export function isEmpty(target: any): boolean {
  if (target === undefined || target === null || target === '') {
    return true;
  }
  return false;
}
