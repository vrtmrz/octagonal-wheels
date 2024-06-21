export const LOG_LEVEL_DEBUG = -1;
export const LOG_LEVEL_VERBOSE = 1;
export const LOG_LEVEL_INFO = 10;
export const LOG_LEVEL_NOTICE = 100;
export const LOG_LEVEL_URGENT = 1000;

export type LOG_LEVEL = typeof LOG_LEVEL_DEBUG | typeof LOG_LEVEL_VERBOSE | typeof LOG_LEVEL_INFO | typeof LOG_LEVEL_NOTICE | typeof LOG_LEVEL_URGENT;

export const LEVEL_DEBUG = LOG_LEVEL_DEBUG;
export const LEVEL_INFO = LOG_LEVEL_INFO;
export const LEVEL_NOTICE = LOG_LEVEL_NOTICE;
export const LEVEL_URGENT = LOG_LEVEL_URGENT;
export const LEVEL_VERBOSE = LOG_LEVEL_VERBOSE;

export type LoggerFunction = typeof defaultLogger;

export const defaultLoggerEnv = {
    minLogLevel: LOG_LEVEL_INFO
}
const defaultLogger = function defaultLogger(message: any, level: LOG_LEVEL = LEVEL_INFO, key?: string) {
    if (level < defaultLoggerEnv.minLogLevel) {
        return;
    }
    const now = new Date();
    const timestamp = now.toLocaleString();
    const messageContent = typeof message == "string" ? message : message instanceof Error ? `${message.name}:${message.message}` : JSON.stringify(message, null, 2);
    if (message instanceof Error) {
        // debugger;
        console.dir(message.stack);
    }
    const newMessage = `${timestamp}\t${level}\t${messageContent}`;
    console.log(newMessage);
};

let _logger: LoggerFunction = defaultLogger;

/**
 * Sets the global log function.
 * 
 * @param logger - The logger function to set as the global log function.
 */
export function setGlobalLogFunction(logger: LoggerFunction) {
    _logger = logger;
}
/**
 * Logs a message with an optional log level and key.
 * 
 * @param message - The message to be logged.
 * @param level - The log level (optional).
 * @param key - The key (optional).
 */
export function Logger(message: any, level?: LOG_LEVEL, key?: string): void {
    _logger(message, level, key);
}
