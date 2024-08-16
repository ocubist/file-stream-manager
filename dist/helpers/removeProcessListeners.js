"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProcessListeners = void 0;
var runAllStreamCleanupCallbacks_1 = require("./runAllStreamCleanupCallbacks");
/**
 * Removes event listeners for process termination events.
 * @param onExitCB - The callback function to remove.
 */
var removeProcessListeners = function () {
    process.removeListener("SIGINT", runAllStreamCleanupCallbacks_1.runAllStreamCleanupCallbacks);
    process.removeListener("SIGTERM", runAllStreamCleanupCallbacks_1.runAllStreamCleanupCallbacks);
    process.removeListener("exit", runAllStreamCleanupCallbacks_1.runAllStreamCleanupCallbacks);
};
exports.removeProcessListeners = removeProcessListeners;
//# sourceMappingURL=removeProcessListeners.js.map