export type encodedData = [encryptedData: string, iv: string, salt: string];
export type KeyBuffer = {
    key: CryptoKey;
    salt: Uint8Array;
    count: number;
};
/**
 * Encrypts the input string using AES-GCM encryption algorithm.
 * @param input - The string to be encrypted.
 * @param passphrase - The passphrase used for encryption.
 * @param autoCalculateIterations - A boolean indicating whether to automatically calculate the iterations for key derivation.
 * @returns A string representing the encrypted data, initialization vector (IV), and salt in JSON format.
 */
export declare function encryptV1(input: string, passphrase: string, autoCalculateIterations: boolean): Promise<string>;
/**
 * Encrypts the input string using AES-GCM encryption algorithm.
 *
 * @param input - The string to be encrypted.
 * @param passphrase - The passphrase used for encryption.
 * @param autoCalculateIterations - A boolean indicating whether to automatically calculate the iterations for key derivation.
 * @returns The encrypted data with initialization vector (iv) and salt. <br>  |%| iv(32) | salt(32) | data ....
 */
export declare function encrypt(input: string, passphrase: string, autoCalculateIterations: boolean): Promise<string>;
/**
 * Obfuscates the given path using AES-GCM encryption. This obfuscation is deterministic.
 * @param path - The path to obfuscate.
 * @param passphrase - The passphrase used for encryption.
 * @param autoCalculateIterations - A boolean indicating whether to automatically calculate the iterations.
 * @returns The obfuscated path: |%| iv(32) | salt(32) | data ....
 */
export declare function obfuscatePath<T extends string>(path: T, passphrase: string, autoCalculateIterations: boolean): Promise<string>;
/**
 * Checks if a given path is probably obfuscated.
 *
 * @param path - The path to check.
 * @returns `true` if the path is probably obfuscated, `false` otherwise.
 */
export declare function isPathProbablyObfuscated(path: string): boolean;
/**
 * Decrypts the encrypted result using the provided passphrase.
 * @param encryptedResult - The encrypted result to decrypt.
 * @param passphrase - The passphrase used for decryption.
 * @param autoCalculateIterations - A boolean indicating whether to automatically calculate the iterations.
 * @returns A Promise that resolves to the decrypted string.
 * @throws If the encrypted data is corrupted or if decryption fails.
 */
export declare function decrypt(encryptedResult: string, passphrase: string, autoCalculateIterations: boolean): Promise<string>;
/**
 * Tries to decrypt the encrypted result using the provided passphrase.
 *
 * @param encryptedResult - The encrypted result to decrypt.
 * @param passphrase - The passphrase used for decryption.
 * @param autoCalculateIterations - A boolean indicating whether to automatically calculate the iterations.
 * @returns A promise that resolves to the decrypted result if successful, or `false` if decryption fails.
 */
export declare function tryDecrypt(encryptedResult: string, passphrase: string | false, autoCalculateIterations: boolean): Promise<string | false>;
/**
 * Tests the encryption and decryption functionality.
 * @returns {Promise<boolean>} A promise that resolves to `true` if encryption and decryption are successful, and `false` otherwise.
 */
export declare function testCrypt(): Promise<boolean>;
/**
 * Encrypts binary data using AES-GCM encryption algorithm.
 *
 * @param input - The binary data to be encrypted.
 * @param passphrase - The passphrase used to derive the encryption key.
 * @param autoCalculateIterations - A boolean indicating whether to automatically calculate the number of iterations for key derivation.
 * @returns The encrypted binary data.
 */
export declare function encryptBinary(input: Uint8Array, passphrase: string, autoCalculateIterations: boolean): Promise<Uint8Array>;
/**
 * Decrypts the encrypted binary data using the provided passphrase.
 * @param encryptedResult - The encrypted binary data as a Uint8Array.
 * @param passphrase - The passphrase used for decryption.
 * @param autoCalculateIterations - A boolean indicating whether to automatically calculate the iterations for key derivation.
 * @returns A Promise that resolves to the decrypted binary data as a Uint8Array.
 * @throws If decryption fails or an error occurs during the decryption process.
 */
export declare function decryptBinary(encryptedResult: Uint8Array, passphrase: string, autoCalculateIterations: boolean): Promise<Uint8Array>;
