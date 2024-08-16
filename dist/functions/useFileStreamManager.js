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
exports.useFileStreamManager = void 0;
var closeFileStream_1 = require("./basic/closeFileStream");
var flushFileStream_1 = require("./basic/flushFileStream");
var openFileStream_1 = require("./basic/openFileStream");
var readFileStream_1 = require("./basic/readFileStream");
var writeFileStream_1 = require("./basic/writeFileStream");
var subscribeToFileStream_1 = require("./basic/subscribeToFileStream");
var unsubscribeFromFileStream_1 = require("./basic/unsubscribeFromFileStream");
var ensureNodeEnvironment_1 = require("../helpers/ensureNodeEnvironment");
var getFileStreamUsageCount_1 = require("./basic/getFileStreamUsageCount");
var isFileStreamOpen_1 = require("./basic/isFileStreamOpen");
/**
 * Provides file stream management functionalities.
 * This function returns an object that offers various methods to manage a file stream,
 * including opening, closing, reading, writing, flushing, subscribing, unsubscribing from the stream,
 * getting the usage count of the stream, and checking if a stream is open.
 *
 * @param {string} filePath - The path of the file to manage.
 * @returns {Object} An object with the following file stream management functions:
 *
 * @property {() => Promise<void>} open - Opens the file stream.
 *  Internally calls {@link openFileStream}. Throws errors if the environment is not Node.js or if the file stream fails to open.
 *
 * @property {() => Promise<void>} close - Closes the file stream.
 *  Internally calls {@link closeFileStream}. Throws errors if the environment is not Node.js or if the file stream fails to close.
 *
 * @property {(data: string) => boolean} write - Writes data to the file stream.
 *  Internally calls {@link writeFileStream}. Throws errors if the environment is not Node.js or if the file stream does not exist or fails to write.
 *
 * @property {() => Promise<string>} read - Reads the content of the file stream.
 *  Internally calls {@link readFileStream}. Throws errors if the environment is not Node.js or if the file does not exist or fails to read.
 *
 * @property {() => void} flush - Flushes the file stream, ensuring all buffered data is written to the file.
 *  Internally calls {@link flushFileStream}. Throws errors if the environment is not Node.js or if the file stream does not exist or fails to flush.
 *
 * @property {() => Promise<void>} subscribe - Subscribes to the file stream, incrementing its usage counter.
 *  Internally calls {@link subscribeToFileStream}. Throws errors if the environment is not Node.js or if subscribing fails.
 *
 * @property {() => Promise<void>} unsubscribe - Unsubscribes from the file stream, decrementing its usage counter.
 *  Internally calls {@link unsubscribeFromFileStream}. Closes the stream if the counter reaches zero.
 *  Throws errors if the environment is not Node.js or if unsubscribing fails.
 *
 * @property {() => number} getUsageCount - Retrieves the usage count (subscription count) for the file stream.
 *  Internally calls {@link getFileStreamUsageCount}. Throws errors if the environment is not Node.js or if the file stream does not exist or does not provide a counter.
 *
 * @property {() => boolean} isFileStreamOpen - Checks if the file stream is currently open.
 *  Internally calls {@link isFileStreamOpen}. Throws errors if the environment is not Node.js.
 *
 * @throws {NotNodeEnvironmentError} Thrown if the environment is not a Node.js server.
 */
var useFileStreamManager = function (filePath) {
    (0, ensureNodeEnvironment_1.ensureNodeEnvironment)();
    return {
        open: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, openFileStream_1.openFileStream)(filePath)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        close: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, closeFileStream_1.closeFileStream)(filePath)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        write: function (data) { return (0, writeFileStream_1.writeFileStream)(filePath, data); },
        read: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, readFileStream_1.readFileStream)(filePath)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        flush: function () { return (0, flushFileStream_1.flushFileStream)(filePath); },
        subscribe: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, subscribeToFileStream_1.subscribeToFileStream)(filePath)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        unsubscribe: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, unsubscribeFromFileStream_1.unsubscribeFromFileStream)(filePath)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        getUsageCount: function () { return (0, getFileStreamUsageCount_1.getFileStreamUsageCount)(filePath); },
        isFileStreamOpen: function () { return (0, isFileStreamOpen_1.isFileStreamOpen)(filePath); },
    };
};
exports.useFileStreamManager = useFileStreamManager;
//# sourceMappingURL=useFileStreamManager.js.map