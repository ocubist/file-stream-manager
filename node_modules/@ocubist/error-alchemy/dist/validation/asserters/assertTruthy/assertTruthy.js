"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertTruthy = exports.AssertTruthyFailedError = void 0;
var useErrorAlchemy_1 = require("../../../crafting/useErrorAlchemy/useErrorAlchemy");
var craftMysticError = (0, useErrorAlchemy_1.useErrorAlchemy)("ErrorAlchemy", "assertTruthy-function").craftMysticError;
exports.AssertTruthyFailedError = craftMysticError({
    name: "AssertTruthyFailedError",
    errorCode: "DATA_INTEGRITY_VIOLATION",
    severity: "critical",
    cause: "value was falsy",
});
/**
 * Asserts that a given value is truthy.
 * @param {T} value - The value to be checked for truthiness.
 * @throws {AssertTruthyFailedError} If the value is falsy.
 */
function assertTruthy(value) {
    if (!value) {
        throw new exports.AssertTruthyFailedError({
            message: "Assertion failed. Expected a truthy value.",
            payload: { value: value, type: typeof value },
        });
    }
}
exports.assertTruthy = assertTruthy;
//# sourceMappingURL=assertTruthy.js.map