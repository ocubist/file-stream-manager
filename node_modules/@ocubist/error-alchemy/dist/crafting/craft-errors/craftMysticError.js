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
exports.craftMysticError = void 0;
var uuid_1 = require("uuid");
var MysticError_1 = require("../../transmuted-errors/MysticError");
/**
 * Crafts a new mystic error class with the given properties.
 *
 * @param {CraftErrorProps} props - The properties to craft the mystic error.
 * @returns {typeof MysticError} The crafted mystic error class.
 */
var craftMysticError = function (props) {
    var craftProps = props;
    var dynamicUUID = (0, uuid_1.v4)();
    /**
     * Class representing a crafted mystic error.
     *
     * @extends MysticError
     */
    var CraftedMysticError = /** @class */ (function (_super) {
        __extends(CraftedMysticError, _super);
        /**
         * Constructs a new CraftedMysticError.
         *
         * @param {CraftedErrorProps} props - The properties of the crafted mystic error.
         */
        function CraftedMysticError(props) {
            var _this = _super.call(this, __assign(__assign({}, craftProps), props)) || this;
            // Set the prototype explicitly.
            Object.setPrototypeOf(_this, CraftedMysticError.prototype);
            _this.dynamicClassUuid = dynamicUUID;
            return _this;
        }
        /**
         * Compares an unknown error to determine if it is an instance of CraftedMysticError.
         *
         * @param {unknown} err - The error to compare.
         * @returns {boolean} True if the error is an instance of CraftedMysticError, false otherwise.
         */
        CraftedMysticError.compare = function (err) {
            return err instanceof CraftedMysticError;
        };
        return CraftedMysticError;
    }(MysticError_1.MysticError));
    return CraftedMysticError;
};
exports.craftMysticError = craftMysticError;
//# sourceMappingURL=craftMysticError.js.map