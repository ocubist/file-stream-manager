"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Synthesizer = void 0;
var zod_1 = __importDefault(require("zod"));
var types_1 = require("../Transmuter/types");
/**
 * Zod schema for a synthesizer that contains a middleware chain and a synthesize function.
 */
exports.Synthesizer = zod_1.default.lazy(function () {
    return zod_1.default.object({
        middlewareChain: zod_1.default.array(types_1.Transmuter),
        synthesize: zod_1.default.function(zod_1.default.tuple([zod_1.default.unknown()]), zod_1.default.unknown()),
    });
});
//# sourceMappingURL=types.js.map