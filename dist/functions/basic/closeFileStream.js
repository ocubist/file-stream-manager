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
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeFileStream = exports.FileStreamNotFoundError = exports.CloseFileStreamFailedError = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
var useFileStreamManagerSingleton_1 = require("../../config/useFileStreamManagerSingleton");
var createOpenFileStreamKey_1 = require("../../helpers/createOpenFileStreamKey");
var getAllFileStreamSingletonKeys_1 = require("../../helpers/getAllFileStreamSingletonKeys");
var removeProcessListeners_1 = require("../../helpers/removeProcessListeners");
var singleton_manager_1 = require("@ocubist/singleton-manager");
var ensureNodeEnvironment_1 = require("../../helpers/ensureNodeEnvironment");
var getSingleton = (0, useFileStreamManagerSingleton_1.useFileStreamManagerSingleton)().getSingleton;
var craftMysticError = (0, error_alchemy_1.useErrorAlchemy)("file-stream-manager", "closeFileStream").craftMysticError;
exports.CloseFileStreamFailedError = craftMysticError({
    name: "CloseFileStreamFailedError",
    severity: "critical",
});
exports.FileStreamNotFoundError = craftMysticError({
    name: "FileStreamNotFoundError",
    severity: "unimportant",
});
/**
 * Closes a file stream and removes it from the singleton manager.
 * Ensures that the file stream is properly closed, releasing any resources
 * associated with it and preventing memory leaks or resource exhaustion.
 *
 * @param {string} filePath - The path to the file whose stream should be closed.
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 * @throws {FileStreamNotFoundError} Thrown if the file stream to close is not found.
 * @throws {CloseFileStreamFailedError} Thrown if any unexpected error occurs during the closing process.
 */
var closeFileStream = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var singletonName, onExitCB, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, ensureNodeEnvironment_1.ensureNodeEnvironment)();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                singletonName = (0, createOpenFileStreamKey_1.createOpenFileStreamKey)(filePath);
                onExitCB = getSingleton(singletonName).onExitCB;
                // Typecast onExitCB to ensure it's recognized as an async function
                return [4 /*yield*/, onExitCB()];
            case 2:
                // Typecast onExitCB to ensure it's recognized as an async function
                _a.sent();
                if ((0, getAllFileStreamSingletonKeys_1.getAllFileStreamSingletonKeys)().length < 1) {
                    (0, removeProcessListeners_1.removeProcessListeners)();
                }
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                if (singleton_manager_1.SingletonDoesNotExistError.compare(err_1)) {
                    throw new exports.FileStreamNotFoundError({
                        message: "FileStream to close not found",
                        origin: err_1,
                        payload: {
                            filePath: filePath,
                        },
                    });
                }
                else {
                    throw new exports.CloseFileStreamFailedError({
                        message: "Unexpected error while closing the FileStream for file '".concat(filePath, "'"),
                        origin: err_1,
                        payload: { filePath: filePath },
                    });
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.closeFileStream = closeFileStream;
//# sourceMappingURL=closeFileStream.js.map