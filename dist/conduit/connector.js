import { promiseWithResolver } from '../promises.js';

function getFuncOf(name) {
    let connectedFunction;
    let connectedFunctionTask = promiseWithResolver();
    const inst = {
        connect: (func) => {
            if (connectedFunction) {
                inst.disconnect();
            }
            connectedFunctionTask.resolve(func);
            connectedFunction = func;
        },
        invoke: async (...args) => {
            if (connectedFunction) {
                return await connectedFunction(...args);
            }
            const func = await connectedFunctionTask.promise;
            return await func(...args);
        },
        invokeSync: (...args) => {
            if (!connectedFunction) {
                throw new Error(`Function not connected: ${name}`);
            }
            return connectedFunction(...args);
        },
        disconnect: () => {
            connectedFunction = undefined;
            connectedFunctionTask = promiseWithResolver();
        }
    };
    return inst;
}
function getInstanceOf(name) {
    let connectedInstance = promiseWithResolver();
    let instance = undefined;
    const inst = {
        connect: (obj) => {
            if (instance) {
                inst.disconnect();
            }
            connectedInstance.resolve(obj);
            instance = obj;
        },
        connected: async () => {
            if (instance) {
                return instance;
            }
            return await connectedInstance.promise;
        },
        disconnect: () => {
            instance = undefined;
            connectedInstance = promiseWithResolver();
        }
    };
    return inst;
}
const connectedFunctionsOf = new Map();
const connectedInstancesOf = new Map();
/**
 * Connector
 * @description
 * Connector is a utility class that allows you to connect functions and instances.
 * It provides a way to connect a function or an instance to a name, and then invoke that function or instance later.
 */
const Connector = {
    /**
     * Get a function connector
     * @description
     * This method returns a function connector that allows you to connect a function to a name and then invoke that function later.
     * @param name
     * @returns <ConnectorFuncOf<T, U>>
     */
    funcOf(name) {
        if (connectedFunctionsOf.has(name)) {
            return connectedFunctionsOf.get(name);
        }
        const func = getFuncOf(name);
        connectedFunctionsOf.set(name, func);
        return func;
    },
    /**
     * Connect a instance to the name
     * @description
     * This method returns a instance connector that allows you to connect a instance to a name and then retrieve that instance later.
     * @param name
     * @returns
     */
    instanceOf(name) {
        if (connectedInstancesOf.has(name)) {
            return connectedInstancesOf.get(name);
        }
        const instance = getInstanceOf();
        connectedInstancesOf.set(name, instance);
        return instance;
    }
};

export { Connector };
//# sourceMappingURL=connector.js.map
