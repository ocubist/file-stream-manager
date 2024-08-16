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
exports.TransmutedError = void 0;
var uuid_1 = require("uuid");
var defaultValues_1 = require("../config/defaultValues");
var isErrorCode_1 = require("../error-code/isErrorCode");
var severityDescriptionMap_1 = require("../severity/severityDescriptionMap");
var createIdentifier_1 = require("../utility/createIdentifier");
/**
 * Class representing a transmuted error.
 *
 * @extends Error
 */
var TransmutedError = /** @class */ (function (_super) {
    __extends(TransmutedError, _super);
    /**
     * Constructs a new TransmutedError.
     *
     * @param {TransmutedErrorProps} props - The properties of the transmuted error.
     */
    function TransmutedError(props) {
        var _this = _super.call(this, props.message) || this;
        // * Set the prototype explicitly to ensure correct inheritance
        Object.setPrototypeOf(_this, TransmutedError.prototype);
        // * Initialize temporary Props to collect Data
        var transmutedErrorProps = {
            name: props.name,
            message: props.message,
        };
        // * If origin is provided and origin is Error
        var originProps = {};
        if (props.origin instanceof Error) {
            var err = props.origin;
            // @ts-ignore
            if (err.hasOwnProperty("origin") && typeof err.cause === "string") {
                // @ts-ignore
                originProps.cause = err.cause;
            }
            else {
                originProps.cause = undefined;
            }
        }
        if (props.origin instanceof TransmutedError) {
            originProps.module = props.origin.module;
            originProps.context = props.origin.context;
            originProps.errorCode = props.origin.errorCode;
            originProps.severity = props.origin.severity;
        }
        // * Fill the Member-Variables
        var _a = __assign(__assign({}, originProps), props), message = _a.message, name = _a.name, cause = _a.cause, errorCode = _a.errorCode, origin = _a.origin, payload = _a.payload, severity = _a.severity, context = _a.context, module = _a.module;
        _this.instanceUuid = (0, uuid_1.v4)();
        _this.name = name;
        _this.severity = severity !== null && severity !== void 0 ? severity : defaultValues_1.DEFAULT_SEVERITY;
        _this.origin = origin;
        _this.cause = cause;
        _this.payload = payload !== null && payload !== void 0 ? payload : {};
        _this.module = module;
        _this.context = context;
        if (errorCode && (0, isErrorCode_1.isErrorCode)(errorCode)) {
            _this.errorCode = errorCode;
        }
        else {
            _this.errorCode = defaultValues_1.DEFAULT_ERROR_CODE;
        }
        // * Maintaining the correct stack trace
        if (origin instanceof Error) {
            _this.stack = origin.stack;
        }
        else if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, TransmutedError);
        }
        else {
            _this.stack = new Error(transmutedErrorProps.message).stack;
        }
        return _this;
    }
    Object.defineProperty(TransmutedError.prototype, "severityDescription", {
        /**
         * Get a description of the severity level.
         *
         * @returns {string} The severity description.
         */
        get: function () {
            return severityDescriptionMap_1.severityDescriptionMap[this.severity];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransmutedError.prototype, "simpleGetter", {
        /**
         * A simple getter method.
         *
         * @returns {string} A fixed string "works".
         */
        get: function () {
            return "works";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransmutedError.prototype, "identifier", {
        /**
         * Get the unique identifier for the error.
         *
         * @returns {string} The unique identifier.
         */
        get: function () {
            return (0, createIdentifier_1.createIdentifier)({
                name: this.name,
                context: this.context,
                errorCode: this.errorCode,
                module: this.module,
            });
        },
        enumerable: false,
        configurable: true
    });
    return TransmutedError;
}(Error));
exports.TransmutedError = TransmutedError;
//# sourceMappingURL=TransmutedError.js.map