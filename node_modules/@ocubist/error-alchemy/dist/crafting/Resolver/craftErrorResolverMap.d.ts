import { SynthesizedError } from "../../transmuted-errors/SynthesizedError";
type ErrorMapEntry = [typeof SynthesizedError, (err: SynthesizedError) => void];
/**
 * Crafts a new error resolver map with the given mappings.
 *
 * @param {...ErrorMapEntry[]} mapping - The error map entries.
 * @returns {Map<typeof SynthesizedError, (err: SynthesizedError) => void>} The crafted error resolver map.
 */
export declare const craftErrorResolverMap: (...mapping: ErrorMapEntry[]) => Map<typeof SynthesizedError, (err: SynthesizedError) => void>;
export {};
//# sourceMappingURL=craftErrorResolverMap.d.ts.map