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
        /**
         * Asserts that a given value is empty.
         * @param {T} value - The value to be checked for emptiness.
         * @throws {AssertEmptyFailedError} If the value is not empty.
         */
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
 * Type for AssertEmptyFailedError.
 */
export type AssertEmptyFailedError = InstanceType<ReturnType<typeof craftMysticError>>;
export declare const AssertEmptyFailedError: {
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
        /**
         * Asserts that a given value is empty.
         * @param {T} value - The value to be checked for emptiness.
         * @throws {AssertEmptyFailedError} If the value is not empty.
         */
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
export type AssertEmptyValueType = string | any[] | ArrayBufferView | Set<unknown> | Map<unknown, unknown> | Buffer | Record<string, unknown>;
/**
 * Asserts that a given value is empty.
 * @param {T} value - The value to be checked for emptiness.
 * @throws {AssertEmptyFailedError} If the value is not empty.
 */
export declare function assertEmpty<T extends AssertEmptyValueType>(value: T): asserts value is NonNullable<T>;
export {};
//# sourceMappingURL=assertEmpty.d.ts.map