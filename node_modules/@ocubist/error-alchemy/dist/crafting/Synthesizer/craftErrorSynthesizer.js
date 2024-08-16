"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.craftErrorSynthesizer = void 0;
var helpers_1 = require("./helpers");
/**
 * Crafts a new error synthesizer with the given middleware chain.
 *
 * @param {SynthesizerMiddlewareChain} middlewareChain - The middleware chain of transmuters.
 * @returns {Synthesizer} The crafted synthesizer.
 */
var craftErrorSynthesizer = function (middlewareChain) {
    var newSynthesizer = {
        middlewareChain: (0, helpers_1.flattenMiddlewareChain)(middlewareChain),
        synthesize: function (err) {
            return (0, helpers_1.executeSynthesizerMiddlewareOneByOne)(err, this.middlewareChain);
        },
    };
    return newSynthesizer;
};
exports.craftErrorSynthesizer = craftErrorSynthesizer;
//# sourceMappingURL=craftErrorSynthesizer.js.map