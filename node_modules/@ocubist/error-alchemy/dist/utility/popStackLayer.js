"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.popTranceStack = void 0;
/**
 * Modifies the stack trace of an error by removing a specified number of stack frames.
 *
 * @param {Error} err - The error whose stack trace should be modified.
 * @param {number} amount - The number of stack frames to remove.
 */
var popTranceStack = function (err, amount) {
    if (!err.stack)
        return;
    var _a = err.stack.split("\n"), firstLine = _a[0], rest = _a.slice(1);
    if (rest.length <= amount) {
        err.stack = firstLine;
    }
    else {
        err.stack = __spreadArray([firstLine], rest.slice(amount), true).join("\n");
    }
};
exports.popTranceStack = popTranceStack;
//# sourceMappingURL=popStackLayer.js.map