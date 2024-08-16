"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isServer = void 0;
var errors_1 = require("./errors");
var isNodeEnvironment_1 = require("./isNodeEnvironment");
/**
 * Checks if the current environment is a server (Node.js without window object).
 * Logs an error if the function is called outside of a Node.js environment.
 *
 * @returns {boolean} True if the current environment is a server, otherwise false.
 */
var isServer = function () {
    if (!(0, isNodeEnvironment_1.isNodeEnvironment)()) {
        console.error(new errors_1.NotNodeEnvironmentError({
            message: "This function is made for a node-environment. Unexpected behavior might occur.",
        }));
    }
    return typeof window === "undefined";
};
exports.isServer = isServer;
//# sourceMappingURL=isServer.js.map