"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeIdentifierPart = void 0;
/**
 * Escapes a part of an identifier by replacing certain characters and trimming whitespace.
 *
 * @param {string} part - The part of the identifier to escape.
 * @returns {string} The escaped identifier part.
 */
var escapeIdentifierPart = function (part) {
    return part.replace("///g", "__").trim();
};
exports.escapeIdentifierPart = escapeIdentifierPart;
//# sourceMappingURL=escapeIdentifierPart.js.map