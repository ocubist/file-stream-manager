/**
 * Forces the closure of all active file streams.
 * Used typically for cleanup or shutdown processes to ensure that all file streams
 * are properly closed and resources are released.
 *
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 * @throws {ForceCloseOfAllFileStreamsFailedError} Thrown if an unexpected error occurs while forcing the closure of file streams.
 */
export declare const forceCloseOfAllFileStreams: () => void;
//# sourceMappingURL=forceCloseOfAllFileStreams.d.ts.map