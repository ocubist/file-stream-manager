/**
 * Error thrown when a function is used outside a Node.js environment.
 *
 * @typedef {Object} NotNodeEnvironmentError
 * @property {string} name - The name of the error.
 * @property {string} cause - The cause of the error.
 * @property {string} context - The context where the error occurred.
 * @property {string} module - The module where the error originated.
 * @property {string} errorCode - The error code associated with the error.
 */
export declare const NotNodeEnvironmentError: {
    new (props: import("@ocubist/error-alchemy").CraftedErrorProps): {
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
//# sourceMappingURL=errors.d.ts.map