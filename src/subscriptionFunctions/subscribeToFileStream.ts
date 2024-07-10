import { useErrorAlchemy } from "@ocubist/error-alchemy";
import { useFileStreamManagerSingleton } from "../config/useFileStreamManagerSingleton";
import { createOpenFileStreamKey as fileStreamKey } from "../helpers/createOpenFileStreamKey";
import { OpenFileStreamSingletonObject } from "../types/OpenFIleStreamSingletonObject";
import { openFileStream } from "../basic-functions/openFileStream";

const { getSingleton } = useFileStreamManagerSingleton();

const { craftMysticError } = useErrorAlchemy(
  "file-stream-manager",
  "subscribeToFileStream"
);

const SubscribeToFileStreamFailedError = craftMysticError({
  name: "SubscribeToFileStreamFailedError",
  severity: "critical",
});

/**
 * Subscribes to a file stream, incrementing its usage counter.
 * @param filePath - The path to the file of the stream.
 * @returns The updated counter of active subscriptions.
 */
export const subscribeToFileStream = (filePath: string) => {
  try {
    const fileStreamKey = openFileStream(filePath);
    const obj = getSingleton<OpenFileStreamSingletonObject>(fileStreamKey);

    if (obj.counter === undefined) obj.counter = 1;
    else obj.counter++;
  } catch (err) {
    throw new SubscribeToFileStreamFailedError({
      message: `Subscribing to FileStream for file '${filePath}' failed`,
      origin: err,
      payload: { filePath },
    });
  }
};
