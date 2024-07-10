import { useErrorAlchemy } from "@ocubist/error-alchemy";
import SonicBoom, { SonicBoomOpts } from "sonic-boom";
import { useFileStreamManagerSingleton } from "../config/useFileStreamManagerSingleton";
import { createOpenFileStreamKey as fileStreamKey } from "../helpers/createOpenFileStreamKey";
import { FileStreamOptions } from "../types/StreamOptionsType";
import { getAllFileStreamSingletonKeys } from "../helpers/getAllFileStreamSingletonKeys";
import { addProcessListeners } from "../helpers/addProcessListener";

const { setSingletonIfNotExists, removeSingleton } = useFileStreamManagerSingleton();

const { craftMysticError } = useErrorAlchemy(
  "file-stream-manager",
  "openFileStream"
);

export const ExitingFileStreamFailedError = craftMysticError({
  name: "ExitingFileStreamFailedError",
  cause: "Some Error occurred during the onExitCallback",
  severity: "critical",
});

export const OpenFileStreamFailedError = craftMysticError({
  name: "OpenFileStreamFailedError",
  severity: "critical",
});

/**
 * Delay function to wait for a specified amount of time.
 * @param ms - The number of milliseconds to wait.
 * @returns A promise that resolves after the specified time.
 */
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Opens a file stream and stores it in a singleton for shared access.
 * @param filePath - Path to the file where the stream will write.
 * @param options - Optional configuration options for the file stream.
 * @returns The key of the singleton object for the opened stream.
 */
export const openFileStream = (
  filePath: string,
  options?: FileStreamOptions
) => {
  const key = fileStreamKey(filePath);

  try {
    if (getAllFileStreamSingletonKeys().length === 0) {
      addProcessListeners();
    }

    setSingletonIfNotExists(key, () => {
      const theOptions: SonicBoomOpts = {
        dest: filePath,
        mkdir: options?.mkDir !== undefined ? options.mkDir : true,
        sync: options?.sync !== undefined ? options.sync : false,
        minLength:
          options?.minBufferSize !== undefined ? options.minBufferSize : 4096,
      };

      const instance = new SonicBoom(theOptions);

      const onExitCB = (() => {
        let called = false;
        return async () => {
          if (!called) {
            for (let attempt = 0; attempt < 5; attempt++) {
              try {
                instance.flushSync();
                break; // Exit the loop if flushSync succeeds
              } catch (err) {
                if (attempt === 4) {
                  throw new ExitingFileStreamFailedError({
                    message:
                      "Error while finalizing File-Stream by flushing it and ending the instance",
                    origin: err,
                    payload: { filePath, options },
                  });
                }
                await delay(1000); // Wait for 1000ms before retrying
              }
            }
            instance.end();
            removeSingleton(key);
            called = true;
          }
        };
      })();

      return {
        instance,
        onExitCB,
      };
    });
  } catch (err) {
    throw new OpenFileStreamFailedError({
      message: "Something went wrong opening the FileStream",
      origin: err,
      payload: { filePath, options },
    });
  }

  return key;
};
