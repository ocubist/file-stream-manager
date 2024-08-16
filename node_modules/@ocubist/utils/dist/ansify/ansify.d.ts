import ansiColors from "ansi-colors";
/**
 * A promise that resolves when the async initialization to detect ANSI color support is complete.
 * If ANSI colors are not supported, disables ANSI coloring.
 * This is immediately invoked to start the detection process as soon as the module is imported.
 *
 * @type {Promise<void>}
 */
export declare const ansiInitializationPromise: Promise<void>;
/**
 * The ansi-colors module for applying ANSI colors to strings.
 *
 * @type {import("ansi-colors")}
 */
export declare const ansify: typeof ansiColors;
//# sourceMappingURL=ansify.d.ts.map