"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIdentifier = void 0;
var defaultValues_1 = require("../config/defaultValues");
var escapeIdentifierPart_1 = require("./escapeIdentifierPart");
/**
 * Creates an identifier string from the given properties.
 *
 * @param {IdentifierProps} props - The properties used to create the identifier.
 * @param {string} props.name - The name part of the identifier.
 * @param {string} [props.module] - The module part of the identifier. Defaults to DEFAULT_MODULE if not provided.
 * @param {string} [props.context] - The context part of the identifier. Defaults to DEFAULT_CONTEXT if not provided.
 * @param {ErrorCode} [props.errorCode] - The error code part of the identifier.
 *
 * @returns {string} The constructed identifier.
 */
var createIdentifier = function (props) {
    var name = (0, escapeIdentifierPart_1.escapeIdentifierPart)(props.name);
    var errorCode = props.errorCode;
    var module = props.module
        ? (0, escapeIdentifierPart_1.escapeIdentifierPart)(props.module)
        : defaultValues_1.DEFAULT_MODULE;
    var context = props.context
        ? (0, escapeIdentifierPart_1.escapeIdentifierPart)(props.context)
        : defaultValues_1.DEFAULT_CONTEXT;
    return "".concat(name, "/").concat(module, "/").concat(context, "/").concat(errorCode);
};
exports.createIdentifier = createIdentifier;
//# sourceMappingURL=createIdentifier.js.map