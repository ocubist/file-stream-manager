"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.craftErrorTransmuter = void 0;
/**
 * Crafts a new transmuter with the given detector and transmuter functions.
 *
 * @template T
 * @param {DetectorFunction} detectorFunction - The function to detect errors.
 * @param {TransmuterFunction<T>} transmuterFunction - The function to transmute errors.
 * @returns {Transmuter<T>} The crafted transmuter.
 */
var craftErrorTransmuter = function (detectorFunction, transmuterFunction) {
    var newTransmuter = {
        detect: detectorFunction,
        transmute: transmuterFunction,
        execute: function (err) {
            if (this.detect(err)) {
                return this.transmute(err);
            }
            return err;
        },
    };
    return newTransmuter;
};
exports.craftErrorTransmuter = craftErrorTransmuter;
//# sourceMappingURL=craftErrorTransmuter.js.map