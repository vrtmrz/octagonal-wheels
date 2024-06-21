import type { SimpleStore } from "../databases/keyvalue";
export declare const PREFIX_TRENCH = "trench";
export declare const PREFIX_EPHEMERAL = "ephemeral";
export declare const PREFIX_PERMANENT = "permanent";
export type Evacuated<T> = () => Promise<T>;
export declare class Trench {
    _db: SimpleStore<any>;
    _flushTask: Promise<void> | undefined;
    constructor(db: SimpleStore<any>, flushExistItems?: boolean);
    eraseAllEphemerals(): Promise<void>;
    eraseAllPermanences(): Promise<void>;
    concealing: Map<string, any>;
    conceal<T>(obj: T): string;
    bury(key: string): Promise<void>;
    expose<T>(key: string): Promise<any>;
    _evacuate<T>(storeTask: Promise<void>, key: string): Evacuated<T>;
    evacuatePromise<T>(task: Promise<T>): Evacuated<T>;
    evacuate<T>(obj: T): Evacuated<T>;
    _queue<T>(type: string, key: string, obj: T, index: number | undefined): Promise<void>;
    _dequeue<T>(type: string, key: string): Promise<any>;
    _dequeueWithCommit<T>(type: string, key: string): Promise<{
        key: string;
        value: T;
        cancelCount: number;
        pendingItems: number;
        commit: () => Promise<void>;
        cancel: () => void;
    } | undefined>;
    queue<T>(key: string, obj: T, index?: number): Promise<void>;
    dequeue<T>(key: string): Promise<any>;
    dequeueWithCommit<T>(key: string): Promise<{
        key: string;
        value: T;
        cancelCount: number;
        pendingItems: number;
        commit: () => Promise<void>;
        cancel: () => void;
    } | undefined>;
    queuePermanent<T>(key: string, obj: T, index?: number): Promise<void>;
    dequeuePermanent<T>(key: string): Promise<any>;
    dequeuePermanentWithCommit<T>(key: string): Promise<{
        key: string;
        value: T;
        cancelCount: number;
        pendingItems: number;
        commit: () => Promise<void>;
        cancel: () => void;
    } | undefined>;
}
