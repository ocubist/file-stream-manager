import { delay } from "@ocubist/utils";
import {
  firstWord,
  loremIpsumPath,
  hundredTestFilePaths,
  clearTestFiles,
  defaultLoremIpsumContent,
  testFilesFolderPath,
} from "../tests/globalSetup";
import { promises as fs } from "fs";
import path from "path";
import { getAllFileStreamSingletonKeys } from "../helpers/getAllFileStreamSingletonKeys";
import { createOpenFileStreamKey } from "../helpers/createOpenFileStreamKey";
import {
  FileStreamToOpenAlreadyOpenError,
  openFileStream,
} from "./openFileStream";
import {
  FileToWriteDoesNotExistError,
  writeFileStream,
} from "./writeFileStream";
import { FileToReadDoesNotExistError, readFileStream } from "./readFileStream";
import {
  FileStreamToFlushDoesNotExistError,
  flushFileStream,
} from "./flushFileStream";
import { closeFileStream, FileStreamNotFoundError } from "./closeFileStream";
import { subscribeToFileStream } from "./subscribeToFileStream";
import { useFileStreamManagerSingleton } from "../config/useFileStreamManagerSingleton";
import { OpenFileStreamSingletonObject } from "../types/OpenFIleStreamSingletonObject";
import {
  unsubscribeFromFileStream,
  NoSubscriptionsFoundError,
  FileStreamToUnsubscribeDoesNotExist,
} from "./unsubscribeFromFileStream";

// Extend Jest matchers to include the custom matcher
declare global {
  namespace jest {
    interface Matchers<R> {
      toStartWith(argument: string): R;
    }
  }
}

expect.extend({
  toStartWith(received: string, argument: string) {
    const pass = received.startsWith(argument);
    if (pass) {
      return {
        message: () => `expected ${received} not to start with ${argument}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to start with ${argument}`,
        pass: false,
      };
    }
  },
});

jest.setTimeout(60000);

describe("useFileStreamManager", () => {
  test("file automatically created when opening file", async () => {
    try {
      await fs.access(loremIpsumPath);
      throw "file should not exist";
    } catch {}

    await openFileStream(loremIpsumPath);

    try {
      await fs.access(loremIpsumPath);
    } catch {
      throw "file should exist";
    }

    expect(getAllFileStreamSingletonKeys()).toContain(
      createOpenFileStreamKey(loremIpsumPath)
    );
  });

  test("write-, flush- and read-function", async () => {
    writeFileStream(loremIpsumPath, defaultLoremIpsumContent);
    flushFileStream(loremIpsumPath);

    await delay(1000);

    const loremContent = await readFileStream(loremIpsumPath);

    // console.log({ loremContent });
  });

  test("close-function", async () => {
    expect(getAllFileStreamSingletonKeys()).toContain(
      createOpenFileStreamKey(loremIpsumPath)
    );

    await closeFileStream(loremIpsumPath);

    expect(getAllFileStreamSingletonKeys()).not.toContain(
      createOpenFileStreamKey(loremIpsumPath)
    );
  });

  test("subscribe- and unsubscribe-function", async () => {
    const { getSingleton } = useFileStreamManagerSingleton();

    const entries: OpenFileStreamSingletonObject[] = [];

    let allKeys = getAllFileStreamSingletonKeys();

    for (const path of hundredTestFilePaths) {
      // console.log({ path });
      expect(allKeys).not.toContain(createOpenFileStreamKey(path));
      for (let i = 0; i < 100; i++) {
        await subscribeToFileStream(path);
      }

      const singletonEntry = getSingleton<OpenFileStreamSingletonObject>(
        createOpenFileStreamKey(path)
      );
      entries.push(singletonEntry);
    }

    allKeys = getAllFileStreamSingletonKeys();

    // console.log({ allKeys, hundredTestFilePaths });

    allKeys.forEach((key) => {
      expect(allKeys).toContain(key);
    });

    entries.forEach((entry) => {
      expect(entry.counter).toBe(100);
    });

    for (const path of hundredTestFilePaths) {
      for (let i = 0; i < 50; i++) {
        await unsubscribeFromFileStream(path);
      }
    }

    entries.forEach((entry) => {
      expect(entry.counter).toBe(50);
    });

    for (const path of hundredTestFilePaths) {
      for (let i = 0; i < 50; i++) {
        await unsubscribeFromFileStream(path);
      }
    }

    allKeys = getAllFileStreamSingletonKeys();
    console.log({ allKeys });
    allKeys.forEach((key) => {
      expect(allKeys).not.toContain(key);
    });
  });

  test("provoke Errors", async () => {
    try {
      await closeFileStream("does not exist");
    } catch (error) {
      expect(error).toBeInstanceOf(FileStreamNotFoundError);
    }

    try {
      await unsubscribeFromFileStream("does not exist");
    } catch (error) {
      expect(error).toBeInstanceOf(FileStreamToUnsubscribeDoesNotExist);
    }

    const unsubscribeTestFilePath = path.resolve(
      testFilesFolderPath,
      `UnsubscribeTest.txt`
    );
    await openFileStream(unsubscribeTestFilePath);

    try {
      await unsubscribeFromFileStream(unsubscribeTestFilePath);
    } catch (error) {
      expect(error).toBeInstanceOf(NoSubscriptionsFoundError);
    }

    try {
      flushFileStream("nope");
    } catch (err) {
      expect(err).toBeInstanceOf(FileStreamToFlushDoesNotExistError);
    }

    try {
      await readFileStream("nope");
    } catch (err) {
      expect(err).toBeInstanceOf(FileToReadDoesNotExistError);
    }

    try {
      await writeFileStream("nope", "");
    } catch (err) {
      expect(err).toBeInstanceOf(FileToWriteDoesNotExistError);
    }

    try {
      await openFileStream(unsubscribeTestFilePath);
    } catch (err) {
      // console.log(err);
      expect(err).toBeInstanceOf(FileStreamToOpenAlreadyOpenError);
    }
  });
});
