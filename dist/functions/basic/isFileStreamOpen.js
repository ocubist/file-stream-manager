"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFileStreamOpen = void 0;
var createOpenFileStreamKey_1 = require("../../helpers/createOpenFileStreamKey");
var getAllFileStreamSingletonKeys_1 = require("../../helpers/getAllFileStreamSingletonKeys");
var ensureNodeEnvironment_1 = require("../../helpers/ensureNodeEnvironment");
/**
 * Checks if a specific file stream is currently open.
 * @param {string} filePath - The path to the file stream.
 * @returns {boolean} True if the file stream is open, otherwise false.
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 */
var isFileStreamOpen = function (filePath) {
    (0, ensureNodeEnvironment_1.ensureNodeEnvironment)();
    var key = (0, createOpenFileStreamKey_1.createOpenFileStreamKey)(filePath);
    var allKeys = (0, getAllFileStreamSingletonKeys_1.getAllFileStreamSingletonKeys)();
    return allKeys.includes(key);
};
exports.isFileStreamOpen = isFileStreamOpen;
//# sourceMappingURL=isFileStreamOpen.js.map