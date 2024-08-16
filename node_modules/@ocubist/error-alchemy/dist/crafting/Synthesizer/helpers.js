"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeSynthesizerMiddlewareOneByOne = exports.flattenMiddlewareChain = void 0;
var SynthesizedError_1 = require("../../transmuted-errors/SynthesizedError");
var types_1 = require("./types");
/**
 * Flattens a nested middleware chain into a single array of transmuters.
 *
 * @param {SynthesizerMiddlewareChain} middlewareChain - The nested middleware chain to flatten.
 * @returns {Transmuter[]} The flattened array of transmuters.
 */
function flattenMiddlewareChain(middlewareChain) {
    var result = [];
    middlewareChain.forEach(function (mw) {
        if (Array.isArray(mw)) {
            result.push.apply(result, flattenMiddlewareChain(mw));
        }
        else if (types_1.Synthesizer.safeParse(mw).success) {
            result.push.apply(result, mw.middlewareChain);
        }
        else {
            result.push(mw);
        }
    });
    return result;
}
exports.flattenMiddlewareChain = flattenMiddlewareChain;
/**
 * Executes a series of transmuters on an error, one by one, until an error is transmuted into a SynthesizedError.
 *
 * @param {unknown} err - The error to process.
 * @param {Transmuter[]} transmuters - The array of transmuters to execute.
 * @returns {unknown} The final processed error.
 */
var executeSynthesizerMiddlewareOneByOne = function (err, transmuters) {
    var result = err;
    for (var _i = 0, transmuters_1 = transmuters; _i < transmuters_1.length; _i++) {
        var mw = transmuters_1[_i];
        result = mw.execute(result);
        if (result instanceof SynthesizedError_1.SynthesizedError)
            break;
    }
    return result;
};
exports.executeSynthesizerMiddlewareOneByOne = executeSynthesizerMiddlewareOneByOne;
//# sourceMappingURL=helpers.js.map