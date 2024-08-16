/// <reference types="node" />
export declare const FileStreamToReadCounterDoesNotExistError: {
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
export declare const FileStreamDoesNotProvideCounterError: {
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
 * Retrieves the usage count (subscription count) for a specific file stream.
 * This function checks the current usage count for an open file stream, which represents the number of active subscriptions.
 *
 * @param {string} filePath - The path to the file stream.
 * @returns {number} The usage count of the file stream.
 *
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 * @throws {SingletonDoesNotExistError} Thrown if the file stream does not exist.
 * @throws {FileStreamDoesNotProvideCounterError} Thrown if the file stream does not provide a counter, indicating it has never been subscribed to.
 * @throws {FileStreamToReadCounterDoesNotExistError} Thrown if the file stream to read counter from is not open.
 */
export declare const getFileStreamUsageCount: (filePath: string) => number;
//# sourceMappingURL=getFileStreamUsageCount.d.ts.map