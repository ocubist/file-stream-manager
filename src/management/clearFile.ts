import fs from "fs/promises";
import { useErrorAlchemy } from "@ocubist/error-alchemy";

const { craftMysticError } = useErrorAlchemy(
  "file-stream-manager",
  "clearFile"
);

const ClearFileFailedError = craftMysticError({
  name: "ClearFileFailedError",
  severity: "critical",
});

/**
 * Clears the contents of a file.
 * @param {string} filePath - Path to the file to be cleared.
 * @returns {Promise<void>}
 */
export const clearFile = async (filePath: string): Promise<void> => {
  try {
    await fs.writeFile(filePath, "");
  } catch (err) {
    throw new ClearFileFailedError({
      message: `Failed to clear the file at path '${filePath}'`,
      origin: err,
      payload: { filePath },
    });
  }
};
