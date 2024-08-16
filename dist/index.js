"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// @index('./**/!(*.test|*.play).ts', f => `export * from "${f.path}";`, { ignore: ["./tests/**/*", "./play/**/*"] })
__exportStar(require("./config/config"), exports);
__exportStar(require("./config/useFileStreamManagerSingleton"), exports);
__exportStar(require("./functions/basic/closeFileStream"), exports);
__exportStar(require("./functions/basic/flushFileStream"), exports);
__exportStar(require("./functions/basic/getFileStreamUsageCount"), exports);
__exportStar(require("./functions/basic/isFileStreamOpen"), exports);
__exportStar(require("./functions/basic/openFileStream"), exports);
__exportStar(require("./functions/basic/readFileStream"), exports);
__exportStar(require("./functions/basic/subscribeToFileStream"), exports);
__exportStar(require("./functions/basic/unsubscribeFromFileStream"), exports);
__exportStar(require("./functions/basic/writeFileStream"), exports);
__exportStar(require("./functions/useFileStreamManager"), exports);
__exportStar(require("./functions/utility/forceCloseOfAllFileStreams"), exports);
__exportStar(require("./functions/utility/getOpenFileStreams"), exports);
__exportStar(require("./helpers/addProcessListener"), exports);
__exportStar(require("./helpers/createFileAndFolderIfDoesntExist"), exports);
__exportStar(require("./helpers/createOpenFileStreamKey"), exports);
__exportStar(require("./helpers/ensureNodeEnvironment"), exports);
__exportStar(require("./helpers/getAllFileStreamSingletonKeys"), exports);
__exportStar(require("./helpers/removeProcessListeners"), exports);
__exportStar(require("./helpers/runAllStreamCleanupCallbacks"), exports);
__exportStar(require("./types/LoggerOptions"), exports);
__exportStar(require("./types/OpenFIleStreamSingletonObject"), exports);
__exportStar(require("./types/StreamOptionsType"), exports);
// @endindex
//# sourceMappingURL=index.js.map