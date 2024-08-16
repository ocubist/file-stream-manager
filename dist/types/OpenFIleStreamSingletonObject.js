"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenFileStreamSingletonObject = void 0;
var sonic_boom_1 = __importDefault(require("sonic-boom"));
var zod_1 = require("zod");
/**
 * Schema for validating the structure of the OpenFileStreamSingletonObject.
 */
exports.OpenFileStreamSingletonObject = zod_1.z.object({
    instance: zod_1.z.instanceof(sonic_boom_1.default),
    onExitCB: zod_1.z.function(),
    counter: zod_1.z.number().optional(),
});
//# sourceMappingURL=OpenFIleStreamSingletonObject.js.map