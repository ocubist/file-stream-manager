"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CraftedErrorProps = exports.CraftErrorProps = void 0;
var zod_1 = __importDefault(require("zod"));
var types_1 = require("../../severity/types");
var types_2 = require("../../error-code/types");
var types_3 = require("../../transmuted-errors/types");
/**
 * Zod schema for the properties required to craft an error.
 */
exports.CraftErrorProps = zod_1.default.object({
    name: zod_1.default.string(),
    severity: types_1.Severity.optional(),
    cause: zod_1.default.string().optional(),
    module: zod_1.default.string().optional(),
    context: zod_1.default.string().optional(),
    errorCode: types_2.ErrorCode.optional(),
});
/**
 * Zod schema for the properties of a crafted error.
 */
exports.CraftedErrorProps = zod_1.default.object({
    message: zod_1.default.string(),
    origin: zod_1.default.unknown().optional(),
    payload: types_3.Payload.optional(),
});
//# sourceMappingURL=types.js.map