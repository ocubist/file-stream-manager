import { Transmuter } from "../Transmuter/types";
import { SynthesizerMiddlewareChain } from "./types";
/**
 * Flattens a nested middleware chain into a single array of transmuters.
 *
 * @param {SynthesizerMiddlewareChain} middlewareChain - The nested middleware chain to flatten.
 * @returns {Transmuter[]} The flattened array of transmuters.
 */
export declare function flattenMiddlewareChain(middlewareChain: SynthesizerMiddlewareChain): Transmuter<any>[];
/**
 * Executes a series of transmuters on an error, one by one, until an error is transmuted into a SynthesizedError.
 *
 * @param {unknown} err - The error to process.
 * @param {Transmuter[]} transmuters - The array of transmuters to execute.
 * @returns {unknown} The final processed error.
 */
export declare const executeSynthesizerMiddlewareOneByOne: (err: unknown, transmuters: Transmuter[]) => unknown;
//# sourceMappingURL=helpers.d.ts.map