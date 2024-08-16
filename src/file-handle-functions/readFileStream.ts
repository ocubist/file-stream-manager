import { useErrorAlchemy } from "@ocubist/error-alchemy";
import fs from "fs/promises";

const { craftMysticError } = useErrorAlchemy(
  "file-stream-manager",
  "readFileStream"
);

export const ReadFileStreamFailedError = craftMysticError({
  name: "ReadFileStreamFailedError",
  severity: "critical",
});

export const FileToReadDoesNotExistError = craftMysticError({
  name: "FileToReadDoesNotExistError",
  severity: "critical",
});

/**
 * Reads a file and returns its content as a string.
 * @param filePath - The path to the file to read.
 * @returns A promise that resolves to the file content as a string.
 * @throws ReadFileStreamFailedError if the file cannot be read.
 */
export const readFileStream = async (filePath: string): Promise<string> => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch (err) {
    if (
      typeof err === "object" &&
      (err as Object).hasOwnProperty("code") &&
      // @ts-ignore
      err.code === "ENOENT"
    ) {
      throw new FileToReadDoesNotExistError({
        message: "File to read does not exist",
        origin: err,
        payload: { filePath },
      });
    } else {
      throw new ReadFileStreamFailedError({
        message: "Unexpected Error trying to read a file",
        origin: err,
        payload: { filePath },
      });
    }
  }
};
