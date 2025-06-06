
import fs from "node:fs";
import { OpenSSLCompat } from "../src/encryption/index.ts";
import { spawn } from "node:child_process";
import process from "node:process";

const opensslPath = process.env.OPENSSL_PATH || "openssl";
console.log(`Using OpenSSL: ${opensslPath}`);

// For Convenience, use readme.md
const testFile = new Uint8Array(fs.readFileSync("../readme.md"));

const passphrase = "testPassphrase";
const iterations = 100_000;

console.log("Starting CBC encryption and decryption...");
const cbcEncrypted = await OpenSSLCompat.CBC.encryptCBC(testFile, passphrase, iterations);

fs.writeFileSync("cbcEncrypted.bin", cbcEncrypted);

console.log("CBC Encrypted file created: cbcEncrypted.bin");
// Cleanup
function ignoreFailure(func: () => void) {
    try {
        func();
    } catch (e) {
        // Ignore errors
        // console.error("Error during cleanup:", e);
    }
}
async function processCommand(command: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const child = spawn(opensslPath, [command], {
            stdio: "inherit",
            shell: true,
        });
        child.on("error", (err) => {
            console.error(`Failed to start OpenSSL command: ${command}`);
            console.error("Error executing OpenSSL command:", err);

            reject(err);
        });
        child.on("exit", (code) => {
            if (code !== 0) {
                console.error(`OpenSSL command failed with exit code ${code}: ${command}`);
                console.error(`OpenSSL command failed with exit code ${code}`);
                reject(new Error(`OpenSSL command failed with exit code ${code}`));
            } else {
                console.log(`OpenSSL command executed successfully: ${command}`);
                resolve();
            }
        });
    });
}

await processCommand("version").then(() => {
    console.log("**OpenSSL version command executed successfully.");
}).catch((err) => {
    console.error("**Error during OpenSSL version command execution:", err);
    // process.exit(1);
});

const command = `enc -d -aes-256-cbc -in cbcEncrypted.bin -out cbcDecrypted.md -k ${passphrase} -pbkdf2 -md sha256 -iter ${iterations}`;
await processCommand(command).then(() => {
    console.log("**OpenSSL CBC command executed successfully.");
    const decryptedContent = fs.readFileSync("cbcDecrypted.md", "utf-8");
    // console.log("Decrypted content:", decryptedContent);
    if (decryptedContent === testFile.toString()) {
        console.log("**Decryption successful, content matches original.");
    } else {
        console.error("**Decryption failed, content does not match original.");
    }
}).catch((err) => {
    console.error("**Error during OpenSSL CBC command execution:", err);
}).finally(() => {
    console.log("**OpenSSL CBC command finished.");
    ignoreFailure(() => fs.unlinkSync("cbcEncrypted.bin"));
    ignoreFailure(() => fs.unlinkSync("cbcDecrypted.md"));
});

