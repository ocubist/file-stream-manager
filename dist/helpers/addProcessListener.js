"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProcessListeners = void 0;
var runAllStreamCleanupCallbacks_1 = require("./runAllStreamCleanupCallbacks");
/**
 * Adds event listeners for process termination events.
 * @param onExitCB - The callback function to run on process exit.
 */
var addProcessListeners = function () {
    process.once("SIGINT", runAllStreamCleanupCallbacks_1.runAllStreamCleanupCallbacks);
    process.once("SIGTERM", runAllStreamCleanupCallbacks_1.runAllStreamCleanupCallbacks);
    process.once("exit", runAllStreamCleanupCallbacks_1.runAllStreamCleanupCallbacks);
};
exports.addProcessListeners = addProcessListeners;
//# sourceMappingURL=addProcessListener.js.map