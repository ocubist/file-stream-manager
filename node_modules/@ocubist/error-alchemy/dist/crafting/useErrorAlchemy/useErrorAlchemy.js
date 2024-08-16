"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useErrorAlchemy = exports.AlchemyCraftErrorProps = void 0;
var types_1 = require("../craft-errors/types");
var TransmutedError_1 = require("../../transmuted-errors/TransmutedError");
var craftErrorTransmuter_1 = require("../Transmuter/craftErrorTransmuter");
var craftErrorSynthesizer_1 = require("../Synthesizer/craftErrorSynthesizer");
var craftMysticError_1 = require("../craft-errors/craftMysticError");
var craftSynthesizedError_1 = require("../craft-errors/craftSynthesizedError");
var craftErrorLogger_1 = require("../Resolver/craftErrorLogger");
var craftErrorResolverMap_1 = require("../Resolver/craftErrorResolverMap");
var craftErrorResolver_1 = require("../Resolver/craftErrorResolver");
/**
 * Zod schema for alchemy craft error properties.
 */
exports.AlchemyCraftErrorProps = types_1.CraftErrorProps.omit({
    context: true,
    module: true,
});
/**
 * Provides functions for crafting errors and transmuters with specified module and context.
 *
 * @param {string} module - The module name to use for crafted errors.
 * @param {string} context - The context to use for crafted errors.
 * @returns {Object} An object containing functions for crafting errors and transmuters.
 */
var useErrorAlchemy = function (module, context) {
    /**
     * Crafts a new transmuter with the given detector and transmuter functions, injecting module and context.
     *
     * @template T
     * @param {DetectorFunction} detectorFunction - The function to detect errors.
     * @param {TransmuterFunction<T>} transmuterFunction - The function to transmute errors.
     * @returns {Transmuter<T>} The crafted transmuter.
     */
    var _craftErrorTransmuter = function (detectorFunction, transmuterFunction) {
        var newTransmuterFunction = function (err) {
            var result = transmuterFunction(err);
            result.context = context;
            result.module = module;
            return result;
        };
        return (0, craftErrorTransmuter_1.craftErrorTransmuter)(detectorFunction, newTransmuterFunction);
    };
    /**
     * Crafts a new error synthesizer with the given middleware chain, injecting module and context.
     *
     * @param {SynthesizerMiddlewareChain} middlewareChain - The middleware chain of transmuters.
     * @returns {Synthesizer} The crafted synthesizer.
     */
    var _craftErrorSynthesizer = function (middlewareChain) {
        var originalSynthesizer = (0, craftErrorSynthesizer_1.craftErrorSynthesizer)(middlewareChain);
        var newSynthesizer = {
            middlewareChain: originalSynthesizer.middlewareChain,
            synthesize: function (err) {
                var result = originalSynthesizer.synthesize(err);
                if (result !== err && result instanceof TransmutedError_1.TransmutedError) {
                    result.module = module;
                    result.context = context;
                }
                return result;
            },
        };
        return newSynthesizer;
    };
    /**
     * Crafts a new mystic error with the given properties, injecting module and context.
     *
     * @param {AlchemyCraftErrorProps} props - The properties of the mystic error.
     * @returns {TransmutedError} The crafted mystic error.
     */
    var _craftMysticError = function (props) {
        var craftProps = __assign(__assign({}, props), { module: module, context: context });
        return (0, craftMysticError_1.craftMysticError)(craftProps);
    };
    /**
     * Crafts a new synthesized error with the given properties, injecting module and context.
     *
     * @param {AlchemyCraftErrorProps} props - The properties of the synthesized error.
     * @returns {TransmutedError} The crafted synthesized error.
     */
    var _craftSynthesizedError = function (props) {
        var craftProps = __assign(__assign({}, props), { module: module, context: context });
        return (0, craftSynthesizedError_1.craftSynthesizedError)(craftProps);
    };
    return {
        /**
         * Crafts a new error synthesizer with the given middleware chain.
         *
         * @param {SynthesizerMiddlewareChain} middlewareChain - The middleware chain of transmuters.
         * @returns {Synthesizer} The crafted synthesizer.
         */
        craftErrorSynthesizer: _craftErrorSynthesizer,
        /**
         * Crafts a new mystic error with the given properties.
         *
         * @param {AlchemyCraftErrorProps} props - The properties of the mystic error.
         * @returns {TransmutedError} The crafted mystic error.
         */
        craftMysticError: _craftMysticError,
        /**
         * Crafts a new synthesized error with the given properties.
         *
         * @param {AlchemyCraftErrorProps} props - The properties of the synthesized error.
         * @returns {TransmutedError} The crafted synthesized error.
         */
        craftSynthesizedError: _craftSynthesizedError,
        /**
         * Crafts a new transmuter with the given detector and transmuter functions.
         *
         * @template T
         * @param {DetectorFunction} detectorFunction - The function to detect errors.
         * @param {TransmuterFunction<T>} transmuterFunction - The function to transmute errors.
         * @returns {Transmuter<T>} The crafted transmuter.
         */
        craftErrorTransmuter: _craftErrorTransmuter,
        /**
         * Crafts a new error logger with the given properties.
         *
         * @param {CraftErrorLoggerProps} props - The properties of the error logger.
         * @returns {(err: unknown) => void} The crafted error logger function.
         */
        craftErrorLogger: craftErrorLogger_1.craftErrorLogger,
        /**
         * Crafts a new error resolver map with the given mappings.
         *
         * @param {...ErrorMapEntry[]} mapping - The error map entries.
         * @returns {Map<typeof SynthesizedError, (err: SynthesizedError) => void>} The crafted error resolver map.
         */
        craftErrorResolverMap: craftErrorResolverMap_1.craftErrorResolverMap,
        /**
         * Crafts a new error resolver with the given properties.
         *
         * @param {CraftErrorResolverProps} props - The properties of the error resolver.
         * @returns {(err: unknown) => void} The crafted error resolver function.
         */
        craftErrorResolver: craftErrorResolver_1.craftErrorResolver,
    };
};
exports.useErrorAlchemy = useErrorAlchemy;
//# sourceMappingURL=useErrorAlchemy.js.map