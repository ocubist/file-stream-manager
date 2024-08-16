"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotNodeEnvironmentError = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
/**
 * Error thrown when a function is used outside a Node.js environment.
 *
 * @typedef {Object} NotNodeEnvironmentError
 * @property {string} name - The name of the error.
 * @property {string} cause - The cause of the error.
 * @property {string} context - The context where the error occurred.
 * @property {string} module - The module where the error originated.
 * @property {string} errorCode - The error code associated with the error.
 */
exports.NotNodeEnvironmentError = (0, error_alchemy_1.craftSynthesizedError)({
    name: "NotNodeEnvironmentError",
    cause: "This function is made for node-environments",
    context: "nodeDetector",
    module: "utils",
    errorCode: "NPM_LIBRARY_USAGE_ERROR",
});
//# sourceMappingURL=errors.js.map