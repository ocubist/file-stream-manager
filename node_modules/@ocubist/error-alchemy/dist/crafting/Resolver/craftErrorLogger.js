"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.craftErrorLogger = void 0;
var TransmutedError_1 = require("../../transmuted-errors/TransmutedError");
/**
 * Crafts a new error logger with the given logger properties.
 *
 * @param {CraftErrorLoggerProps} props - The logger properties.
 * @returns {(err: unknown) => void} The crafted error logger function.
 */
var craftErrorLogger = function (props) {
    return function (err) {
        if (err instanceof TransmutedError_1.TransmutedError) {
            var severity = err.severity;
            var severityLogger = props[severity];
            if (severityLogger !== undefined) {
                severityLogger(err);
            }
            else
                props.default(err);
        }
        else {
            props.default(err);
        }
    };
};
exports.craftErrorLogger = craftErrorLogger;
//# sourceMappingURL=craftErrorLogger.js.map