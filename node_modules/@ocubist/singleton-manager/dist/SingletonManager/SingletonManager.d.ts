export declare const SingletonDoesNotExistError: {
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
export declare const SingletonClearConfirmationError: {
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
export declare const SingletonAlreadyExistsError: {
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
export interface SingletonFunctions {
    getSingleton<T>(name: string): T;
    setSingletonIfNotExists<T>(name: string, factoryFunction: () => T): T;
    setSingleton<T>(name: string, singleton: T, force?: boolean): void;
    hasSingleton(name: string): boolean;
    updateSingleton<T>(name: string, singleton: T): T;
    removeSingleton(name: string): void;
    registerInstanceAsSingleton(instance: unknown): string;
    unregisterInstanceAsSingleton(id: string): void;
    clearSingletons(confirmation: string): void;
    getAllSingletonKeys(): string[];
}
/**
 * Provides an interface to manage singletons by name. This function ensures that there is
 * only one instance of SingletonManager per name, and it provides methods to interact with
 * the singletons.
 *
 * @param name - The name of the singleton group to manage.
 * @returns An object containing methods to manage singletons within the specified group.
 *          This includes methods to set, get, check existence, update, remove, and clear
 *          singletons, as well as to register and unregister instances as singletons and
 *          retrieve all singleton keys.
 *
 * The returned object contains the following methods:
 * - getSingleton
 * - setSingletonIfNotExists
 * - setSingleton
 * - hasSingleton
 * - updateSingleton
 * - removeSingleton
 * - registerInstanceAsSingleton
 * - unregisterInstanceAsSingleton
 * - clearSingletons
 * - getAllSingletonKeys
 */
export declare const useSingleton: (name: string) => SingletonFunctions;
//# sourceMappingURL=SingletonManager.d.ts.map