"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFileStreamSingletonKeys = void 0;
var useFileStreamManagerSingleton_1 = require("../config/useFileStreamManagerSingleton");
var config_1 = require("../config/config");
var getAllSingletonKeys = (0, useFileStreamManagerSingleton_1.useFileStreamManagerSingleton)().getAllSingletonKeys;
var getAllFileStreamSingletonKeys = function () {
    return getAllSingletonKeys().filter(function (key) {
        return key.startsWith(config_1.config.openStreamSingletonKeyPrefix);
    });
};
exports.getAllFileStreamSingletonKeys = getAllFileStreamSingletonKeys;
//# sourceMappingURL=getAllFileStreamSingletonKeys.js.map