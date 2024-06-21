export declare const LOG_LEVEL_DEBUG = -1;
export declare const LOG_LEVEL_VERBOSE = 1;
export declare const LOG_LEVEL_INFO = 10;
export declare const LOG_LEVEL_NOTICE = 100;
export declare const LOG_LEVEL_URGENT = 1000;
export type LOG_LEVEL = typeof LOG_LEVEL_DEBUG | typeof LOG_LEVEL_VERBOSE | typeof LOG_LEVEL_INFO | typeof LOG_LEVEL_NOTICE | typeof LOG_LEVEL_URGENT;
export declare const LEVEL_DEBUG = -1;
export declare const LEVEL_INFO = 10;
export declare const LEVEL_NOTICE = 100;
export declare const LEVEL_URGENT = 1000;
export declare const LEVEL_VERBOSE = 1;
export type LoggerFunction = typeof defaultLogger;
export declare const defaultLoggerEnv: {
    minLogLevel: number;
};
declare const defaultLogger: (message: any, level?: LOG_LEVEL, key?: string) => void;
/**
 * Sets the global log function.
 *
 * @param logger - The logger function to set as the global log function.
 */
export declare function setGlobalLogFunction(logger: LoggerFunction): void;
/**
 * Logs a message with an optional log level and key.
 *
 * @param message - The message to be logged.
 * @param level - The log level (optional).
 * @param key - The key (optional).
 */
export declare function Logger(message: any, level?: LOG_LEVEL, key?: string): void;
export {};
