/// <reference types="node" />
import { ZodSchema } from "zod";
declare const craftMysticError: (props: {
    name: string;
    severity?: import("../../..").Severity | undefined;
    cause?: string | undefined;
    errorCode?: import("../../..").ErrorCode | undefined;
}) => {
    new (props: {
        message: string;
        origin?: unknown;
        payload?: Record<string, unknown> | undefined;
    }): {
        dynamicClassUuid: string;
        instanceUuid: string;
        name: string;
        severity: import("../../..").Severity;
        origin?: unknown;
        cause?: string | undefined;
        payload: Record<string, unknown>;
        module?: string | undefined;
        context?: string | undefined;
        errorCode: import("../../..").ErrorCode;
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
 * Type for ParseFailedError.
 */
export type ParseFailedError = InstanceType<ReturnType<typeof craftMysticError>>;
export declare const ParseFailedError: {
    new (props: {
        message: string;
        origin?: unknown;
        payload?: Record<string, unknown> | undefined;
    }): {
        dynamicClassUuid: string;
        instanceUuid: string;
        name: string;
        severity: import("../../..").Severity;
        origin?: unknown;
        cause?: string | undefined;
        payload: Record<string, unknown>;
        module?: string | undefined;
        context?: string | undefined;
        errorCode: import("../../..").ErrorCode;
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
 * Synchronously parses a value against a Zod schema.
 *
 * @template T
 * @param {T} value - The value to parse.
 * @param {ZodSchema<T>} schema - The Zod schema to parse against.
 * @returns {T} The parsed value.
 * @throws {ParseFailedError} If parsing fails.
 */
export declare const parse: <T>(value: T, schema: ZodSchema<T>) => T;
export {};
//# sourceMappingURL=parse.d.ts.map