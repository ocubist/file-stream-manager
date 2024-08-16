"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNotEmpty = exports.AssertNotEmptyMaxSmallerThanMinError = exports.AssertNotEmptyFailedError = void 0;
var useErrorAlchemy_1 = require("../../../crafting/useErrorAlchemy/useErrorAlchemy");
var craftMysticError = (0, useErrorAlchemy_1.useErrorAlchemy)("errorAlchemy", "assertNotEmpty").craftMysticError;
exports.AssertNotEmptyFailedError = craftMysticError({
    name: "AssertNotEmptyFailedError",
    severity: "critical",
    errorCode: "DATA_INTEGRITY_VIOLATION",
    cause: "The value was found to be empty, but a non-empty value was expected.",
});
exports.AssertNotEmptyMaxSmallerThanMinError = craftMysticError({
    name: "AssertNotEmptyMaxSmallerThanMinError",
    severity: "critical",
    errorCode: "RUNTIME_ERROR",
    cause: "The max-length must be at least as big as the min-value",
});
/**
 * Asserts that a given value is not empty.
 * @param {T} value - The value to be checked for non-emptiness.
 * @param {number} [min=1] - The minimum acceptable length or size.
 * @param {number} [max] - The maximum acceptable length or size.
 * @throws {AssertNotEmptyFailedError} If the value is empty.
 * @throws {AssertNotEmptyMaxSmallerThanMinError} If the max length is smaller than the min length.
 */
function assertNotEmpty(value, min, max) {
    if (min === void 0) { min = 1; }
    if (max && max < min) {
        throw new exports.AssertNotEmptyMaxSmallerThanMinError({
            message: "Properties invalid: Max '".concat(max, "' was smaller than min '").concat(min, "'"),
            payload: { min: min, max: max, value: value, type: typeof value },
        });
    }
    var length = 0;
    if (value === null || value === undefined) {
        throw new exports.AssertNotEmptyFailedError({
            message: "Value was either null or undefined.",
            payload: { type: typeof value, actualValue: value },
        });
    }
    else if (typeof value === "string" ||
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
    if (length < min) {
        throw new exports.AssertNotEmptyFailedError({
            message: "Value-length '".concat(length, "' was below the given min-value of '").concat(min, "'."),
            payload: { type: typeof value, actualValue: value, min: min, max: max },
        });
    }
    else if (max && length > max) {
        throw new exports.AssertNotEmptyFailedError({
            message: "Value-length '".concat(length, "' was above the given max-value of '").concat(max, "'."),
            payload: { type: typeof value, actualValue: value, min: min, max: max },
        });
    }
}
exports.assertNotEmpty = assertNotEmpty;
//# sourceMappingURL=assertNotEmpty.js.map