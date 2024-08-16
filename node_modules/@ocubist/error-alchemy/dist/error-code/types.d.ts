import z from "zod";
import { errorCodeSelector } from "./errorCodeSelector";
type ValueOf<T> = T[keyof T];
export type ErrorCode = ValueOf<typeof errorCodeSelector>;
/**
 * Zod schema for validating error codes.
 */
export declare const ErrorCode: z.ZodEnum<[ErrorCode, ...ErrorCode[]]>;
export {};
//# sourceMappingURL=types.d.ts.map