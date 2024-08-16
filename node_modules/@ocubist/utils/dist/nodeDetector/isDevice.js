"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDevice = void 0;
var errors_1 = require("./errors");
var isNodeEnvironment_1 = require("./isNodeEnvironment");
/**
 * Checks if the current environment is a device (browser).
 * Logs an error if the function is called outside of a Node.js environment.
 *
 * @returns {boolean} True if the current environment is a device, otherwise false.
 */
var isDevice = function () {
    if (!(0, isNodeEnvironment_1.isNodeEnvironment)()) {
        console.error(new errors_1.NotNodeEnvironmentError({
            message: "This function is made for a node-environment. Unexpected behavior might occur.",
        }));
    }
    return typeof window !== "undefined";
};
exports.isDevice = isDevice;
//# sourceMappingURL=isDevice.js.map