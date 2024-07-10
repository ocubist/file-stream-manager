import { useErrorAlchemy } from "@ocubist/error-alchemy";
import { createOpenFileStreamKey } from "../helpers/createOpenFileStreamKey";
import { openFileStream } from "../basic-functions/openFileStream";
import { closeFileStream } from "../basic-functions/closeFileStream";
import { writeFileStream } from "../basic-functions/writeFileStream";
import { readFileStream } from "../basic-functions/readFileStream";
import { flushFileStream } from "../management/flushFileStream";
import { subscribeToFileStream } from "../subscriptionFunctions/subscribeToFileStream";
import { unsubscribeFromFileStream } from "../subscriptionFunctions/unsubscribeFromFileStream";

/**
 * Provides file stream management functionalities.
 * @param {string} filePath - The path of the file to manage.
 * @returns {Object} An object with file stream management functions.
 */
export const useFileStreamManager = (filePath: string) => {
  const key = createOpenFileStreamKey(filePath);

  return {
    open: () => openFileStream(filePath),
    close: () => closeFileStream(key),
    write: (data: string) => writeFileStream(key, data),
    read: () => readFileStream(filePath),
    flush: (cb?: (err?: Error | undefined) => unknown) =>
      flushFileStream(filePath, cb),
    subscribe: () => subscribeToFileStream(filePath),
    unsubscribe: () => unsubscribeFromFileStream(filePath),
  };
};
