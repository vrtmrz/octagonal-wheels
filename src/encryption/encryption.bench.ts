import { decrypt, encrypt } from "./encryption";
import { bench, describe } from "vitest";
import { decryptV3, encryptV3 } from "./encryptionv3";

// Add the encrypt function to the suite
const passphrase = "negative happy chainsaw edge";
const testData = "test data".repeat(10);
describe("Encryption Benchmarks", () => {
    bench(
        "encrypt",
        async () => {
            // Call the encrypt function with your test data
            await encrypt(testData, passphrase, false);
        },
        { time: 1000 }
    );

    // Add the encryptv3 function to the suite
    bench(
        "encryptv3",
        async () => {
            // Call the encryptv3 function with your test data
            await encryptV3(testData, passphrase);
        },
        { time: 1000 }
    );
});
describe("Encryption-Decryption Benchmarks", () => {
    bench(
        "encrypt-decrypt",
        async () => {
            const encrypted = await encrypt(testData, passphrase, false);
            await decrypt(encrypted, passphrase, false);
        },
        { time: 1000 }
    );
    bench(
        "encryptv3-decryptv3",
        async () => {
            const encrypted = await encryptV3(testData, passphrase);
            await decryptV3(encrypted, passphrase);
        },
        { time: 1000 }
    );
});
