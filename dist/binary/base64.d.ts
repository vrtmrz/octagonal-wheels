export declare function base64ToArrayBuffer(base64: string | string[]): ArrayBuffer;
export declare function base64ToArrayBufferInternalBrowser(base64: string): ArrayBuffer;
export declare function arrayBufferToBase64Single(buffer: ArrayBuffer): Promise<string>;
export declare function arrayBufferToBase64(buffer: ArrayBuffer): Promise<string[]>;
export declare const writeString: (string: string) => Uint8Array;
export declare const readString: (buffer: Uint8Array) => string;
export declare function base64ToString(base64: string | string[]): string;
