import z from "zod";
import { MysticError } from "../../transmuted-errors/MysticError";
import { SynthesizedError } from "../../transmuted-errors/SynthesizedError";
/**
 * Zod schema for a detector function that checks if an error matches certain criteria.
 */
export declare const DetectorFunction: z.ZodFunction<z.ZodTuple<[z.ZodUnknown], null>, z.ZodBoolean>;
/**
 * Type for a detector function that checks if an error matches certain criteria.
 *
 * @typedef {Function} DetectorFunction
 * @param {unknown} err - The error to check.
 * @returns {boolean} True if the error matches the criteria, false otherwise.
 */
export type DetectorFunction = (err: unknown) => boolean;
/**
 * Zod schema for a transmuter function that transforms an error into either a SynthesizedError or a MysticError.
 */
export declare const TransmuterFunction: z.ZodFunction<z.ZodTuple<[z.ZodUnknown], null>, z.ZodUnion<[z.ZodType<SynthesizedError, z.ZodTypeDef, SynthesizedError>, z.ZodType<MysticError, z.ZodTypeDef, MysticError>]>>;
/**
 * Type for a transmuter function that transforms an error into either a SynthesizedError or a MysticError.
 *
 * @typedef {Function} TransmuterFunction
 * @template T
 * @param {T} err - The error to transform.
 * @returns {SynthesizedError|MysticError} The transformed error.
 */
export type TransmuterFunction<T = any> = (err: T) => SynthesizedError | MysticError;
/**
 * Zod schema for a transmuter that contains a detector, a transmuter function, and an execute function.
 */
export declare const Transmuter: z.ZodObject<{
    detect: z.ZodFunction<z.ZodTuple<[z.ZodUnknown], null>, z.ZodBoolean>;
    transmute: z.ZodFunction<z.ZodTuple<[z.ZodUnknown], null>, z.ZodUnion<[z.ZodType<SynthesizedError, z.ZodTypeDef, SynthesizedError>, z.ZodType<MysticError, z.ZodTypeDef, MysticError>]>>;
    execute: z.ZodFunction<z.ZodTuple<[z.ZodUnknown], null>, z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    detect: (args_0: unknown) => boolean;
    transmute: (args_0: unknown) => MysticError | SynthesizedError;
    execute: (args_0: unknown) => unknown;
}, {
    detect: (args_0: unknown) => boolean;
    transmute: (args_0: unknown) => MysticError | SynthesizedError;
    execute: (args_0: unknown) => unknown;
}>;
/**
 * Interface for a transmuter that contains a detector, a transmuter function, and an execute function.
 *
 * @typedef {Object} Transmuter
 * @template T
 * @property {DetectorFunction} detect - The function to detect errors.
 * @property {TransmuterFunction<T>} transmute - The function to transmute errors.
 * @property {(err: unknown) => unknown} execute - The function to execute the transmuter.
 */
export interface Transmuter<T = any> {
    detect: DetectorFunction;
    transmute: TransmuterFunction<T>;
    execute: (err: unknown) => MysticError | SynthesizedError | unknown;
}
//# sourceMappingURL=types.d.ts.map