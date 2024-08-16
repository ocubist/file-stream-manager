"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDefined = exports.AssertDefinedFailedError = void 0;
var useErrorAlchemy_1 = require("../../../crafting/useErrorAlchemy/useErrorAlchemy");
var craftMysticError = (0, useErrorAlchemy_1.useErrorAlchemy)("ErrorAlchemy", "assertDefined-function").craftMysticError;
exports.AssertDefinedFailedError = craftMysticError({
    name: "AssertDefinedFailedError",
    errorCode: "DATA_INTEGRITY_VIOLATION",
    severity: "critical",
    cause: "value was null, undefined or NaN",
});
/**
 * Asserts that a value is defined and not null or NaN.
 *
 * @template T
 * @param {T | null | undefined} value - The value to assert.
 * @throws {AssertDefinedFailedError} If the value is null, undefined, or NaN.
 */
function assertDefined(value) {
    if (value == null || (typeof value === "number" && isNaN(value))) {
        throw new exports.AssertDefinedFailedError({
            message: "Defined-Assertion failed.",
            payload: { value: value, type: typeof value },
        });
    }
}
exports.assertDefined = assertDefined;
//# sourceMappingURL=assertDefined.js.map