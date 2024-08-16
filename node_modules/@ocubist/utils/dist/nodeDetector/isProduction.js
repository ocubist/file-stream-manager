"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProduction = void 0;
var errors_1 = require("./errors");
var isNodeEnvironment_1 = require("./isNodeEnvironment");
/**
 * Checks if the current environment is a Node.js production environment.
 * Logs an error if the function is called outside of a Node.js environment.
 *
 * @returns {boolean} True if the current environment is production, otherwise false.
 */
var isProduction = function () {
    if (!(0, isNodeEnvironment_1.isNodeEnvironment)()) {
        console.error(new errors_1.NotNodeEnvironmentError({
            message: "This function is made for a node-environment. Unexpected behavior might occur.",
        }));
        return false;
    }
    return process.env.NODE_ENV === "production";
};
exports.isProduction = isProduction;
//# sourceMappingURL=isProduction.js.map