import * as binary_index from './binary/index.js';
export { binary_index as binary };
import * as common_index from './common/index.js';
export { common_index as common };
import * as concurrency_index from './concurrency/index.js';
export { concurrency_index as concurrency };
import * as dataobject_index from './dataobject/index.js';
export { dataobject_index as dataobject };
import * as databases_index from './databases/index.js';
export { databases_index as databases };
import * as hash_index from './hash/index.js';
export { hash_index as hash };
import * as memory_index from './memory/index.js';
export { memory_index as memory };
import * as messagepassing_index from './messagepassing/index.js';
export { messagepassing_index as messagepassing };
import * as collection from './collection.js';
export { collection };
import * as _function from './function.js';
export { _function as function };
import * as object from './object.js';
export { object };
import * as promises from './promises.js';
export { promises };
import * as string from './string.js';
export { string };

/**
 * Returns the version of the library.
 * If the version is not available, it returns "dev".
 *
 * @returns The version of the library.
 */
function libVersion() {
    return "octagonal-wheels-0.1.6" ;
}

export { libVersion };
//# sourceMappingURL=index.js.map
