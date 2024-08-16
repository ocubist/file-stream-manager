"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isErrorCode = void 0;
var types_1 = require("./types");
/**
 * Checks if a given string is a valid error code.
 *
 * @param {string} errorCode - The error code to check.
 * @returns {boolean} True if the error code is valid, false otherwise.
 */
var isErrorCode = function (errorCode) {
    return types_1.ErrorCode.safeParse(errorCode).success;
};
exports.isErrorCode = isErrorCode;
//# sourceMappingURL=isErrorCode.js.map