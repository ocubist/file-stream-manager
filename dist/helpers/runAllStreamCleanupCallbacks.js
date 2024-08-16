"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAllStreamCleanupCallbacks = void 0;
var useFileStreamManagerSingleton_1 = require("../config/useFileStreamManagerSingleton");
var getAllFileStreamSingletonKeys_1 = require("../helpers/getAllFileStreamSingletonKeys");
var getSingleton = (0, useFileStreamManagerSingleton_1.useFileStreamManagerSingleton)().getSingleton;
/**
 * Runs the cleanup callback for all open file streams.
 */
var runAllStreamCleanupCallbacks = function () {
    var keys = (0, getAllFileStreamSingletonKeys_1.getAllFileStreamSingletonKeys)();
    keys.forEach(function (key) {
        var onExitCB = getSingleton(key).onExitCB;
        onExitCB();
    });
};
exports.runAllStreamCleanupCallbacks = runAllStreamCleanupCallbacks;
//# sourceMappingURL=runAllStreamCleanupCallbacks.js.map