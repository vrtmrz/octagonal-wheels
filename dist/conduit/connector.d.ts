/**
 * ConnectorFunc
 * @description
 * ConnectorFunc is a function that takes a set of arguments and returns a promise.
 * It is used to connect a function to a name, and then invoke that function later.
 * @param T the type of the arguments
 * @param U the type of the return value
 * @returns a promise that resolves to the return value of the function
 */
export type ConnectorFunc<T extends any[], U> = (...args: T) => U;
export type ConnectorWrappedFunc<T extends any[], U> = (...args: T) => U | Promise<Awaited<U>>;
/**
 * ConnectorInstance
 * @description
 * ConnectorInstance is a type that represents an instance of a class.
 * It is used to connect an instance to a name, and then retrieve that instance later.
 * @param T the type of the instance
 */
export type ConnectorInstance<T> = T;
/**
 * ConnectorFuncOf
 * @description
 * Connect and invoke a function via connector.
 * It is used to connect a function to a name, and then invoke that function later.
 * @param T the type of the arguments
 * @param U the type of the return value
 */
export interface ConnectorFuncOf<T extends any[], U> {
    /**
     * Connect a function to the connector
     * @description
     * @param func The function to connect
     */
    connect(func: ConnectorFunc<T, U>): void;
    /**
     * Invoke the connected function
     * @description If no function is connected yet, this will wait for the function to be connected and then invoke it.
     * @param args The arguments to pass to the function
     * @returns result of the function
     */
    invoke(...args: T): Promise<Awaited<U>>;
    /**
     * Invoke the connected function synchronously
     * @description If no function is connected yet, this will throw an error.
     * @param args The arguments to pass to the function
     * @returns result of the function
     */
    invokeSync(...args: T): U;
    /**
     * Disconnect the connected function
     * @description
     * This will remove the function from the connector and clear the connection.
     * @returns void
     */
    disconnect(): void;
}
/**
 * ConnectorInstanceOf
 * @description
 * Connect and get an instance via connector.
 * It is used to connect an instance to a name, and then retrieve that instance later.
 * @param T the type of the instance
 * @returns a promise that resolves to the instance
 */
export interface ConnectorInstanceOf<T> {
    /**
     * Connect an instance to the connector
     * @description
     * @param obj The instance to connect
     */
    connect(obj: T): void;
    /**
     * Get the connected instance
     * @description
     * @returns a promise that resolves to the connected instance
     */
    connected(): Promise<T>;
    /**
     * Disconnect the connected instance
     * @description
     * This will remove the instance from the connector and clear the connection.
     * @returns void
     */
    disconnect(): void;
}
/**
 * Connector
 * @description
 * Connector is a utility class that allows you to connect functions and instances.
 * It provides a way to connect a function or an instance to a name, and then invoke that function or instance later.
 */
export declare const Connector: {
    /**
     * Get a function connector
     * @description
     * This method returns a function connector that allows you to connect a function to a name and then invoke that function later.
     * @param name
     * @returns <ConnectorFuncOf<T, U>>
     */
    funcOf<T extends any[], U>(name: string): ConnectorFuncOf<T, U>;
    /**
     * Connect a instance to the name
     * @description
     * This method returns a instance connector that allows you to connect a instance to a name and then retrieve that instance later.
     * @param name
     * @returns
     */
    instanceOf<T>(name: string): ConnectorInstanceOf<T>;
};
