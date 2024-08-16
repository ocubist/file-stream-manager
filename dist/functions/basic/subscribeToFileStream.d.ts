/**
 * Subscribes to a file stream, incrementing its usage counter.
 * If the file stream is not already open, it will be opened automatically.
 *
 * @param {string} filePath - The path to the file of the stream.
 * @returns {Promise<void>} A promise that resolves when the subscription is successful.
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 * @throws {SubscribeToFileStreamFailedError} Thrown if an unexpected error occurs while subscribing to the file stream.
 */
export declare const subscribeToFileStream: (filePath: string) => Promise<void>;
//# sourceMappingURL=subscribeToFileStream.d.ts.map