import { useErrorAlchemy } from "@ocubist/error-alchemy";
import { useFileStreamManagerSingleton } from "../config/useFileStreamManagerSingleton";
import { createOpenFileStreamKey as fileStreamKey } from "../helpers/createOpenFileStreamKey";
import { OpenFileStreamSingletonObject } from "../types/OpenFIleStreamSingletonObject";
import { useEventHandler } from "@ocubist/event-handler";
import { config } from "../config/config";
import { SingletonDoesNotExistError } from "@ocubist/singleton-manager";
import { ensureNodeEnvironment } from "../helpers/ensureNodeEnvironment";

const { getSingleton } = useFileStreamManagerSingleton();

const { craftMysticError } = useErrorAlchemy(
  "file-stream-manager",
  "writeFileStream"
);

export const WriteFileStreamFailedError = craftMysticError({
  name: "WriteFileStreamFailedError",
  errorCode: "FILE_WRITE_ERROR",
  severity: "critical",
});

export const FileToWriteDoesNotExistError = craftMysticError({
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
export const writeFileStream = (filePath: string, chunk: string): boolean => {
  ensureNodeEnvironment();

  try {
    const fileStream = getSingleton<OpenFileStreamSingletonObject>(
      fileStreamKey(filePath)
    );

    // console.log({ fileStream, chunk });

    const res = fileStream.instance.write(chunk);

    writeFileStreamEventHandler.emit({ filePath, chunk });

    return res;
  } catch (err) {
    if (SingletonDoesNotExistError.compare(err)) {
      throw new FileToWriteDoesNotExistError({
        message: "",
        origin: err,
        payload: { filePath },
      });
    } else {
      throw new WriteFileStreamFailedError({
        message: `UnexpectedError writing to the FileStream`,
        payload: { filePath, chunk },
        origin: err,
      });
    }
  }
};
