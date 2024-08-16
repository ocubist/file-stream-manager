"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDevelopment = void 0;
var errors_1 = require("./errors");
var isNodeEnvironment_1 = require("./isNodeEnvironment");
/**
 * Checks if the current environment is a Node.js development environment.
 * Logs an error if the function is called outside of a Node.js environment.
 *
 * @returns {boolean} True if the current environment is development, otherwise false.
 */
var isDevelopment = function () {
    if (!(0, isNodeEnvironment_1.isNodeEnvironment)()) {
        console.error(new errors_1.NotNodeEnvironmentError({
            message: "This function is made for a node-environment. Unexpected behavior might occur.",
        }));
        return false;
    }
    return process.env.NODE_ENV === "development";
};
exports.isDevelopment = isDevelopment;
//# sourceMappingURL=isDevelopment.js.map