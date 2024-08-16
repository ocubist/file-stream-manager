import { useErrorAlchemy } from "@ocubist/error-alchemy";
import { useFileStreamManagerSingleton } from "../config/useFileStreamManagerSingleton";
import {
  createOpenFileStreamKey,
  createOpenFileStreamKey as fileStreamKey,
} from "../helpers/createOpenFileStreamKey";
import { OpenFileStreamSingletonObject } from "../types/OpenFIleStreamSingletonObject";
import { openFileStream } from "./openFileStream";
import { getAllFileStreamSingletonKeys } from "../helpers/getAllFileStreamSingletonKeys";
import { ensureNodeEnvironment } from "../helpers/ensureNodeEnvironment";

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
export const subscribeToFileStream = async (filePath: string) => {
  ensureNodeEnvironment();

  const fileStreamKey = createOpenFileStreamKey(filePath);
  try {
    if (!getAllFileStreamSingletonKeys().includes(fileStreamKey)) {
      await openFileStream(filePath);
    }
    const obj = getSingleton<OpenFileStreamSingletonObject>(fileStreamKey);

    if (obj.counter === undefined) obj.counter = 1;
    else obj.counter++;
  } catch (err) {
    throw new SubscribeToFileStreamFailedError({
      message: `Unexpected Error subscribing to FileStream`,
      origin: err,
      payload: { filePath },
    });
  }
};
