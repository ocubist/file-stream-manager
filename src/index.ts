// @index('./**/!(*.test|*.play).ts', f => `export * from "${f.path}";`, { ignore: ["./tests/**/*", "./play/**/*"] })
export * from "./_nodeEnvCheck";
export * from "./basic-functions/closeFileStream";
export * from "./basic-functions/openFileStream";
export * from "./basic-functions/readFileStream";
export * from "./basic-functions/writeFileStream";
export * from "./config/config";
export * from "./config/useFileStreamManagerSingleton";
export * from "./helpers/addProcessListener";
export * from "./helpers/createOpenFileStreamKey";
export * from "./helpers/getAllFileStreamSingletonKeys";
export * from "./helpers/removeProcessListeners";
export * from "./helpers/runAllStreamCleanupCallbacks";
export * from "./management/clearFile";
export * from "./management/flushFileStream";
export * from "./management/forceCloseOfAllFileStreams";
export * from "./subscriptionFunctions/subscribeToFileStream";
export * from "./subscriptionFunctions/unsubscribeFromFileStream";
export * from "./types/LoggerOptions";
export * from "./types/OpenFIleStreamSingletonObject";
export * from "./types/StreamOptionsType";
export * from "./useFileStreamManager/useFileStreamManager";
// @endindex
