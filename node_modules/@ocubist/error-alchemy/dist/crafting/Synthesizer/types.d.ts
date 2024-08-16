import z from "zod";
import { Transmuter } from "../Transmuter/types";
/**
 * Type for a chain of synthesizer middleware, which can be an array of transmuters or nested middleware chains.
 *
 * @typedef {Array} SynthesizerMiddlewareChain
 */
export type SynthesizerMiddlewareChain = Array<Transmuter | Synthesizer | SynthesizerMiddlewareChain>;
/**
 * Zod schema for a synthesizer that contains a middleware chain and a synthesize function.
 */
export declare const Synthesizer: z.ZodLazy<z.ZodObject<{
    middlewareChain: z.ZodArray<z.ZodObject<{
        detect: z.ZodFunction<z.ZodTuple<[z.ZodUnknown], null>, z.ZodBoolean>;
        transmute: z.ZodFunction<z.ZodTuple<[z.ZodUnknown], null>, z.ZodUnion<[z.ZodType<import("../..").SynthesizedError, z.ZodTypeDef, import("../..").SynthesizedError>, z.ZodType<import("../..").MysticError, z.ZodTypeDef, import("../..").MysticError>]>>;
        execute: z.ZodFunction<z.ZodTuple<[z.ZodUnknown], null>, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        detect: (args_0: unknown) => boolean;
        transmute: (args_0: unknown) => import("../..").MysticError | import("../..").SynthesizedError;
        execute: (args_0: unknown) => unknown;
    }, {
        detect: (args_0: unknown) => boolean;
        transmute: (args_0: unknown) => import("../..").MysticError | import("../..").SynthesizedError;
        execute: (args_0: unknown) => unknown;
    }>, "many">;
    synthesize: z.ZodFunction<z.ZodTuple<[z.ZodUnknown], null>, z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    middlewareChain: {
        detect: (args_0: unknown) => boolean;
        transmute: (args_0: unknown) => import("../..").MysticError | import("../..").SynthesizedError;
        execute: (args_0: unknown) => unknown;
    }[];
    synthesize: (args_0: unknown) => unknown;
}, {
    middlewareChain: {
        detect: (args_0: unknown) => boolean;
        transmute: (args_0: unknown) => import("../..").MysticError | import("../..").SynthesizedError;
        execute: (args_0: unknown) => unknown;
    }[];
    synthesize: (args_0: unknown) => unknown;
}>>;
/**
 * Interface for a synthesizer that contains a middleware chain and a synthesize function.
 *
 * @typedef {Object} Synthesizer
 * @property {Transmuter[]} middlewareChain - The middleware chain of transmuters.
 * @property {Function} synthesize - The function to synthesize errors.
 */
export interface Synthesizer {
    middlewareChain: Transmuter[];
    synthesize: (err: unknown) => unknown;
}
//# sourceMappingURL=types.d.ts.map