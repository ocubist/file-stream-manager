import { useErrorAlchemy } from "@ocubist/error-alchemy";
import { useFileStreamManagerSingleton } from "../config/useFileStreamManagerSingleton";
import { createOpenFileStreamKey as fileStreamKey } from "../helpers/createOpenFileStreamKey";
import { OpenFileStreamSingletonObject } from "../types/OpenFIleStreamSingletonObject";
import { useEventHandler } from "@ocubist/event-handler";
import { config } from "../config/config";

const { getSingleton } = useFileStreamManagerSingleton();

const { craftMysticError } = useErrorAlchemy(
  "file-stream-manager",
  "writeFileStream"
);

const WriteFileStreamFailedError = craftMysticError({
  name: "WriteFileStreamFailedError",
  errorCode: "FILE_WRITE_ERROR",
  severity: "critical",
});

export const writeFileStreamEventHandler = useEventHandler(
  config.writeEventName
);

/**
 * Writes data to a file stream.
 * @param filePath - Path to the file where the data will be written.
 * @param chunk - Data to write to the file.
 */
export const writeFileStream = (filePath: string, chunk: string): void => {
  try {
    const fileStream = getSingleton<OpenFileStreamSingletonObject>(
      fileStreamKey(filePath)
    ).instance;
    fileStream.write(chunk);

    writeFileStreamEventHandler.emit({ filePath, chunk });
  } catch (err) {
    throw new WriteFileStreamFailedError({
      message: `Writing to the File '${filePath}' failed`,
      payload: { filePath, chunk },
      origin: err,
    });
  }
};
