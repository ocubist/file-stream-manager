import { ZodSchema } from "zod";
/**
 * Synchronously validates a value against a Zod schema.
 *
 * @template T
 * @param {T} value - The value to validate.
 * @param {ZodSchema<T>} schema - The Zod schema to validate against.
 * @returns {boolean} A boolean indicating whether the value is valid.
 */
export declare const validate: <T>(value: T, schema: ZodSchema<T>) => boolean;
//# sourceMappingURL=validate.d.ts.map