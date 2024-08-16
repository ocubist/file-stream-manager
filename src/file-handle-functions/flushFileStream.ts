import { useErrorAlchemy } from "@ocubist/error-alchemy";
import { useFileStreamManagerSingleton } from "../config/useFileStreamManagerSingleton";
import { createOpenFileStreamKey as fileStreamKey } from "../helpers/createOpenFileStreamKey";
import { OpenFileStreamSingletonObject } from "../types/OpenFIleStreamSingletonObject";
import { SingletonDoesNotExistError } from "@ocubist/singleton-manager";
import { ensureNodeEnvironment } from "../helpers/ensureNodeEnvironment";

const { getSingleton } = useFileStreamManagerSingleton();

const { craftMysticError } = useErrorAlchemy(
  "file-stream-manager",
  "flushFileStream"
);

export const FlushFileStreamFailedError = craftMysticError({
  name: "FlushFileStreamFailedError",
  severity: "critical",
});

export const FileStreamToFlushDoesNotExistError = craftMysticError({
  name: "FileStreamToFlushDoesNotExistError",
  severity: "unimportant",
});

/**
 * Flushes a file stream's buffer.
 * @param filePath - Path to the file of the stream to flush.
 * @param cb - Optional callback function to execute after flushing.
 */
export const flushFileStream = (
  filePath: string,
  cb?: (err?: Error | undefined) => unknown
) => {
  ensureNodeEnvironment();

  try {
    getSingleton<OpenFileStreamSingletonObject>(
      fileStreamKey(filePath)
    ).instance.flush(cb);
  } catch (err) {
    if (SingletonDoesNotExistError.compare(err)) {
      throw new FileStreamToFlushDoesNotExistError({
        message: "FileStream to Flush doesn't exist",
        origin: err,
        payload: { filePath },
      });
    } else {
      throw new FlushFileStreamFailedError({
        message: "Something unexpected happened flushing the FileStream",
        origin: err,
        payload: { filePath },
      });
    }
  }
};
