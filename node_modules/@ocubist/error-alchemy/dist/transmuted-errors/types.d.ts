import { z } from "zod";
import { Severity } from "../severity/types";
import { ErrorCode } from "../error-code/types";
/**
 * Zod schema for the payload of an error.
 */
export declare const Payload: z.ZodRecord<z.ZodString, z.ZodUnknown>;
/**
 * Type for the payload of an error.
 *
 * @typedef {Object} Payload
 */
export type Payload = z.infer<typeof Payload>;
/**
 * Zod schema for the properties of a TransmutedError.
 */
export declare const TransmutedErrorProps: z.ZodObject<{
    message: z.ZodString;
    name: z.ZodString;
    severity: z.ZodOptional<z.ZodEnum<[Severity, ...Severity[]]>>;
    origin: z.ZodOptional<z.ZodUnknown>;
    cause: z.ZodOptional<z.ZodString>;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    module: z.ZodOptional<z.ZodString>;
    context: z.ZodOptional<z.ZodString>;
    errorCode: z.ZodOptional<z.ZodEnum<[ErrorCode, ...ErrorCode[]]>>;
}, "strip", z.ZodTypeAny, {
    message: string;
    name: string;
    severity?: Severity | undefined;
    origin?: unknown;
    cause?: string | undefined;
    payload?: Record<string, unknown> | undefined;
    module?: string | undefined;
    context?: string | undefined;
    errorCode?: ErrorCode | undefined;
}, {
    message: string;
    name: string;
    severity?: Severity | undefined;
    origin?: unknown;
    cause?: string | undefined;
    payload?: Record<string, unknown> | undefined;
    module?: string | undefined;
    context?: string | undefined;
    errorCode?: ErrorCode | undefined;
}>;
/**
 * Type for the properties of a TransmutedError.
 *
 * @typedef {Object} TransmutedErrorProps
 * @property {string} message - The error message.
 * @property {string} name - The name of the error.
 * @property {Severity} [severity] - The severity of the error.
 * @property {unknown} [origin] - The origin of the error.
 * @property {string} [cause] - The cause of the error.
 * @property {Payload} [payload] - The payload of the error.
 * @property {string} [module] - The module where the error originated.
 * @property {string} [context] - The context of the error.
 * @property {ErrorCode} [errorCode] - The error code.
 */
export type TransmutedErrorProps = z.infer<typeof TransmutedErrorProps>;
//# sourceMappingURL=types.d.ts.map