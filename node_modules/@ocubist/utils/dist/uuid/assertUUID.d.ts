/**
 * Custom error for UUID validation failures.
 *
 * @typedef {Object} AssertUUIDFailedError
 * @property {string} name - The name of the error.
 * @property {string} cause - The cause of the error.
 * @property {string} errorCode - The error code associated with the error.
 */
export declare const AssertUUIDFailedError: {
    new (props: {
        message: string;
        origin?: unknown;
        payload?: Record<string, unknown> | undefined;
    }): {
        dynamicClassUuid: string;
        instanceUuid: string;
        name: string;
        severity: import("@ocubist/error-alchemy").Severity;
        origin?: unknown;
        cause?: string | undefined;
        payload: Record<string, unknown>;
        module?: string | undefined;
        context?: string | undefined;
        errorCode: import("@ocubist/error-alchemy").ErrorCode;
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
 * Asserts that a given string is a valid UUID. Throws an error if the validation fails.
 *
 * @param {string} uuid - The UUID string to validate.
 * @throws {AssertUUIDFailedError} If the provided string is not a valid UUID.
 */
export declare const assertUUID: (uuid: string) => asserts uuid is string;
//# sourceMappingURL=assertUUID.d.ts.map