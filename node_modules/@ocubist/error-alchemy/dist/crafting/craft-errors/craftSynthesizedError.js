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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.craftSynthesizedError = void 0;
var uuid_1 = require("uuid");
var SynthesizedError_1 = require("../../transmuted-errors/SynthesizedError");
/**
 * Crafts a new synthesized error class with the given properties.
 *
 * @param {CraftErrorProps} props - The properties to craft the synthesized error.
 * @returns {typeof SynthesizedError} The crafted synthesized error class.
 */
var craftSynthesizedError = function (props) {
    var craftProps = props;
    var dynamicUUID = (0, uuid_1.v4)();
    /**
     * Class representing a crafted synthesized error.
     *
     * @extends SynthesizedError
     */
    var CraftedSynthesizedError = /** @class */ (function (_super) {
        __extends(CraftedSynthesizedError, _super);
        /**
         * Constructs a new CraftedSynthesizedError.
         *
         * @param {CraftedErrorProps} props - The properties of the crafted synthesized error.
         */
        function CraftedSynthesizedError(props) {
            var _this = _super.call(this, __assign(__assign({}, craftProps), props)) || this;
            // Set the prototype explicitly.
            Object.setPrototypeOf(_this, CraftedSynthesizedError.prototype);
            _this.dynamicClassUuid = dynamicUUID;
            return _this;
        }
        /**
         * Compares an unknown error to determine if it is an instance of CraftedSynthesizedError.
         *
         * @param {unknown} err - The error to compare.
         * @returns {boolean} True if the error is an instance of CraftedSynthesizedError, false otherwise.
         */
        CraftedSynthesizedError.compare = function (err) {
            return err instanceof CraftedSynthesizedError;
        };
        return CraftedSynthesizedError;
    }(SynthesizedError_1.SynthesizedError));
    return CraftedSynthesizedError;
};
exports.craftSynthesizedError = craftSynthesizedError;
//# sourceMappingURL=craftSynthesizedError.js.map