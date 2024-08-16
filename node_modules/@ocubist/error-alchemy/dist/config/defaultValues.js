"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SEVERITY = exports.DEFAULT_ERROR_CODE = exports.DEFAULT_CONTEXT = exports.DEFAULT_MODULE = void 0;
var severitySelector_1 = require("../severity/severitySelector");
var errorCodeSelector_1 = require("../error-code/errorCodeSelector");
/**
 * Default module name used in error identifiers.
 * @type {string}
 */
exports.DEFAULT_MODULE = "unknown_module";
/**
 * Default context used in error identifiers.
 * @type {string}
 */
exports.DEFAULT_CONTEXT = "unknown_context";
/**
 * Default error code used in error identifiers.
 * @type {ErrorCode}
 */
exports.DEFAULT_ERROR_CODE = errorCodeSelector_1.errorCodeSelector.UNKNOWN_ERROR;
/**
 * Default severity level for errors.
 * @type {Severity}
 */
exports.DEFAULT_SEVERITY = severitySelector_1.severitySelector.unexpected;
//# sourceMappingURL=defaultValues.js.map