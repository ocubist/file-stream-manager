"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFileStream = exports.writeFileStreamEventHandler = exports.FileStreamToWriteDoesNotExistError = exports.WriteFileStreamFailedError = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
var useFileStreamManagerSingleton_1 = require("../../config/useFileStreamManagerSingleton");
var createOpenFileStreamKey_1 = require("../../helpers/createOpenFileStreamKey");
var event_handler_1 = require("@ocubist/event-handler");
var config_1 = require("../../config/config");
var singleton_manager_1 = require("@ocubist/singleton-manager");
var ensureNodeEnvironment_1 = require("../../helpers/ensureNodeEnvironment");
var getSingleton = (0, useFileStreamManagerSingleton_1.useFileStreamManagerSingleton)().getSingleton;
var craftMysticError = (0, error_alchemy_1.useErrorAlchemy)("file-stream-manager", "writeFileStream").craftMysticError;
exports.WriteFileStreamFailedError = craftMysticError({
    name: "WriteFileStreamFailedError",
    errorCode: "FILE_WRITE_ERROR",
    severity: "critical",
});
exports.FileStreamToWriteDoesNotExistError = craftMysticError({
    name: "WriteFileStreamFailedError",
    errorCode: "FILE_WRITE_ERROR",
    severity: "critical",
});
exports.writeFileStreamEventHandler = (0, event_handler_1.useEventHandler)(config_1.config.writeEventName);
/**
 * Writes data to a file stream.
 *
 * This function writes a chunk of data to an open file stream. It requires that the file
 * stream is already opened, and if the stream does not exist, an error is thrown.
 * This ensures that the file stream is explicitly managed, avoiding resource leaks.
 *
 * After writing the data, an event is emitted using the event handler configured with
 * the event name specified in `config.writeEventName`. This allows other parts of the
 * application to react to file writes in a decoupled manner.
 *
 * @param {string} filePath - Path to the file where the data will be written.
 * @param {string} chunk - The data to write to the file.
 * @returns {boolean} Returns true if the data was successfully written, false if it was buffered.
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 * @throws {FileStreamToWriteDoesNotExistError} Thrown if the file stream to write to does not exist.
 * @throws {WriteFileStreamFailedError} Thrown if any unexpected error occurs while writing to the file stream.
 */
var writeFileStream = function (filePath, chunk) {
    (0, ensureNodeEnvironment_1.ensureNodeEnvironment)();
    try {
        var fileStream = getSingleton((0, createOpenFileStreamKey_1.createOpenFileStreamKey)(filePath));
        var res = fileStream.instance.write(chunk);
        exports.writeFileStreamEventHandler.emit({ filePath: filePath, chunk: chunk });
        return res;
    }
    catch (err) {
        if (singleton_manager_1.SingletonDoesNotExistError.compare(err)) {
            throw new exports.FileStreamToWriteDoesNotExistError({
                message: "",
                origin: err,
                payload: { filePath: filePath },
            });
        }
        else {
            throw new exports.WriteFileStreamFailedError({
                message: "UnexpectedError writing to the FileStream",
                payload: { filePath: filePath, chunk: chunk },
                origin: err,
            });
        }
    }
};
exports.writeFileStream = writeFileStream;
//# sourceMappingURL=writeFileStream.js.map