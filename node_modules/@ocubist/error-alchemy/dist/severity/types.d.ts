import z from "zod";
import { severitySelector } from "./severitySelector";
type ValueOf<T> = T[keyof T];
export type Severity = ValueOf<typeof severitySelector>;
/**
 * Zod schema for validating severity levels.
 */
export declare const Severity: z.ZodEnum<[Severity, ...Severity[]]>;
export {};
//# sourceMappingURL=types.d.ts.map