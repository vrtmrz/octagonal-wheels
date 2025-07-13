import { describe, it, expect } from "vitest";
import { encrypt, decrypt, encryptBinary, decryptBinary, createPBKDF2Salt } from "./hkdf.ts";

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
        expect(decryptedBuf).toBe(TEST_STRING);
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
