import { ZodError, z } from "zod";
/**
 * ZodErrorValidationDetails schema.
 */
export declare const ZodErrorValidationDetails: z.ZodObject<{
    path: z.ZodString;
    msg: z.ZodString;
}, "strip", z.ZodTypeAny, {
    path: string;
    msg: string;
}, {
    path: string;
    msg: string;
}>;
export type ZodErrorValidationDetails = z.infer<typeof ZodErrorValidationDetails>;
/**
 * Extracts validation details from a ZodError.
 *
 * @param {ZodError} zod - The ZodError to extract details from.
 * @returns {ZodErrorValidationDetails[]} An array of validation details.
 */
export declare const extractZodErrorValidationDetails: (zod: ZodError) => ZodErrorValidationDetails[];
/**
 * Converts an array of ZodErrorValidationDetails to a string.
 *
 * @param {ZodErrorValidationDetails[]} validationDetails - The validation details to stringify.
 * @returns {string} The stringified validation details.
 */
export declare const stringifyZodErrorValidationDetails: (validationDetails: ZodErrorValidationDetails[]) => string;
/**
 * Error class for property validation errors using Zod.
 */
export declare class AlchemyPropsValidationError extends Error {
    zodError: ZodError;
    /**
     * Constructs a new AlchemyPropsValidationError.
     *
     * @param {ZodError} zodError - The ZodError that caused the validation error.
     */
    constructor(zodError: ZodError);
}
//# sourceMappingURL=PropsValidationError.d.ts.map