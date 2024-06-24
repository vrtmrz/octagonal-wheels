const LOG_LEVEL_DEBUG = -1;
const LOG_LEVEL_VERBOSE = 1;
const LOG_LEVEL_INFO = 10;
const LOG_LEVEL_NOTICE = 100;
const LOG_LEVEL_URGENT = 1000;
const LEVEL_DEBUG = LOG_LEVEL_DEBUG;
const LEVEL_INFO = LOG_LEVEL_INFO;
const LEVEL_NOTICE = LOG_LEVEL_NOTICE;
const LEVEL_URGENT = LOG_LEVEL_URGENT;
const LEVEL_VERBOSE = LOG_LEVEL_VERBOSE;
const defaultLoggerEnv = {
    minLogLevel: LOG_LEVEL_INFO
};
const defaultLogger = function defaultLogger(message, level = LEVEL_INFO, key) {
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
let _logger = defaultLogger;
/**
 * Sets the global log function.
 *
 * @param logger - The logger function to set as the global log function.
 */
function setGlobalLogFunction(logger) {
    _logger = logger;
}
/**
 * Logs a message with an optional log level and key.
 *
 * @param message - The message to be logged.
 * @param level - The log level (optional).
 * @param key - The key (optional).
 */
function Logger(message, level, key) {
    _logger(message, level, key);
}

var logger = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LEVEL_DEBUG: LEVEL_DEBUG,
    LEVEL_INFO: LEVEL_INFO,
    LEVEL_NOTICE: LEVEL_NOTICE,
    LEVEL_URGENT: LEVEL_URGENT,
    LEVEL_VERBOSE: LEVEL_VERBOSE,
    LOG_LEVEL_DEBUG: LOG_LEVEL_DEBUG,
    LOG_LEVEL_INFO: LOG_LEVEL_INFO,
    LOG_LEVEL_NOTICE: LOG_LEVEL_NOTICE,
    LOG_LEVEL_URGENT: LOG_LEVEL_URGENT,
    LOG_LEVEL_VERBOSE: LOG_LEVEL_VERBOSE,
    Logger: Logger,
    defaultLoggerEnv: defaultLoggerEnv,
    setGlobalLogFunction: setGlobalLogFunction
});

export { Logger as L, LOG_LEVEL_VERBOSE as a, LOG_LEVEL_DEBUG as b, LOG_LEVEL_INFO as c, LOG_LEVEL_NOTICE as d, LOG_LEVEL_URGENT as e, LEVEL_DEBUG as f, LEVEL_INFO as g, LEVEL_NOTICE as h, LEVEL_URGENT as i, LEVEL_VERBOSE as j, defaultLoggerEnv as k, logger as l, setGlobalLogFunction as s };
//# sourceMappingURL=logger-CnLpH2F2.js.map
