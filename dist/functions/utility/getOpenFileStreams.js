"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOpenFileStreams = void 0;
var config_1 = require("../../config/config");
var ensureNodeEnvironment_1 = require("../../helpers/ensureNodeEnvironment");
var getAllFileStreamSingletonKeys_1 = require("../../helpers/getAllFileStreamSingletonKeys");
/**
 * Retrieves a list of all currently open file streams by their file paths.
 * @returns {string[]} An array of file paths for the currently open file streams.
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 */
var getOpenFileStreams = function () {
    (0, ensureNodeEnvironment_1.ensureNodeEnvironment)();
    var openKeys = (0, getAllFileStreamSingletonKeys_1.getAllFileStreamSingletonKeys)();
    return openKeys.map(function (key) {
        return key.replace(config_1.config.openStreamSingletonKeyPrefix, "");
    });
};
exports.getOpenFileStreams = getOpenFileStreams;
//# sourceMappingURL=getOpenFileStreams.js.map