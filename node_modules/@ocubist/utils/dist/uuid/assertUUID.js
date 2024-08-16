"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertUUID = exports.AssertUUIDFailedError = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
var validateUUID_1 = require("./validateUUID");
var craftMysticError = (0, error_alchemy_1.useErrorAlchemy)("utils-uuid", "assertUUID").craftMysticError;
/**
 * Custom error for UUID validation failures.
 *
 * @typedef {Object} AssertUUIDFailedError
 * @property {string} name - The name of the error.
 * @property {string} cause - The cause of the error.
 * @property {string} errorCode - The error code associated with the error.
 */
exports.AssertUUIDFailedError = craftMysticError({
    name: "AssertUUIDFailedError",
    cause: "UUID-Validation failed",
    errorCode: "DATA_INTEGRITY_VIOLATION",
});
/**
 * Asserts that a given string is a valid UUID. Throws an error if the validation fails.
 *
 * @param {string} uuid - The UUID string to validate.
 * @throws {AssertUUIDFailedError} If the provided string is not a valid UUID.
 */
var assertUUID = function (uuid) {
    if (!(0, validateUUID_1.validateUUID)(uuid)) {
        throw new exports.AssertUUIDFailedError({
            message: "The provided value is not a valid UUID: ".concat(uuid),
            payload: { uuid: uuid },
        });
    }
};
exports.assertUUID = assertUUID;
//# sourceMappingURL=assertUUID.js.map