"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileStreamUsageCount = exports.FileStreamDoesNotProvideCounterError = exports.FileStreamToReadCounterDoesNotExistError = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
var createOpenFileStreamKey_1 = require("../../helpers/createOpenFileStreamKey");
var ensureNodeEnvironment_1 = require("../../helpers/ensureNodeEnvironment");
var useFileStreamManagerSingleton_1 = require("../../config/useFileStreamManagerSingleton");
var singleton_manager_1 = require("@ocubist/singleton-manager");
var getSingleton = (0, useFileStreamManagerSingleton_1.useFileStreamManagerSingleton)().getSingleton;
var craftMysticError = (0, error_alchemy_1.useErrorAlchemy)("file-stream-manager", "openFileStream").craftMysticError;
exports.FileStreamToReadCounterDoesNotExistError = craftMysticError({
    name: "FileStreamToReadCounterDoesNotExistError",
    errorCode: "FILE_READ_ERROR",
    severity: "critical",
});
exports.FileStreamDoesNotProvideCounterError = craftMysticError({
    name: "FileStreamDoesNotProvideCounterError",
    errorCode: "FILE_READ_ERROR",
    severity: "critical",
});
/**
 * Retrieves the usage count (subscription count) for a specific file stream.
 * This function checks the current usage count for an open file stream, which represents the number of active subscriptions.
 *
 * @param {string} filePath - The path to the file stream.
 * @returns {number} The usage count of the file stream.
 *
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 * @throws {SingletonDoesNotExistError} Thrown if the file stream does not exist.
 * @throws {FileStreamDoesNotProvideCounterError} Thrown if the file stream does not provide a counter, indicating it has never been subscribed to.
 * @throws {FileStreamToReadCounterDoesNotExistError} Thrown if the file stream to read counter from is not open.
 */
var getFileStreamUsageCount = function (filePath) {
    (0, ensureNodeEnvironment_1.ensureNodeEnvironment)();
    try {
        var key = (0, createOpenFileStreamKey_1.createOpenFileStreamKey)(filePath);
        var singleton = getSingleton(key);
        var counter = singleton.counter;
        if (!counter) {
            throw new exports.FileStreamDoesNotProvideCounterError({
                message: "FileStream does not provide a counter, which means, it has never been subscribed to",
                payload: { filePath: filePath, counter: counter },
            });
        }
        return counter;
    }
    catch (error) {
        if (singleton_manager_1.SingletonDoesNotExistError.compare(error)) {
            throw new exports.FileStreamToReadCounterDoesNotExistError({
                message: "FileStream to read counter from is not open",
                origin: error,
                payload: { filePath: filePath },
            });
        }
        else if (exports.FileStreamDoesNotProvideCounterError.compare(error)) {
            throw error;
        }
        else {
            throw error;
        }
    }
};
exports.getFileStreamUsageCount = getFileStreamUsageCount;
//# sourceMappingURL=getFileStreamUsageCount.js.map