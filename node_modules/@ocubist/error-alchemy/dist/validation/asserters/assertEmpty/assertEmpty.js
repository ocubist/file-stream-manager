"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertEmpty = exports.AssertEmptyFailedError = void 0;
var useErrorAlchemy_1 = require("../../../crafting/useErrorAlchemy/useErrorAlchemy");
var craftMysticError = (0, useErrorAlchemy_1.useErrorAlchemy)("errorAlchemy", "assertEmpty").craftMysticError;
exports.AssertEmptyFailedError = craftMysticError({
    name: "AssertEmptyFailedError",
    severity: "critical",
    errorCode: "DATA_INTEGRITY_VIOLATION",
    cause: "The value was expected to be empty, but a non-empty value was found.",
});
/**
 * Asserts that a given value is empty.
 * @param {T} value - The value to be checked for emptiness.
 * @throws {AssertEmptyFailedError} If the value is not empty.
 */
function assertEmpty(value) {
    var length = 0;
    if (value !== null && value !== undefined) {
        if (typeof value === "string" ||
            Array.isArray(value) ||
            ArrayBuffer.isView(value)) {
            length = value.length;
        }
        else if (typeof value === "object" &&
            (value instanceof Set || value instanceof Map)) {
            length = value.size;
        }
        else if (typeof value === "object" && Buffer.isBuffer(value)) {
            length = value.length;
        }
        else if (typeof value === "object") {
            length = Object.keys(value).length;
        }
    }
    if (length > 0) {
        throw new exports.AssertEmptyFailedError({
            message: "Expected value to be empty, but found with length/size '".concat(length, "'."),
            payload: { type: typeof value, actualValue: value, length: length },
        });
    }
}
exports.assertEmpty = assertEmpty;
//# sourceMappingURL=assertEmpty.js.map