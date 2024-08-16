"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlchemyPropsValidationError = exports.stringifyZodErrorValidationDetails = exports.extractZodErrorValidationDetails = exports.ZodErrorValidationDetails = void 0;
var zod_1 = require("zod");
/**
 * ZodErrorValidationDetails schema.
 */
exports.ZodErrorValidationDetails = zod_1.z.object({
    path: zod_1.z.string(),
    msg: zod_1.z.string(),
});
/**
 * Extracts validation details from a ZodError.
 *
 * @param {ZodError} zod - The ZodError to extract details from.
 * @returns {ZodErrorValidationDetails[]} An array of validation details.
 */
var extractZodErrorValidationDetails = function (zod) {
    return zod.errors.map(function (e) {
        return {
            path: e.path.join("."),
            msg: e.message,
        };
    });
};
exports.extractZodErrorValidationDetails = extractZodErrorValidationDetails;
/**
 * Converts an array of ZodErrorValidationDetails to a string.
 *
 * @param {ZodErrorValidationDetails[]} validationDetails - The validation details to stringify.
 * @returns {string} The stringified validation details.
 */
var stringifyZodErrorValidationDetails = function (validationDetails) {
    return validationDetails
        .map(function (vd) {
        return "".concat(vd.path, ": ").concat(vd.msg);
    })
        .join(" | ");
};
exports.stringifyZodErrorValidationDetails = stringifyZodErrorValidationDetails;
/**
 * Error class for property validation errors using Zod.
 */
var AlchemyPropsValidationError = /** @class */ (function (_super) {
    __extends(AlchemyPropsValidationError, _super);
    /**
     * Constructs a new AlchemyPropsValidationError.
     *
     * @param {ZodError} zodError - The ZodError that caused the validation error.
     */
    function AlchemyPropsValidationError(zodError) {
        var _this = _super.call(this, "Props failed to validate: '".concat((0, exports.stringifyZodErrorValidationDetails)((0, exports.extractZodErrorValidationDetails)(zodError)), "'")) || this;
        _this.zodError = zodError;
        return _this;
    }
    return AlchemyPropsValidationError;
}(Error));
exports.AlchemyPropsValidationError = AlchemyPropsValidationError;
//# sourceMappingURL=PropsValidationError.js.map