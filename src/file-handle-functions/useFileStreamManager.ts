import { closeFileStream } from "./closeFileStream";
import { flushFileStream } from "./flushFileStream";
import { openFileStream } from "./openFileStream";
import { readFileStream } from "./readFileStream";
import { writeFileStream } from "./writeFileStream";
import { subscribeToFileStream } from "./subscribeToFileStream";
import { unsubscribeFromFileStream } from "./unsubscribeFromFileStream";

/**
 * Provides file stream management functionalities.
 * @param {string} filePath - The path of the file to manage.
 * @returns {Object} An object with file stream management functions.
 */
export const useFileStreamManager = (filePath: string) => {
  return {
    open: async () => await openFileStream(filePath),
    close: async () => await closeFileStream(filePath),
    write: (data: string) => writeFileStream(filePath, data),
    read: async () => await readFileStream(filePath),
    flush: (cb?: (err?: Error | undefined) => unknown) =>
      flushFileStream(filePath, cb),
    subscribe: async () => await subscribeToFileStream(filePath),
    unsubscribe: async () => await unsubscribeFromFileStream(filePath),
  };
};
