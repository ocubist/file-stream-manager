"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.craftErrorResolverMap = void 0;
/**
 * Crafts a new error resolver map with the given mappings.
 *
 * @param {...ErrorMapEntry[]} mapping - The error map entries.
 * @returns {Map<typeof SynthesizedError, (err: SynthesizedError) => void>} The crafted error resolver map.
 */
var craftErrorResolverMap = function () {
    var mapping = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mapping[_i] = arguments[_i];
    }
    var errorResolverMap = new Map(mapping);
    return errorResolverMap;
};
exports.craftErrorResolverMap = craftErrorResolverMap;
//# sourceMappingURL=craftErrorResolverMap.js.map