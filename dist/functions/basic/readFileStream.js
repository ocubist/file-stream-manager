"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.readFileStream = exports.FileToReadDoesNotExistError = exports.ReadFileStreamFailedError = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
var ensureNodeEnvironment_1 = require("../../helpers/ensureNodeEnvironment");
var craftMysticError = (0, error_alchemy_1.useErrorAlchemy)("file-stream-manager", "readFileStream").craftMysticError;
exports.ReadFileStreamFailedError = craftMysticError({
    name: "ReadFileStreamFailedError",
    severity: "critical",
});
exports.FileToReadDoesNotExistError = craftMysticError({
    name: "FileToReadDoesNotExistError",
    severity: "critical",
});
/**
 * Reads a file and returns its content as a string.
 *
 * This function reads the entire content of a file at the specified path and returns it
 * as a string. It does not require an open file stream, making it suitable for simple
 * read operations.
 *
 * @param {string} filePath - The path to the file to read.
 * @returns {Promise<string>} A promise that resolves to the file content as a string.
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 * @throws {FileToReadDoesNotExistError} Thrown if the file to read does not exist.
 * @throws {ReadFileStreamFailedError} Thrown if any unexpected error occurs while reading the file.
 */
var readFileStream = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var fs, data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, ensureNodeEnvironment_1.ensureNodeEnvironment)();
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("fs/promises")); })];
            case 1:
                fs = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, fs.readFile(filePath, "utf8")];
            case 3:
                data = _a.sent();
                return [2 /*return*/, data];
            case 4:
                err_1 = _a.sent();
                if (typeof err_1 === "object" &&
                    err_1.hasOwnProperty("code") &&
                    // @ts-ignore
                    err_1.code === "ENOENT") {
                    throw new exports.FileToReadDoesNotExistError({
                        message: "File to read does not exist",
                        origin: err_1,
                        payload: { filePath: filePath },
                    });
                }
                else {
                    throw new exports.ReadFileStreamFailedError({
                        message: "Unexpected Error trying to read a file",
                        origin: err_1,
                        payload: { filePath: filePath },
                    });
                }
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.readFileStream = readFileStream;
//# sourceMappingURL=readFileStream.js.map