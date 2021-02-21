/**
 * Common Util
 *
 * @version  0.1.1
 * @url 
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

export function isEmpty(target: any) {
    if (target === undefined || target === null || target === '') {
        return true;
    }
    return false;
}
