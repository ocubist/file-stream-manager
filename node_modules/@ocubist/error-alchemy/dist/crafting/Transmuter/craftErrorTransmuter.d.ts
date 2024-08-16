import { DetectorFunction, Transmuter, TransmuterFunction } from "./types";
/**
 * Crafts a new transmuter with the given detector and transmuter functions.
 *
 * @template T
 * @param {DetectorFunction} detectorFunction - The function to detect errors.
 * @param {TransmuterFunction<T>} transmuterFunction - The function to transmute errors.
 * @returns {Transmuter<T>} The crafted transmuter.
 */
export declare const craftErrorTransmuter: <T = any>(detectorFunction: DetectorFunction, transmuterFunction: TransmuterFunction<T>) => Transmuter<T>;
//# sourceMappingURL=craftErrorTransmuter.d.ts.map