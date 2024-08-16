"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openFileStream = exports.FileStreamToOpenAlreadyOpenError = exports.OpenFileStreamFailedError = exports.ExitingFileStreamFailedError = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
var sonic_boom_1 = __importDefault(require("sonic-boom"));
var useFileStreamManagerSingleton_1 = require("../../config/useFileStreamManagerSingleton");
var createOpenFileStreamKey_1 = require("../../helpers/createOpenFileStreamKey");
var createFileAndFolderIfDoesntExist_1 = require("../../helpers/createFileAndFolderIfDoesntExist");
var getAllFileStreamSingletonKeys_1 = require("../../helpers/getAllFileStreamSingletonKeys");
var addProcessListener_1 = require("../../helpers/addProcessListener");
var ensureNodeEnvironment_1 = require("../../helpers/ensureNodeEnvironment");
var utils_1 = require("@ocubist/utils");
var _a = (0, useFileStreamManagerSingleton_1.useFileStreamManagerSingleton)(), setSingletonIfNotExists = _a.setSingletonIfNotExists, removeSingleton = _a.removeSingleton;
var craftMysticError = (0, error_alchemy_1.useErrorAlchemy)("file-stream-manager", "openFileStream").craftMysticError;
exports.ExitingFileStreamFailedError = craftMysticError({
    name: "ExitingFileStreamFailedError",
    cause: "Some Error occurred during the onExitCallback",
    severity: "critical",
});
exports.OpenFileStreamFailedError = craftMysticError({
    name: "OpenFileStreamFailedError",
    severity: "critical",
});
exports.FileStreamToOpenAlreadyOpenError = craftMysticError({
    name: "FileStreamToOpenAlreadyOpenError",
    severity: "critical",
});
/**
 * Opens a file stream and stores it in a singleton for shared access.
 * Creates the necessary directories and the file if they do not exist.
 *
 * @param {string} filePath - The path to the file where the stream will write.
 * @param {FileStreamOptions} [options] - Optional configuration options for the file stream.
 * @param {boolean} [options.mkDir=true] - Whether to create directories if they don't exist.
 * @param {boolean} [options.sync=false] - Whether to synchronize writes to the file.
 * @param {number} [options.minBufferSize=4096] - The minimum buffer size before writing to the file.
 * @returns {Promise<string>} The key of the singleton object for the opened stream.
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 * @throws {FileStreamToOpenAlreadyOpenError} Thrown if a file stream for the given file path is already open.
 * @throws {OpenFileStreamFailedError} Thrown if any unexpected error occurs during the opening of the file stream.
 */
var openFileStream = function (filePath, options) { return __awaiter(void 0, void 0, void 0, function () {
    var key, allKeys, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, ensureNodeEnvironment_1.ensureNodeEnvironment)();
                key = (0, createOpenFileStreamKey_1.createOpenFileStreamKey)(filePath);
                allKeys = (0, getAllFileStreamSingletonKeys_1.getAllFileStreamSingletonKeys)();
                if (allKeys.includes(key)) {
                    throw new exports.FileStreamToOpenAlreadyOpenError({
                        message: "FileStream to open is already open",
                        payload: { filePath: filePath },
                    });
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                // Ensure the file and its directories exist
                return [4 /*yield*/, (0, createFileAndFolderIfDoesntExist_1.createFileAndFolderIfDoesntExist)(filePath)];
            case 2:
                // Ensure the file and its directories exist
                _a.sent();
                if (allKeys.length === 0) {
                    (0, addProcessListener_1.addProcessListeners)();
                }
                setSingletonIfNotExists(key, function () {
                    var theOptions = {
                        dest: filePath,
                        mkdir: (options === null || options === void 0 ? void 0 : options.mkDir) !== undefined ? options.mkDir : true,
                        sync: (options === null || options === void 0 ? void 0 : options.sync) !== undefined ? options.sync : false,
                        minLength: (options === null || options === void 0 ? void 0 : options.minBufferSize) !== undefined ? options.minBufferSize : 4096,
                    };
                    var instance = new sonic_boom_1.default(theOptions);
                    var onExitCB = function () { return __awaiter(void 0, void 0, void 0, function () {
                        var called, attempt, err_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    called = false;
                                    if (!!called) return [3 /*break*/, 7];
                                    attempt = 0;
                                    _a.label = 1;
                                case 1:
                                    if (!(attempt < 5)) return [3 /*break*/, 6];
                                    _a.label = 2;
                                case 2:
                                    _a.trys.push([2, 3, , 5]);
                                    instance.flushSync();
                                    return [3 /*break*/, 6]; // Exit the loop if flushSync succeeds
                                case 3:
                                    err_2 = _a.sent();
                                    if (attempt === 4) {
                                        throw new exports.ExitingFileStreamFailedError({
                                            message: "Unexpected error while finalizing File-Stream by flushing it and ending the instance",
                                            origin: err_2,
                                            payload: { filePath: filePath, options: options },
                                        });
                                    }
                                    return [4 /*yield*/, (0, utils_1.delay)(1000)];
                                case 4:
                                    _a.sent(); // Wait for 1000ms before retrying
                                    return [3 /*break*/, 5];
                                case 5:
                                    attempt++;
                                    return [3 /*break*/, 1];
                                case 6:
                                    instance.end();
                                    removeSingleton(key);
                                    called = true;
                                    _a.label = 7;
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); };
                    return {
                        instance: instance,
                        onExitCB: onExitCB,
                    };
                });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                throw new exports.OpenFileStreamFailedError({
                    message: "Unexpected error opening the FileStream",
                    origin: err_1,
                    payload: { filePath: filePath, options: options },
                });
            case 4: return [2 /*return*/, key];
        }
    });
}); };
exports.openFileStream = openFileStream;
//# sourceMappingURL=openFileStream.js.map