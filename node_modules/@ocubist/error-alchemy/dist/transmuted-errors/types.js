"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransmutedErrorProps = exports.Payload = void 0;
var zod_1 = require("zod");
var types_1 = require("../severity/types");
var types_2 = require("../error-code/types");
/**
 * Zod schema for the payload of an error.
 */
exports.Payload = zod_1.z.record(zod_1.z.unknown());
/**
 * Zod schema for the properties of a TransmutedError.
 */
exports.TransmutedErrorProps = zod_1.z.object({
    message: zod_1.z.string(),
    name: zod_1.z.string(),
    severity: types_1.Severity.optional(),
    origin: zod_1.z.unknown().optional(),
    cause: zod_1.z.string().optional(),
    payload: exports.Payload.optional(),
    module: zod_1.z.string().optional(),
    context: zod_1.z.string().optional(),
    errorCode: types_2.ErrorCode.optional(),
});
//# sourceMappingURL=types.js.map