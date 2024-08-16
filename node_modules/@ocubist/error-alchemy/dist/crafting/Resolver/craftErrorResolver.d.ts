import { SynthesizedError } from "../../transmuted-errors/SynthesizedError";
import { Synthesizer } from "../Synthesizer/types";
export interface CraftErrorResolverProps {
    logger?: (err: unknown) => void;
    synthesizer?: Synthesizer;
    errorResolverMap?: Map<typeof SynthesizedError, (err: SynthesizedError) => void>;
    defaultResolver?: (err: unknown) => void;
}
/**
 * Crafts a new error resolver with the given properties.
 *
 * @param {CraftErrorResolverProps} props - The properties of the error resolver.
 * @returns {(err: unknown) => void} The crafted error resolver function.
 */
export declare const craftErrorResolver: (props: CraftErrorResolverProps) => (err: unknown) => void;
//# sourceMappingURL=craftErrorResolver.d.ts.map