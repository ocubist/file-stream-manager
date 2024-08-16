import SonicBoom from "sonic-boom";
import { z } from "zod";
/**
 * Schema for validating the structure of the OpenFileStreamSingletonObject.
 */
export declare const OpenFileStreamSingletonObject: z.ZodObject<{
    instance: z.ZodType<SonicBoom, z.ZodTypeDef, SonicBoom>;
    onExitCB: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    counter: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    instance: SonicBoom;
    onExitCB: (...args: unknown[]) => unknown;
    counter?: number | undefined;
}, {
    instance: SonicBoom;
    onExitCB: (...args: unknown[]) => unknown;
    counter?: number | undefined;
}>;
/**
 * Type definition for OpenFileStreamSingletonObject based on the schema.
 */
export type OpenFileStreamSingletonObject = z.infer<typeof OpenFileStreamSingletonObject>;
//# sourceMappingURL=OpenFIleStreamSingletonObject.d.ts.map