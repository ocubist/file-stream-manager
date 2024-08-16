"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transmuter = exports.TransmuterFunction = exports.DetectorFunction = void 0;
var zod_1 = __importDefault(require("zod"));
var MysticError_1 = require("../../transmuted-errors/MysticError");
var SynthesizedError_1 = require("../../transmuted-errors/SynthesizedError");
/**
 * Zod schema for a detector function that checks if an error matches certain criteria.
 */
exports.DetectorFunction = zod_1.default.function(zod_1.default.tuple([zod_1.default.unknown()]), zod_1.default.boolean());
/**
 * Zod schema for a transmuter function that transforms an error into either a SynthesizedError or a MysticError.
 */
exports.TransmuterFunction = zod_1.default.function(zod_1.default.tuple([zod_1.default.unknown()]), zod_1.default.union([zod_1.default.instanceof(SynthesizedError_1.SynthesizedError), zod_1.default.instanceof(MysticError_1.MysticError)]));
/**
 * Zod schema for a transmuter that contains a detector, a transmuter function, and an execute function.
 */
exports.Transmuter = zod_1.default.object({
    detect: exports.DetectorFunction,
    transmute: exports.TransmuterFunction,
    execute: zod_1.default.function(zod_1.default.tuple([zod_1.default.unknown()]), zod_1.default.unknown()),
});
//# sourceMappingURL=types.js.map