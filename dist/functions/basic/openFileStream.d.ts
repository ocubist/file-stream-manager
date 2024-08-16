/// <reference types="node" />
import { FileStreamOptions } from "../../types/StreamOptionsType";
export declare const ExitingFileStreamFailedError: {
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
export declare const OpenFileStreamFailedError: {
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
export declare const FileStreamToOpenAlreadyOpenError: {
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
 * Opens a file stream and stores it in a singleton for shared access.
 * Creates the necessary directories and the file if they do not exist.
 *
 * @param {string} filePath - The path to the file where the stream will write.
 * @param {FileStreamOptions} [options] - Optional configuration options for the file stream.
 * @param {boolean} [options.mkDir=true] - Whether to create directories if they don't exist.
 * @param {boolean} [options.sync=false] - Whether to synchronize writes to the file.
 * @param {number} [options.minBufferSize=4096] - The minimum buffer size before writing to the file.
 * @returns {Promise<string>} The key of the singleton object for the opened stream.
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 * @throws {FileStreamToOpenAlreadyOpenError} Thrown if a file stream for the given file path is already open.
 * @throws {OpenFileStreamFailedError} Thrown if any unexpected error occurs during the opening of the file stream.
 */
export declare const openFileStream: (filePath: string, options?: FileStreamOptions) => Promise<string>;
//# sourceMappingURL=openFileStream.d.ts.map