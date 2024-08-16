/// <reference types="node" />
export declare const WriteFileStreamFailedError: {
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
export declare const FileStreamToWriteDoesNotExistError: {
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
export declare const writeFileStreamEventHandler: import("@ocubist/event-handler").UseEventHandlerObject;
/**
 * Writes data to a file stream.
 *
 * This function writes a chunk of data to an open file stream. It requires that the file
 * stream is already opened, and if the stream does not exist, an error is thrown.
 * This ensures that the file stream is explicitly managed, avoiding resource leaks.
 *
 * After writing the data, an event is emitted using the event handler configured with
 * the event name specified in `config.writeEventName`. This allows other parts of the
 * application to react to file writes in a decoupled manner.
 *
 * @param {string} filePath - Path to the file where the data will be written.
 * @param {string} chunk - The data to write to the file.
 * @returns {boolean} Returns true if the data was successfully written, false if it was buffered.
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 * @throws {FileStreamToWriteDoesNotExistError} Thrown if the file stream to write to does not exist.
 * @throws {WriteFileStreamFailedError} Thrown if any unexpected error occurs while writing to the file stream.
 */
export declare const writeFileStream: (filePath: string, chunk: string) => boolean;
//# sourceMappingURL=writeFileStream.d.ts.map