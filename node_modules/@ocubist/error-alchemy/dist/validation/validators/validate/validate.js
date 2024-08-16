"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
/**
 * Synchronously validates a value against a Zod schema.
 *
 * @template T
 * @param {T} value - The value to validate.
 * @param {ZodSchema<T>} schema - The Zod schema to validate against.
 * @returns {boolean} A boolean indicating whether the value is valid.
 */
var validate = function (value, schema) {
    return schema.safeParse(value).success;
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map