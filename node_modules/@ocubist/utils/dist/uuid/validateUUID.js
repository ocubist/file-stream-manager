"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUUID = void 0;
var uuid_1 = require("uuid");
/**
 * Validates a given UUID string.
 *
 * @param {string} uuid - The UUID string to validate.
 * @returns {boolean} True if the UUID is valid, otherwise false.
 */
var validateUUID = function (uuid) {
    return (0, uuid_1.validate)(uuid);
};
exports.validateUUID = validateUUID;
//# sourceMappingURL=validateUUID.js.map