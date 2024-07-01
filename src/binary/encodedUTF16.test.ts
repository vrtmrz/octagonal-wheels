import { describe, expect, it } from "vitest";
import { decodeBinary } from ".";
import { _decodeToArrayBuffer, _encodeBinary, decodeToArrayBuffer } from "./encodedUTF16";

describe("old_encodeBinary", () => {
    it("should encode a binary buffer into an array of strings", async () => {
        {
            const buffer = new Uint8Array(new Array(1024).map(() => Math.floor(Math.random() * 256)));
            const result = await _encodeBinary(buffer);
            const decoded = new Uint8Array(decodeToArrayBuffer(result));
            expect(buffer).to.deep.equal(decoded);
        }

        {
            const buffer = new Uint8Array(new Array(1024 * 1024 * 30).map(() => Math.floor(Math.random() * 256)));
            const result = await _encodeBinary(buffer);
            const decoded = new Uint8Array(decodeToArrayBuffer(result));
            expect(buffer).to.deep.equal(decoded);
        }
    });
});