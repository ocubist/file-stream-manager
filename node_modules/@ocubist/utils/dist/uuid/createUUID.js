"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUUID = void 0;
var uuid_1 = require("uuid");
/**
 * Creates a new UUID (version 4).
 *
 * @param {V4Options} [options] - Optional configuration options for generating the UUID.
 * @returns {string} A new UUID string.
 */
var createUUID = function (options) {
    return (0, uuid_1.v4)(options);
};
exports.createUUID = createUUID;
//# sourceMappingURL=createUUID.js.map