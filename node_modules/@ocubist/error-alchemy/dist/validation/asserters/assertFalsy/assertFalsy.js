"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertFalsy = exports.AssertFalsyFailedError = void 0;
var useErrorAlchemy_1 = require("../../../crafting/useErrorAlchemy/useErrorAlchemy");
var craftMysticError = (0, useErrorAlchemy_1.useErrorAlchemy)("ErrorAlchemy", "assertFalsy-function").craftMysticError;
exports.AssertFalsyFailedError = craftMysticError({
    name: "AssertFalsyFailedError",
    errorCode: "DATA_INTEGRITY_VIOLATION",
    severity: "critical",
    cause: "value was truthy",
});
/**
 * Asserts that a given value is falsy.
 * @param {T} value - The value to be checked for falsiness.
 * @throws {AssertFalsyFailedError} If the value is truthy.
 */
function assertFalsy(value) {
    if (value) {
        throw new exports.AssertFalsyFailedError({
            message: "Assertion failed. Expected a falsy value.",
            payload: { value: value, type: typeof value },
        });
    }
}
exports.assertFalsy = assertFalsy;
//# sourceMappingURL=assertFalsy.js.map