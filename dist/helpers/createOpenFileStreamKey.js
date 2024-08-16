"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOpenFileStreamKey = void 0;
var config_1 = require("../config/config");
var createOpenFileStreamKey = function (filePath) {
    return config_1.config.openStreamSingletonKeyPrefix + filePath;
};
exports.createOpenFileStreamKey = createOpenFileStreamKey;
//# sourceMappingURL=createOpenFileStreamKey.js.map