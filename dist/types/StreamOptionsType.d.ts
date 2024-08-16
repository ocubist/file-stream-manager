import z from "zod";
/**
 * Schema for validating the structure of the FileStreamOptions.
 */
export declare const FileStreamOptions: z.ZodObject<{
    sync: z.ZodOptional<z.ZodBoolean>;
    mkDir: z.ZodOptional<z.ZodBoolean>;
    minBufferSize: z.ZodOptional<z.ZodNumber>;
    flushInterval: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    sync?: boolean | undefined;
    mkDir?: boolean | undefined;
    minBufferSize?: number | undefined;
    flushInterval?: number | undefined;
}, {
    sync?: boolean | undefined;
    mkDir?: boolean | undefined;
    minBufferSize?: number | undefined;
    flushInterval?: number | undefined;
}>;
/**
 * Type definition for FileStreamOptions based on the schema.
 */
export type FileStreamOptions = z.infer<typeof FileStreamOptions>;
//# sourceMappingURL=StreamOptionsType.d.ts.map