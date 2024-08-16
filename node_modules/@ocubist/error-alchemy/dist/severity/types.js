"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Severity = void 0;
var zod_1 = __importDefault(require("zod"));
var severitySelector_1 = require("./severitySelector");
// * Zod-Schema
// Extract the values from severitySelector into an array
var values = Object.values(severitySelector_1.severitySelector);
// Cast values to a tuple type expected by Zod
var severityTuple = values;
/**
 * Zod schema for validating severity levels.
 */
exports.Severity = zod_1.default.enum(severityTuple);
//# sourceMappingURL=types.js.map