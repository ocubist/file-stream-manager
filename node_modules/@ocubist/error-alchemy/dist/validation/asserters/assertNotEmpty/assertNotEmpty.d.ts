/// <reference types="node" />
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
 * Type for AssertNotEmptyFailedError.
 */
export type AssertNotEmptyFailedError = InstanceType<ReturnType<typeof craftMysticError>>;
/**
 * Type for AssertNotEmptyMaxSmallerThanMinError.
 */
export type AssertNotEmptyMaxSmallerThanMinError = InstanceType<ReturnType<typeof craftMysticError>>;
export declare const AssertNotEmptyFailedError: {
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
export declare const AssertNotEmptyMaxSmallerThanMinError: {
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
export type AssertNotEmptyValueType = string | any[] | ArrayBufferView | Set<unknown> | Map<unknown, unknown> | Buffer | Record<string, unknown>;
/**
 * Asserts that a given value is not empty.
 * @param {T} value - The value to be checked for non-emptiness.
 * @param {number} [min=1] - The minimum acceptable length or size.
 * @param {number} [max] - The maximum acceptable length or size.
 * @throws {AssertNotEmptyFailedError} If the value is empty.
 * @throws {AssertNotEmptyMaxSmallerThanMinError} If the max length is smaller than the min length.
 */
export declare function assertNotEmpty<T extends AssertNotEmptyValueType>(value: T, min?: number, max?: number): asserts value is NonNullable<T>;
export {};
//# sourceMappingURL=assertNotEmpty.d.ts.map