"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureNodeEnvironment = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
var utils_1 = require("@ocubist/utils");
var NotNodeEnvironmentError = (0, error_alchemy_1.useErrorAlchemy)("File-Stream-Manager", "nodeEnvCheck").craftSynthesizedError({
    name: "NotNodeEnvironmentError",
    cause: "Thrown because the environment is not node-server.",
});
var ensureNodeEnvironment = function () {
    if (!(0, utils_1.isServer)()) {
        throw new NotNodeEnvironmentError({
            message: "The File-Stream-Manager is made for usage with a Node-Server-Environment.",
        });
    }
};
exports.ensureNodeEnvironment = ensureNodeEnvironment;
//# sourceMappingURL=ensureNodeEnvironment.js.map