import { useErrorAlchemy } from "@ocubist/error-alchemy";
import { useFileStreamManagerSingleton } from "../config/useFileStreamManagerSingleton";
import { createOpenFileStreamKey as fileStreamKey } from "../helpers/createOpenFileStreamKey";
import { OpenFileStreamSingletonObject } from "../types/OpenFIleStreamSingletonObject";

const { getSingleton } = useFileStreamManagerSingleton();

const { craftMysticError } = useErrorAlchemy(
  "file-stream-manager",
  "flushFileStream"
);

const FlushFileStreamFailedError = craftMysticError({
  name: "FlushFileStreamFailedError",
  severity: "critical",
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
  try {
    getSingleton<OpenFileStreamSingletonObject>(
      fileStreamKey(filePath)
    ).instance.flush(cb);
  } catch (err) {
    throw new FlushFileStreamFailedError({
      message: "Something unexpected happened flushing the FileStream",
      origin: err,
      payload: { filePath },
    });
  }
};
