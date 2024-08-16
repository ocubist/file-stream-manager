/// <reference types="node" />
import { CraftErrorProps, CraftedErrorProps } from "./types";
/**
 * Crafts a new synthesized error class with the given properties.
 *
 * @param {CraftErrorProps} props - The properties to craft the synthesized error.
 * @returns {typeof SynthesizedError} The crafted synthesized error class.
 */
export declare const craftSynthesizedError: (props: CraftErrorProps) => {
    new (props: CraftedErrorProps): {
        dynamicClassUuid: string;
        instanceUuid: string;
        name: string;
        severity: import("../..").Severity;
        origin?: unknown;
        cause?: string | undefined;
        payload: Record<string, unknown>;
        module?: string | undefined;
        context?: string | undefined;
        errorCode: import("../..").ErrorCode;
        readonly severityDescription: string;
        readonly simpleGetter: string;
        readonly identifier: string;
        message: string;
        stack?: string | undefined;
    };
    /**
     * Compares an unknown error to determine if it is an instance of CraftedSynthesizedError.
     *
     * @param {unknown} err - The error to compare.
     * @returns {boolean} True if the error is an instance of CraftedSynthesizedError, false otherwise.
     */
    compare(err: unknown): boolean;
    captureStackTrace(targetObject: object, constructorOpt?: Function | undefined): void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
};
//# sourceMappingURL=craftSynthesizedError.d.ts.map