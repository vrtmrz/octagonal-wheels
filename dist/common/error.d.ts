interface ErrorWithCause extends Error {
    cause?: unknown;
}
/**
 * Error class for Self-hosted LiveSync errors.
 * This class extends the base LiveSyncError class and provides additional context for errors related to LiveSync operations.
 * It includes a name property and a cause property to capture the original error.
 * The status property returns the HTTP status code if available, defaulting to 500 for internal server errors.
 * The class also includes static methods to check whether an error is caused by a specific error class.
 */
export declare class LSError extends Error implements ErrorWithCause {
    name: string;
    cause?: Error;
    overrideStatus?: number;
    /**
     * Returns the HTTP status code associated with the error, if available.
     * If the error has a status property, it returns that; otherwise, it defaults to 500 (Internal Server Error).
     * @returns {number} The HTTP status code.
     */
    get status(): number;
    /**
     * Constructs a new LiveSyncError instance.
     * @param message The error message to be displayed.
     */
    constructor(message: string, options?: {
        cause?: unknown;
        status?: number;
    });
    /**
     * Determines whether an error is caused by a specific error class.
     * @param error The error to examine.
     * @param errorClass The error class to compare against.
     * @returns True if the error is caused by the specified error class; otherwise, false.
     * @example
     * LiveSyncError.isCausedBy(someSyncParamsFetchError, SyncParamsNotFoundError); // Returns true if the error is caused by SyncParamsNotFoundError; this is usually represented as SyncParamsFetchError at the uppermost layer.
     */
    static isCausedBy<T extends LSError>(error: any, errorClass: new (...args: any[]) => T): boolean;
    /**
     * Creates a new instance of the error class from an existing error.
     * @param error The error to wrap.
     * @returns A new instance of the error class with the original error's message and stack trace.
     */
    static fromError<T extends typeof LSError>(this: T, error: any): InstanceType<T>;
}
export declare class LSFatalError extends LSError {
}
export declare function wrapError<T>(func: () => Promise<Awaited<T>>): Promise<Awaited<T> | LSError>;
export {};
