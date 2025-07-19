import { describe, it, expect } from "vitest";
import {
    encrypt,
    decrypt,
    encryptBinary,
    decryptBinary,
    createPBKDF2Salt,
    decryptWithEphemeralSalt,
    decryptWithEphemeralSaltBinary,
    encryptWithEphemeralSalt,
    encryptWithEphemeralSaltBinary,
    HKDF_SALTED_ENCRYPTED_PREFIX,
    testEncryptionFeature,
} from "./hkdf.ts";

const TEST_PASSPHRASE = "test-passphrase";
const TEST_STRING = "國破山河在城春草木深-raison d'être-🍔!";
const pbkdf2Salt = createPBKDF2Salt();

describe("safeEncryption", () => {
    it("should return the original string after encrypt and decrypt", async () => {
        const encrypted = await encrypt(TEST_STRING, TEST_PASSPHRASE, pbkdf2Salt);
        expect(typeof encrypted).toBe("string");
        expect(encrypted.startsWith("%")).toBe(true);
        const decrypted = await decrypt(encrypted, TEST_PASSPHRASE, pbkdf2Salt);
        expect(decrypted).toBe(TEST_STRING);
    });

    it("should return the original string after encryptBinary and decryptBinary", async () => {
        const binaryTestString = new TextEncoder().encode(TEST_STRING);
        const binary = await encryptBinary(binaryTestString, TEST_PASSPHRASE, pbkdf2Salt);
        expect(binary).toBeInstanceOf(Uint8Array);

        const decryptedBuf = await decryptBinary(binary, TEST_PASSPHRASE, pbkdf2Salt);
        // const decoder = new TextDecoder();
        expect(decryptedBuf).toStrictEqual(binaryTestString);
    });

    it("should throw when decrypting with a wrong passphrase", async () => {
        const encrypted = await encrypt(TEST_STRING, TEST_PASSPHRASE, pbkdf2Salt);
        await expect(decrypt(encrypted, "wrong-passphrase", pbkdf2Salt)).rejects.toThrow();
    });

    it("should throw when decryptBinary is called with a wrong passphrase", async () => {
        const binaryTestString = new TextEncoder().encode(TEST_STRING);
        const binary = await encryptBinary(binaryTestString, TEST_PASSPHRASE, pbkdf2Salt);
        await expect(decryptBinary(binary, "wrong-passphrase", pbkdf2Salt)).rejects.toThrow();
    });
    it("should throw when decrypt is called with invalid input", async () => {
        const invalidInput = "invalid-input";
        await expect(decrypt(invalidInput, TEST_PASSPHRASE, pbkdf2Salt)).rejects.toThrow();
    });
    it("should throw when decryptBinary is called with invalid input", async () => {
        const invalidInput = new Uint8Array([1, 2, 3]);
        await expect(decryptBinary(invalidInput, TEST_PASSPHRASE, pbkdf2Salt)).rejects.toThrow();
    });
    it("should handle short strings for encryption and decryption", async () => {
        const encrypted = await encrypt("short", TEST_PASSPHRASE, pbkdf2Salt);
        const decrypted = await decrypt(encrypted, TEST_PASSPHRASE, pbkdf2Salt);
        expect(decrypted).toBe("short");
    });
    it("should handle empty strings for encryption and decryption", async () => {
        const encrypted = await encrypt("", TEST_PASSPHRASE, pbkdf2Salt);
        const decrypted = await decrypt(encrypted, TEST_PASSPHRASE, pbkdf2Salt);
        expect(decrypted).toBe("");
    });
});
describe("ephemeralSaltEncryption", () => {
    const TEST_PASSPHRASE = "test-passphrase";
    const TEST_STRING = "Ephemeral salt test string: 🦄🌈🇬🇧";
    it("should encrypt and decrypt a string with ephemeral salt", async () => {
        const encrypted = await encryptWithEphemeralSalt(TEST_STRING, TEST_PASSPHRASE);
        expect(typeof encrypted).toBe("string");
        expect(encrypted.startsWith(HKDF_SALTED_ENCRYPTED_PREFIX)).toBe(true);
        const decrypted = await decryptWithEphemeralSalt(encrypted, TEST_PASSPHRASE);
        expect(decrypted).toBe(TEST_STRING);
    });

    it("should encrypt and decrypt binary data with ephemeral salt", async () => {
        const binaryTestString = new TextEncoder().encode(TEST_STRING);
        const encryptedBinary = await encryptWithEphemeralSaltBinary(binaryTestString, TEST_PASSPHRASE);
        expect(encryptedBinary).toBeInstanceOf(Uint8Array);
        const decryptedBinary = await decryptWithEphemeralSaltBinary(encryptedBinary, TEST_PASSPHRASE);
        expect(decryptedBinary).toStrictEqual(binaryTestString);
    });

    it("should throw when decrypting with a wrong passphrase (ephemeral salt)", async () => {
        const encrypted = await encryptWithEphemeralSalt(TEST_STRING, TEST_PASSPHRASE);
        await expect(decryptWithEphemeralSalt(encrypted, "incorrect-passphrase")).rejects.toThrow();
    });

    it("should throw when decryptWithEphemeralSaltBinary is called with a wrong passphrase", async () => {
        const binaryTestString = new TextEncoder().encode(TEST_STRING);
        const encryptedBinary = await encryptWithEphemeralSaltBinary(binaryTestString, TEST_PASSPHRASE);
        await expect(decryptWithEphemeralSaltBinary(encryptedBinary, "incorrect-passphrase")).rejects.toThrow();
    });

    it("should throw when decryptWithEphemeralSalt is called with invalid input", async () => {
        const invalidInput = "invalid-input";
        await expect(decryptWithEphemeralSalt(invalidInput, TEST_PASSPHRASE)).rejects.toThrow();
    });

    it("should throw when decryptWithEphemeralSaltBinary is called with invalid input", async () => {
        const invalidInput = new Uint8Array([1, 2, 3]);
        await expect(decryptWithEphemeralSaltBinary(invalidInput, TEST_PASSPHRASE)).rejects.toThrow();
    });

    it("should handle short strings for ephemeral salt encryption and decryption", async () => {
        const encrypted = await encryptWithEphemeralSalt("short", TEST_PASSPHRASE);
        const decrypted = await decryptWithEphemeralSalt(encrypted, TEST_PASSPHRASE);
        expect(decrypted).toBe("short");
    });

    it("should handle empty strings for ephemeral salt encryption and decryption", async () => {
        const encrypted = await encryptWithEphemeralSalt("", TEST_PASSPHRASE);
        const decrypted = await decryptWithEphemeralSalt(encrypted, TEST_PASSPHRASE);
        expect(decrypted).toBe("");
    });
});

describe("createPBKDF2Salt", () => {
    it("should generate a salt of correct length", () => {
        const salt = createPBKDF2Salt();
        expect(salt).toBeInstanceOf(Uint8Array);
        expect(salt.length).toBe(32);
    });
});

describe("testEncryptionFeature", () => {
    it("should return true if encryption feature works", async () => {
        const result = await testEncryptionFeature();
        expect(result).toBe(true);
    });
});
