"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.craftErrorResolver = void 0;
var SynthesizedError_1 = require("../../transmuted-errors/SynthesizedError");
/**
 * Crafts a new error resolver with the given properties.
 *
 * @param {CraftErrorResolverProps} props - The properties of the error resolver.
 * @returns {(err: unknown) => void} The crafted error resolver function.
 */
var craftErrorResolver = function (props) {
    var defaultResolver = props.defaultResolver, errorResolverMap = props.errorResolverMap, logger = props.logger, synthesizer = props.synthesizer;
    return function (err) {
        var processedError = synthesizer ? synthesizer.synthesize(err) : err;
        if (logger)
            logger(processedError);
        // Check if the error is an instance of SynthesizedError
        if (processedError instanceof SynthesizedError_1.SynthesizedError) {
            // Find the resolver function for this specific type of SynthesizedError
            var resolver = errorResolverMap === null || errorResolverMap === void 0 ? void 0 : errorResolverMap.get(processedError.constructor);
            // If a resolver function is found, use it
            if (resolver) {
                resolver(processedError);
            }
            else if (defaultResolver) {
                // If no specific resolver is found, use the default resolver
                defaultResolver(processedError);
            }
        }
        else if (defaultResolver) {
            // If the error is not a SynthesizedError, use the default resolver
            defaultResolver(processedError);
        }
    };
};
exports.craftErrorResolver = craftErrorResolver;
//# sourceMappingURL=craftErrorResolver.js.map