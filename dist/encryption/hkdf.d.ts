/**
 * Generates a random salt for PBKDF2.
 * @returns A Uint8Array of PBKDF2_SALT_LENGTH bytes.
 */
export declare function createPBKDF2Salt(): Uint8Array<ArrayBuffer>;
/**
 * Encrypts a string using AES-GCM and returns the result as binary data (Uint8Array).
 * @param input The string to be encrypted.
 * @param passphrase The passphrase.
 * @param pbkdf2Salt The salt for PBKDF2.
 * @returns The encrypted binary data.
 */
export declare function encryptBinary(input: string, passphrase: string, pbkdf2Salt: Uint8Array): Promise<Uint8Array<ArrayBuffer>>;
/**
 * Encrypts a string using AES-GCM and returns a Base64-encoded string (beginning with '%=').
 * @param input The string to be encrypted.
 * @param passphrase The passphrase.
 * @param pbkdf2Salt The salt for PBKDF2.
 * @returns The encrypted string (Base64, beginning with '%=').
 */
export declare function encrypt(input: string, passphrase: string, pbkdf2Salt: Uint8Array): Promise<string>;
/**
 * Decrypts binary encrypted data (Uint8Array) and returns the original string.
 * @param binary The encrypted binary data.
 * @param passphrase The passphrase.
 * @param pbkdf2Salt The salt for PBKDF2.
 * @returns The decrypted string.
 * @throws An exception is thrown if the input data is invalid or decryption fails.
 */
export declare function decryptBinary(binary: Uint8Array, passphrase: string, pbkdf2Salt: Uint8Array): Promise<string>;
/**
 * Decrypts a Base64-encoded encrypted string (beginning with '%=') and returns the original string.
 * @param input The encrypted string (Base64, beginning with '%=').
 * @param passphrase The passphrase.
 * @param pbkdf2Salt The salt for PBKDF2.
 * @returns The decrypted string.
 * @throws An exception is thrown if the input format is invalid or decryption fails.
 */
export declare function decrypt(input: string, passphrase: string, pbkdf2Salt: Uint8Array): Promise<string>;
export declare function testEncryptionFeature(): Promise<boolean>;
