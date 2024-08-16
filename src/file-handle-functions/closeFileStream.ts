import { useErrorAlchemy } from "@ocubist/error-alchemy";
import { useFileStreamManagerSingleton } from "../config/useFileStreamManagerSingleton";
import { createOpenFileStreamKey as fileStreamKey } from "../helpers/createOpenFileStreamKey";
import { OpenFileStreamSingletonObject } from "../types/OpenFIleStreamSingletonObject";
import { getAllFileStreamSingletonKeys } from "../helpers/getAllFileStreamSingletonKeys";
import { removeProcessListeners } from "../helpers/removeProcessListeners";
import { SingletonDoesNotExistError } from "@ocubist/singleton-manager";

const { getSingleton, removeSingleton } = useFileStreamManagerSingleton();

const { craftMysticError } = useErrorAlchemy(
  "file-stream-manager",
  "closeFileStream"
);

export const CloseFileStreamFailedError = craftMysticError({
  name: "CloseFileStreamFailedError",
  severity: "critical",
});

export const FileStreamNotFoundError = craftMysticError({
  name: "FileStreamNotFoundError",
  severity: "unimportant",
});

/**
 * Closes a file stream and removes it from the singleton manager.
 * @param filePath - Path to the file of the stream to close.
 */
export const closeFileStream = async (filePath: string) => {
  try {
    const singletonName = fileStreamKey(filePath);
    const { onExitCB } =
      getSingleton<OpenFileStreamSingletonObject>(singletonName);

    // Typecast onExitCB to ensure it's recognized as an async function
    await (onExitCB as () => Promise<void>)();

    if (getAllFileStreamSingletonKeys().length < 1) {
      removeProcessListeners();
    }
  } catch (err) {
    if (SingletonDoesNotExistError.compare(err)) {
      throw new FileStreamNotFoundError({
        message: "FileStream to close not found",
        origin: err,
        payload: {
          filePath,
        },
      });
    } else {
      throw new CloseFileStreamFailedError({
        message: `Unexpected error while closing the FileStream for file '${filePath}'`,
        origin: err,
        payload: { filePath },
      });
    }
  }
};
