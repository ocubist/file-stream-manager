"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.ParseFailedError = void 0;
var zod_1 = require("zod");
var useErrorAlchemy_1 = require("../../../crafting/useErrorAlchemy/useErrorAlchemy");
var PropsValidationError_1 = require("../../../utility/PropsValidationError");
var _a = (0, useErrorAlchemy_1.useErrorAlchemy)("ErrorAlchemy", "parse-function"), craftMysticError = _a.craftMysticError, craftErrorTransmuter = _a.craftErrorTransmuter;
exports.ParseFailedError = craftMysticError({
    name: "ParseFailedError",
    errorCode: "VALIDATION_ERROR",
    severity: "unexpected",
});
var parseFailedTransmuter = craftErrorTransmuter(function (err) { return err instanceof zod_1.ZodError; }, function (err) {
    var details = (0, PropsValidationError_1.extractZodErrorValidationDetails)(err);
    return new exports.ParseFailedError({
        message: details.map(function (d) { return d.msg; }).join(" | "),
        payload: {
            validationErrorDetails: details,
        },
        origin: err,
    });
});
/**
 * Synchronously parses a value against a Zod schema.
 *
 * @template T
 * @param {T} value - The value to parse.
 * @param {ZodSchema<T>} schema - The Zod schema to parse against.
 * @returns {T} The parsed value.
 * @throws {ParseFailedError} If parsing fails.
 */
var parse = function (value, schema) {
    try {
        return schema.parse(value);
    }
    catch (err) {
        throw parseFailedTransmuter.execute(err);
    }
};
exports.parse = parse;
//# sourceMappingURL=parse.js.map