"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
/**
 * Delay function to wait for a specified amount of time.
 * @param ms - The number of milliseconds to wait.
 * @returns A promise that resolves after the specified time.
 */
var delay = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
exports.delay = delay;
//# sourceMappingURL=delay.js.map