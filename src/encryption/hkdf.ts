// HKDF with GCM-AES end-to-end encryption is employed for chunk encryption during synchronisation.
// The passphrase is intended solely for end-to-end encryption. The database server password should differ from the passphrase.
// ** For security reasons, the passphrase must never be identical to the server credentials password. **
// To address both performance and security concerns, HKDF is utilised to derive a master key from the passphrase and a salt.
// The master key is derived using the supplied salt with PBKDF2, after which HKDF is used to derive a chunk key from the master key.
// The salt for the master key (pbkdf2Salt) should be stored securely, as it is required for decryption.
// The chunk key is used to encrypt and decrypt data using AES-GCM.
// Once again, this is a security measure, and the same passphrase as the server credentials password should not be used.
import { arrayBufferToBase64Single, base64ToArrayBuffer, readString, writeString } from "../binary/base64.ts";
import { uint8ArrayToHexString } from "../binary/hex.ts";
import { LOG_LEVEL_VERBOSE, Logger } from "../common/logger.ts";
import { memoWithMap } from "../memory/memo.ts";

/**
 * Global instance of the WebCrypto API.
 */
const webcrypto = globalThis.crypto;

/**
 * Byte length of the IV (initialisation vector) used for AES-GCM.
 */
const IV_LENGTH = 12; // AES-GCM typically uses a 12-byte IV (96 bits)
/**
 * Number of PBKDF2 iterations (as recommended by OWASP).
 */
const PBKDF2_ITERATIONS = 310_000;
/**
 * Byte length of the session salt used for HKDF.
 */
const HKDF_SALT_LENGTH = 32;
/**
 * Byte length of the salt used for PBKDF2.
 */
const PBKDF2_SALT_LENGTH = 32;
/**
 * Tag length for AES-GCM (in bits).
 */
const gcmTagLength = 128; // GCM tag length in bits

/**
 * Generates a random salt for PBKDF2.
 * @returns A Uint8Array of PBKDF2_SALT_LENGTH bytes.
 */
export function createPBKDF2Salt() {
    // Generate a random salt of PBKDF2_SALT_LENGTH bytes
    return webcrypto.getRandomValues(new Uint8Array(PBKDF2_SALT_LENGTH));
}

/**
 * Derives a master key (CryptoKey for HKDF) from a passphrase and PBKDF2 salt.
 * Memoised; the cache is used for identical inputs.
 * @param passphrase The passphrase.
 * @param pbkdf2Salt The salt for PBKDF2.
 * @returns A CryptoKey for HKDF.
 */
const deriveMasterKey = memoWithMap(
    10,
    async (passphrase: string, pbkdf2Salt: Uint8Array) => {
        const binaryPassphrase = writeString(passphrase);
        const keyMaterial = await webcrypto.subtle.importKey(
            "raw",
            binaryPassphrase,
            {
                name: "PBKDF2",
                length: 256, // Length of the key in bits
            },
            false,
            ["deriveKey"]
        );
        // 2. Derive the master key using PBKDF2. First, obtain the "raw" key.
        const masterKeyRaw = await webcrypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt: pbkdf2Salt,
                iterations: PBKDF2_ITERATIONS,
                hash: "SHA-256",
            },
            keyMaterial,
            // Output the "raw" key
            { name: "AES-GCM", length: 256 },
            true, // extractable
            ["encrypt", "decrypt"] // The master key is used for encryption/decryption
        );
        // Obtain the "raw" key as an ArrayBuffer for HKDF
        const masterKeyBuffer = await webcrypto.subtle.exportKey("raw", masterKeyRaw);
        // Import as a CryptoKey for HKDF
        const hkdfKey = await webcrypto.subtle.importKey("raw", masterKeyBuffer, { name: "HKDF" }, false, [
            "deriveKey",
        ]);
        return hkdfKey;
    },
    ([passphrase, salt]) => {
        return `${passphrase}-${uint8ArrayToHexString(salt)}`;
    }
);

/**
 * Derives an AES-GCM key for chunk encryption from a passphrase, PBKDF2 salt, and HKDF salt.
 * @param passphrase The passphrase.
 * @param pbkdf2Salt The salt for PBKDF2.
 * @param hkdfSalt The salt for HKDF.
 * @returns A CryptoKey for AES-GCM.
 */
async function deriveKey(passphrase: string, pbkdf2Salt: Uint8Array, hkdfSalt: Uint8Array) {
    const masterKey = await deriveMasterKey(passphrase, pbkdf2Salt);
    const chunkKey = await webcrypto.subtle.deriveKey(
        {
            name: "HKDF",
            salt: hkdfSalt,
            info: new Uint8Array(), // Context info (if needed)
            hash: "SHA-256",
        },
        masterKey,
        // Specify the algorithm and usage for the chunk key
        { name: "AES-GCM", length: 256 },
        false,
        ["encrypt", "decrypt"] // The chunk key is used only for encryption/decryption
    );
    return chunkKey;
}

/**
 * Performs AES-GCM encryption using the specified key, IV, and data.
 * @param key The CryptoKey for AES-GCM.
 * @param iv The initialisation vector.
 * @param data The data to be encrypted.
 * @returns The encrypted data as an ArrayBuffer.
 */
async function encryptData(key: CryptoKey, iv: Uint8Array, data: Uint8Array) {
    return await webcrypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv,
            tagLength: gcmTagLength,
        },
        key,
        data
    );
}

/**
 * Encrypts a string using AES-GCM, returning the IV, session salt, and encrypted data.
 * @param input The string to be encrypted.
 * @param passphrase The passphrase.
 * @param pbkdf2Salt The salt for PBKDF2.
 * @returns An array containing [IV, HKDF salt, encrypted data].
 */
async function _encrypt(input: string, passphrase: string, pbkdf2Salt: Uint8Array) {
    const hkdfSalt = webcrypto.getRandomValues(new Uint8Array(HKDF_SALT_LENGTH));
    const key = await deriveKey(passphrase, pbkdf2Salt, hkdfSalt);
    const iv = webcrypto.getRandomValues(new Uint8Array(IV_LENGTH));
    const dataBuf = writeString(input);
    const encryptedDataArrayBuffer = await encryptData(key, iv, dataBuf);
    const encryptedData = new Uint8Array(encryptedDataArrayBuffer);
    // Return data with iv and salt.
    // | iv(12) | salt(32) | data ....
    return [iv, hkdfSalt, encryptedData];
}

/**
 * Encrypts a string using AES-GCM and returns the result as binary data (Uint8Array).
 * @param input The string to be encrypted.
 * @param passphrase The passphrase.
 * @param pbkdf2Salt The salt for PBKDF2.
 * @returns The encrypted binary data.
 */
export async function encryptBinary(input: string, passphrase: string, pbkdf2Salt: Uint8Array) {
    const [iv, hkdfSalt, encryptedData] = await _encrypt(input, passphrase, pbkdf2Salt);
    const totalLength = iv.length + hkdfSalt.length + encryptedData.length;
    const result = new Uint8Array(totalLength);

    result.set(iv, 0);
    result.set(hkdfSalt, iv.length);
    result.set(encryptedData, iv.length + hkdfSalt.length);
    return result;
}

/**
 * Encrypts a string using AES-GCM and returns a Base64-encoded string (beginning with '%=').
 * @param input The string to be encrypted.
 * @param passphrase The passphrase.
 * @param pbkdf2Salt The salt for PBKDF2.
 * @returns The encrypted string (Base64, beginning with '%=').
 */
export async function encrypt(input: string, passphrase: string, pbkdf2Salt: Uint8Array) {
    const encrypted = await encryptBinary(input, passphrase, pbkdf2Salt);
    const inBase64 = await arrayBufferToBase64Single(encrypted);
    return `%=${inBase64}`;
}

/**
 * Decrypts using the IV, PBKDF2 salt, HKDF salt, encrypted data, and passphrase, returning a Uint8Array.
 * @param iv The initialisation vector.
 * @param pbkdf2Salt The salt for PBKDF2.
 * @param hkdfSalt The salt for HKDF.
 * @param encryptedData The encrypted data.
 * @param passphrase The passphrase.
 * @returns The decrypted data as a Uint8Array.
 */
async function _decrypt(
    iv: Uint8Array,
    pbkdf2Salt: Uint8Array,
    hkdfSalt: Uint8Array,
    encryptedData: Uint8Array,
    passphrase: string
) {
    const key = await deriveKey(passphrase, pbkdf2Salt, hkdfSalt);
    const decryptedDataArrayBuffer = await webcrypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv,
            tagLength: gcmTagLength,
        },
        key,
        encryptedData
    );
    return new Uint8Array(decryptedDataArrayBuffer);
}

/**
 * Decrypts binary encrypted data (Uint8Array) and returns the original string.
 * @param binary The encrypted binary data.
 * @param passphrase The passphrase.
 * @param pbkdf2Salt The salt for PBKDF2.
 * @returns The decrypted string.
 * @throws An exception is thrown if the input data is invalid or decryption fails.
 */
export async function decryptBinary(binary: Uint8Array, passphrase: string, pbkdf2Salt: Uint8Array) {
    if (binary.length < IV_LENGTH + HKDF_SALT_LENGTH) {
        throw new Error("Invalid binary data length. Expected at least ivLength + saltLength bytes.");
    }
    const iv = binary.slice(0, IV_LENGTH);
    const hkdfSalt = binary.slice(IV_LENGTH, IV_LENGTH + HKDF_SALT_LENGTH);
    const encryptedData = binary.slice(IV_LENGTH + HKDF_SALT_LENGTH);
    const decryptedData = await _decrypt(iv, pbkdf2Salt, hkdfSalt, encryptedData, passphrase);
    return readString(decryptedData);
}

/**
 * Decrypts a Base64-encoded encrypted string (beginning with '%=') and returns the original string.
 * @param input The encrypted string (Base64, beginning with '%=').
 * @param passphrase The passphrase.
 * @param pbkdf2Salt The salt for PBKDF2.
 * @returns The decrypted string.
 * @throws An exception is thrown if the input format is invalid or decryption fails.
 */
export async function decrypt(input: string, passphrase: string, pbkdf2Salt: Uint8Array) {
    if (!input.startsWith("%=")) {
        throw new Error("Invalid input format. Expected input to start with '%='. ");
    }
    const headerLength = 2;
    const encryptedData = base64ToArrayBuffer(input.slice(headerLength));
    const decrypted = await decryptBinary(new Uint8Array(encryptedData), passphrase, pbkdf2Salt);
    return decrypted;
}

export async function testEncryptionFeature() {
    const testValue = `Supercalifragilisticexpialidocious1234567890!@#$%^&*()_+[]{}|;':",.<>?✔️✔️⚡𠮷𠮷`;
    const testPassphrase = "test-passphrase";
    const pbkdf2Salt = createPBKDF2Salt();
    try {
        const encrypted = await encrypt(testValue, testPassphrase, pbkdf2Salt);
        const decrypted = await decrypt(encrypted, testPassphrase, pbkdf2Salt);
        if (decrypted !== testValue) {
            throw new Error("Decryption did not return the original value.");
        }
        Logger("Encryption feature test passed.", LOG_LEVEL_VERBOSE);
        return true;
    } catch (error) {
        // coverage: ignore
        Logger("WARNING! Your device would not support encryption.", LOG_LEVEL_VERBOSE);
        Logger(error, LOG_LEVEL_VERBOSE);
        return false;
    }
}
