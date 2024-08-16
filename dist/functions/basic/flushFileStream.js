"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flushFileStream = exports.FileStreamToFlushDoesNotExistError = exports.FlushFileStreamFailedError = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
var useFileStreamManagerSingleton_1 = require("../../config/useFileStreamManagerSingleton");
var createOpenFileStreamKey_1 = require("../../helpers/createOpenFileStreamKey");
var singleton_manager_1 = require("@ocubist/singleton-manager");
var ensureNodeEnvironment_1 = require("../../helpers/ensureNodeEnvironment");
var getSingleton = (0, useFileStreamManagerSingleton_1.useFileStreamManagerSingleton)().getSingleton;
var craftMysticError = (0, error_alchemy_1.useErrorAlchemy)("file-stream-manager", "flushFileStream").craftMysticError;
exports.FlushFileStreamFailedError = craftMysticError({
    name: "FlushFileStreamFailedError",
    severity: "critical",
});
exports.FileStreamToFlushDoesNotExistError = craftMysticError({
    name: "FileStreamToFlushDoesNotExistError",
    severity: "unimportant",
});
/**
 * Flushes a file stream's buffer.
 * Ensures that any data buffered in the stream is written to the file.
 *
 * @param {string} filePath - The path to the file of the stream to flush.
 * @param {(err?: Error | undefined) => unknown} [cb] - Optional callback function to execute after flushing.
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 * @throws {FileStreamToFlushDoesNotExistError} Thrown if the file stream to flush does not exist.
 * @throws {FlushFileStreamFailedError} Thrown if an unexpected error occurs while flushing the file stream.
 */
var flushFileStream = function (filePath, cb) {
    (0, ensureNodeEnvironment_1.ensureNodeEnvironment)();
    try {
        getSingleton((0, createOpenFileStreamKey_1.createOpenFileStreamKey)(filePath)).instance.flush(cb);
    }
    catch (err) {
        if (singleton_manager_1.SingletonDoesNotExistError.compare(err)) {
            throw new exports.FileStreamToFlushDoesNotExistError({
                message: "FileStream to Flush doesn't exist",
                origin: err,
                payload: { filePath: filePath },
            });
        }
        else {
            throw new exports.FlushFileStreamFailedError({
                message: "Something unexpected happened flushing the FileStream",
                origin: err,
                payload: { filePath: filePath },
            });
        }
    }
};
exports.flushFileStream = flushFileStream;
//# sourceMappingURL=flushFileStream.js.map