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
exports.unsubscribeFromFileStream = exports.FileStreamToUnsubscribeDoesNotExist = exports.NoSubscriptionsFoundError = exports.UnsubscribeFromFileStreamFailedError = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
var useFileStreamManagerSingleton_1 = require("../../config/useFileStreamManagerSingleton");
var createOpenFileStreamKey_1 = require("../../helpers/createOpenFileStreamKey");
var closeFileStream_1 = require("./closeFileStream");
var singleton_manager_1 = require("@ocubist/singleton-manager");
var ensureNodeEnvironment_1 = require("../../helpers/ensureNodeEnvironment");
var getSingleton = (0, useFileStreamManagerSingleton_1.useFileStreamManagerSingleton)().getSingleton;
var craftMysticError = (0, error_alchemy_1.useErrorAlchemy)("file-stream-manager", "unsubscribeFromFileStream").craftMysticError;
exports.UnsubscribeFromFileStreamFailedError = craftMysticError({
    name: "UnsubscribeFromFileStreamFailedError",
    severity: "critical",
});
exports.NoSubscriptionsFoundError = craftMysticError({
    name: "NoSubscriptionsFoundError",
    severity: "critical",
    cause: "The counter for the subscriptions to that fileStream was undefined, which indicates, that the fileStream was not created by using 'subscribeToFileStream'",
});
exports.FileStreamToUnsubscribeDoesNotExist = craftMysticError({
    name: "FileStreamToUnsubscribeDoesNotExist",
    severity: "critical",
    cause: "The counter for the subscriptions to that fileStream was undefined, which indicates, that the fileStream was not created by using 'subscribeToFileStream'",
});
/**
 * Unsubscribes from a file stream, decrementing its usage counter.
 * If the counter reaches zero, the file stream is closed automatically.
 *
 * @param {string} filePath - Path to the file of the stream to unsubscribe from.
 * @returns {Promise<void>} A promise that resolves when the unsubscription is successful.
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 * @throws {NoSubscriptionsFoundError} Thrown if no subscriptions are found for the file stream.
 * @throws {FileStreamToUnsubscribeDoesNotExist} Thrown if the file stream to unsubscribe from does not exist.
 * @throws {UnsubscribeFromFileStreamFailedError} Thrown if an unexpected error occurs while unsubscribing from the file stream.
 */
var unsubscribeFromFileStream = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var key, obj, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, ensureNodeEnvironment_1.ensureNodeEnvironment)();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                key = (0, createOpenFileStreamKey_1.createOpenFileStreamKey)(filePath);
                obj = getSingleton(key);
                if (obj.counter === undefined) {
                    throw new exports.NoSubscriptionsFoundError({
                        message: "No subscriptions for that stream found.",
                        payload: { filePath: filePath },
                    });
                }
                obj.counter--;
                if (!(obj.counter <= 0)) return [3 /*break*/, 3];
                // obj.instance.end();
                // obj.onExitCB();
                return [4 /*yield*/, (0, closeFileStream_1.closeFileStream)(filePath)];
            case 2:
                // obj.instance.end();
                // obj.onExitCB();
                _a.sent();
                _a.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                if (singleton_manager_1.SingletonDoesNotExistError.compare(err_1)) {
                    throw new exports.FileStreamToUnsubscribeDoesNotExist({
                        message: "No subscriptions for that stream found.",
                        payload: { filePath: filePath },
                        origin: err_1,
                    });
                }
                else if (exports.NoSubscriptionsFoundError.compare(err_1)) {
                    throw err_1;
                }
                else {
                    throw new exports.UnsubscribeFromFileStreamFailedError({
                        message: "Unexpected Error while unsubscribing from a FileStream",
                        origin: err_1,
                        payload: { filePath: filePath },
                    });
                }
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.unsubscribeFromFileStream = unsubscribeFromFileStream;
//# sourceMappingURL=unsubscribeFromFileStream.js.map