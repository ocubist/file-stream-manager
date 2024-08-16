/// <reference types="node" />
import z from "zod";
import { DetectorFunction, Transmuter, TransmuterFunction } from "../Transmuter/types";
import { Synthesizer, SynthesizerMiddlewareChain } from "../Synthesizer/types";
/**
 * Zod schema for alchemy craft error properties.
 */
export declare const AlchemyCraftErrorProps: z.ZodObject<Omit<{
    name: z.ZodString;
    severity: z.ZodOptional<z.ZodEnum<[import("../..").Severity, ...import("../..").Severity[]]>>;
    cause: z.ZodOptional<z.ZodString>;
    module: z.ZodOptional<z.ZodString>;
    context: z.ZodOptional<z.ZodString>;
    errorCode: z.ZodOptional<z.ZodEnum<[import("../..").ErrorCode, ...import("../..").ErrorCode[]]>>;
}, "module" | "context">, "strip", z.ZodTypeAny, {
    name: string;
    severity?: import("../..").Severity | undefined;
    cause?: string | undefined;
    errorCode?: import("../..").ErrorCode | undefined;
}, {
    name: string;
    severity?: import("../..").Severity | undefined;
    cause?: string | undefined;
    errorCode?: import("../..").ErrorCode | undefined;
}>;
export type AlchemyCraftErrorProps = z.infer<typeof AlchemyCraftErrorProps>;
/**
 * Provides functions for crafting errors and transmuters with specified module and context.
 *
 * @param {string} module - The module name to use for crafted errors.
 * @param {string} context - The context to use for crafted errors.
 * @returns {Object} An object containing functions for crafting errors and transmuters.
 */
export declare const useErrorAlchemy: (module: string, context: string) => {
    /**
     * Crafts a new error synthesizer with the given middleware chain.
     *
     * @param {SynthesizerMiddlewareChain} middlewareChain - The middleware chain of transmuters.
     * @returns {Synthesizer} The crafted synthesizer.
     */
    craftErrorSynthesizer: (middlewareChain: SynthesizerMiddlewareChain) => Synthesizer;
    /**
     * Crafts a new mystic error with the given properties.
     *
     * @param {AlchemyCraftErrorProps} props - The properties of the mystic error.
     * @returns {TransmutedError} The crafted mystic error.
     */
    craftMysticError: (props: AlchemyCraftErrorProps) => {
        new (props: {
            message: string;
            origin?: unknown;
            payload?: Record<string, unknown> | undefined;
        }): {
            dynamicClassUuid: string;
            instanceUuid: string;
            name: string;
            severity: import("../..").Severity;
            origin?: unknown;
            cause?: string | undefined;
            payload: Record<string, unknown>;
            module?: string | undefined;
            context?: string | undefined;
            errorCode: import("../..").ErrorCode;
            readonly severityDescription: string;
            readonly simpleGetter: string;
            readonly identifier: string;
            message: string;
            stack?: string | undefined;
        };
        compare(err: unknown): boolean;
        captureStackTrace(targetObject: object, constructorOpt?: Function | undefined): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    /**
     * Crafts a new synthesized error with the given properties.
     *
     * @param {AlchemyCraftErrorProps} props - The properties of the synthesized error.
     * @returns {TransmutedError} The crafted synthesized error.
     */
    craftSynthesizedError: (props: AlchemyCraftErrorProps) => {
        new (props: {
            message: string;
            origin?: unknown;
            payload?: Record<string, unknown> | undefined;
        }): {
            dynamicClassUuid: string;
            instanceUuid: string;
            name: string;
            severity: import("../..").Severity;
            origin?: unknown;
            cause?: string | undefined;
            payload: Record<string, unknown>;
            module?: string | undefined;
            context?: string | undefined;
            errorCode: import("../..").ErrorCode;
            readonly severityDescription: string;
            readonly simpleGetter: string;
            readonly identifier: string;
            message: string;
            stack?: string | undefined;
        };
        compare(err: unknown): boolean;
        captureStackTrace(targetObject: object, constructorOpt?: Function | undefined): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    /**
     * Crafts a new transmuter with the given detector and transmuter functions.
     *
     * @template T
     * @param {DetectorFunction} detectorFunction - The function to detect errors.
     * @param {TransmuterFunction<T>} transmuterFunction - The function to transmute errors.
     * @returns {Transmuter<T>} The crafted transmuter.
     */
    craftErrorTransmuter: <T = any>(detectorFunction: DetectorFunction, transmuterFunction: TransmuterFunction<T>) => Transmuter<T>;
    /**
     * Crafts a new error logger with the given properties.
     *
     * @param {CraftErrorLoggerProps} props - The properties of the error logger.
     * @returns {(err: unknown) => void} The crafted error logger function.
     */
    craftErrorLogger: (props: import("../Resolver/craftErrorLogger").CraftErrorLoggerProps) => (err: unknown) => void;
    /**
     * Crafts a new error resolver map with the given mappings.
     *
     * @param {...ErrorMapEntry[]} mapping - The error map entries.
     * @returns {Map<typeof SynthesizedError, (err: SynthesizedError) => void>} The crafted error resolver map.
     */
    craftErrorResolverMap: (...mapping: [typeof import("../..").SynthesizedError, (err: import("../..").SynthesizedError) => void][]) => Map<typeof import("../..").SynthesizedError, (err: import("../..").SynthesizedError) => void>;
    /**
     * Crafts a new error resolver with the given properties.
     *
     * @param {CraftErrorResolverProps} props - The properties of the error resolver.
     * @returns {(err: unknown) => void} The crafted error resolver function.
     */
    craftErrorResolver: (props: import("../Resolver/craftErrorResolver").CraftErrorResolverProps) => (err: unknown) => void;
};
//# sourceMappingURL=useErrorAlchemy.d.ts.map