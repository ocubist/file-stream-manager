"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNodeEnvironment = void 0;
/**
 * Checks if the current environment is Node.js.
 *
 * @returns {boolean} True if the current environment is Node.js, otherwise false.
 */
var isNodeEnvironment = function () {
    return typeof process !== "undefined" &&
        process.versions != null &&
        process.versions.node != null;
};
exports.isNodeEnvironment = isNodeEnvironment;
//# sourceMappingURL=isNodeEnvironment.js.map