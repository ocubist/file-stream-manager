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
 * Type for AssertFailedError.
 */
export type AssertFailedError = InstanceType<ReturnType<typeof craftMysticError>>;
export declare const AssertFailedError: {
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
 * Asserts that a value matches a given Zod schema.
 *
 * @template T
 * @param {unknown} value - The value to assert.
 * @param {ZodSchema<T>} [schema] - The Zod schema to validate against.
 * @throws {AssertFailedError} If the assertion fails.
 */
export declare function assert<T>(value: unknown, schema?: ZodSchema<T>): asserts value is T;
export {};
//# sourceMappingURL=assert.d.ts.map