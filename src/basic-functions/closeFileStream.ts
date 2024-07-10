import { useErrorAlchemy } from "@ocubist/error-alchemy";
import { useFileStreamManagerSingleton } from "../config/useFileStreamManagerSingleton";
import { createOpenFileStreamKey as fileStreamKey } from "../helpers/createOpenFileStreamKey";
import { OpenFileStreamSingletonObject } from "../types/OpenFIleStreamSingletonObject";
import { getAllFileStreamSingletonKeys } from "../helpers/getAllFileStreamSingletonKeys";
import { removeProcessListeners } from "../helpers/removeProcessListeners";

const { getSingleton, removeSingleton } = useFileStreamManagerSingleton();

const { craftMysticError } = useErrorAlchemy(
  "file-stream-manager",
  "closeFileStream"
);

const CloseFileStreamFailedError = craftMysticError({
  name: "CloseFileStreamFailedError",
  severity: "critical",
});

/**
 * Closes a file stream and removes it from the singleton manager.
 * @param filePath - Path to the file of the stream to close.
 */
export const closeFileStream = (filePath: string) => {
  try {
    const singletonName = fileStreamKey(filePath);
    const { onExitCB } =
      getSingleton<OpenFileStreamSingletonObject>(singletonName);
    onExitCB();

    if (getAllFileStreamSingletonKeys().length < 1) {
      removeProcessListeners();
    }
  } catch (err) {
    throw new CloseFileStreamFailedError({
      message: `Error while closing the FileStream for file '${filePath}'`,
      origin: err,
      payload: { filePath },
    });
  }
};
