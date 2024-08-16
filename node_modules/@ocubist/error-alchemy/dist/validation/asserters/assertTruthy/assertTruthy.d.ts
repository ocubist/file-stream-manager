/// <reference types="node" />
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
 * Type for AssertTruthyFailedError.
 */
export type AssertTruthyFailedError = InstanceType<ReturnType<typeof craftMysticError>>;
export declare const AssertTruthyFailedError: {
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
 * Asserts that a given value is truthy.
 * @param {T} value - The value to be checked for truthiness.
 * @throws {AssertTruthyFailedError} If the value is falsy.
 */
export declare function assertTruthy<T>(value: T): asserts value is NonNullable<T>;
export {};
//# sourceMappingURL=assertTruthy.d.ts.map