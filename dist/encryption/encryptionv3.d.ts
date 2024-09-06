/**
 * Generates a key using the passphrase.
 *
 * @param passphrase - The passphrase used for generating the key.
 * @returns The derived key.
 */
export declare function generateKey(passphrase: string): Promise<CryptoKey>;
/**
 * Encrypts the input string using AES-GCM encryption algorithm with the provided passphrase.
 *
 * @param input - The string to be encrypted.
 * @param passphrase - The passphrase used for encryption.
 * @returns The encrypted string with the initialization vector (IV) prepended.
 * @remarks The salt is fixed and is not changed for every encryption due to performance reasons.
 * This function is still experimental and not guaranteed to be safe
 */
export declare function encryptV3(input: string, passphrase: string): Promise<string>;
/**
 * Decrypts the encrypted result using the provided passphrase.
 *
 * @param encryptedResult - The encrypted result to be decrypted.
 * @param passphrase - The passphrase used for decryption.
 * @returns The decrypted plain text.
 * @remarks The salt is fixed and is not changed for every encryption due to performance reasons.
 * This function is still experimental and not guaranteed to be safe
 */
export declare function decryptV3(encryptedResult: string, passphrase: string): Promise<string>;
