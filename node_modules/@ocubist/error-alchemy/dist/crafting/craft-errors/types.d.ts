import z from "zod";
import { Severity } from "../../severity/types";
import { ErrorCode } from "../../error-code/types";
/**
 * Zod schema for the properties required to craft an error.
 */
export declare const CraftErrorProps: z.ZodObject<{
    name: z.ZodString;
    severity: z.ZodOptional<z.ZodEnum<[Severity, ...Severity[]]>>;
    cause: z.ZodOptional<z.ZodString>;
    module: z.ZodOptional<z.ZodString>;
    context: z.ZodOptional<z.ZodString>;
    errorCode: z.ZodOptional<z.ZodEnum<[ErrorCode, ...ErrorCode[]]>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    severity?: Severity | undefined;
    cause?: string | undefined;
    module?: string | undefined;
    context?: string | undefined;
    errorCode?: ErrorCode | undefined;
}, {
    name: string;
    severity?: Severity | undefined;
    cause?: string | undefined;
    module?: string | undefined;
    context?: string | undefined;
    errorCode?: ErrorCode | undefined;
}>;
/**
 * Type for the properties required to craft an error.
 *
 * @typedef {Object} CraftErrorProps
 * @property {string} name - The name of the error.
 * @property {Severity} [severity] - The severity of the error.
 * @property {string} [cause] - The cause of the error.
 * @property {string} [module] - The module where the error originated.
 * @property {string} [context] - The context of the error.
 * @property {ErrorCode} [errorCode] - The error code.
 */
export type CraftErrorProps = z.infer<typeof CraftErrorProps>;
/**
 * Zod schema for the properties of a crafted error.
 */
export declare const CraftedErrorProps: z.ZodObject<{
    message: z.ZodString;
    origin: z.ZodOptional<z.ZodUnknown>;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    message: string;
    origin?: unknown;
    payload?: Record<string, unknown> | undefined;
}, {
    message: string;
    origin?: unknown;
    payload?: Record<string, unknown> | undefined;
}>;
/**
 * Type for the properties of a crafted error.
 *
 * @typedef {Object} CraftedErrorProps
 * @property {string} message - The error message.
 * @property {unknown} [origin] - The origin of the error.
 * @property {Payload} [payload] - The payload of the error.
 */
export type CraftedErrorProps = z.infer<typeof CraftedErrorProps>;
//# sourceMappingURL=types.d.ts.map