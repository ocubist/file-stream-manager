"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.AssertFailedError = void 0;
var zod_1 = require("zod");
var useErrorAlchemy_1 = require("../../../crafting/useErrorAlchemy/useErrorAlchemy");
var PropsValidationError_1 = require("../../../utility/PropsValidationError");
var _a = (0, useErrorAlchemy_1.useErrorAlchemy)("ErrorAlchemy", "assert-function"), craftMysticError = _a.craftMysticError, craftErrorTransmuter = _a.craftErrorTransmuter;
exports.AssertFailedError = craftMysticError({
    name: "AssertFailedError",
    errorCode: "DATA_INTEGRITY_VIOLATION",
    severity: "critical",
    cause: "Zod validation failed",
});
var assertFailedTransmuter = craftErrorTransmuter(function (err) { return err instanceof zod_1.ZodError; }, function (err) {
    var details = (0, PropsValidationError_1.extractZodErrorValidationDetails)(err);
    return new exports.AssertFailedError({
        message: details.map(function (d) { return d.msg; }).join(" | "),
        payload: {
            validationErrorDetails: details,
        },
        origin: err,
    });
});
/**
 * Asserts that a value matches a given Zod schema.
 *
 * @template T
 * @param {unknown} value - The value to assert.
 * @param {ZodSchema<T>} [schema] - The Zod schema to validate against.
 * @throws {AssertFailedError} If the assertion fails.
 */
function assert(value, schema) {
    if (schema !== undefined) {
        try {
            schema.parse(value);
        }
        catch (err) {
            throw assertFailedTransmuter.execute(err);
        }
    }
}
exports.assert = assert;
//# sourceMappingURL=assert.js.map