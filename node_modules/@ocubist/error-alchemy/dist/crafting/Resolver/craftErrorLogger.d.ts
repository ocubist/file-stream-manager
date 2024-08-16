import { Severity } from "../../severity/types";
type AnyLogger = (err: unknown) => void;
export type CraftErrorLoggerProps = {
    [key in Severity]?: AnyLogger;
} & {
    default: AnyLogger;
};
/**
 * Crafts a new error logger with the given logger properties.
 *
 * @param {CraftErrorLoggerProps} props - The logger properties.
 * @returns {(err: unknown) => void} The crafted error logger function.
 */
export declare const craftErrorLogger: (props: CraftErrorLoggerProps) => ((err: unknown) => void);
export {};
//# sourceMappingURL=craftErrorLogger.d.ts.map