"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
var zod_1 = __importDefault(require("zod"));
var errorCodeSelector_1 = require("./errorCodeSelector");
// * Zod-Schema
// Extract the values from errorCodeSelector into an array
var errorCodeValues = Object.values(errorCodeSelector_1.errorCodeSelector);
// Cast errorCodeValues to a tuple type expected by Zod
var errorCodeTuple = errorCodeValues;
/**
 * Zod schema for validating error codes.
 */
exports.ErrorCode = zod_1.default.enum(errorCodeTuple);
//# sourceMappingURL=types.js.map