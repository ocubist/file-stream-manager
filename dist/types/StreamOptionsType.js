"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStreamOptions = void 0;
var zod_1 = __importDefault(require("zod"));
/**
 * Schema for validating the structure of the FileStreamOptions.
 */
exports.FileStreamOptions = zod_1.default.object({
    sync: zod_1.default.boolean().optional(),
    mkDir: zod_1.default.boolean().optional(),
    minBufferSize: zod_1.default.number().optional(),
    flushInterval: zod_1.default.number().optional(),
});
//# sourceMappingURL=StreamOptionsType.js.map