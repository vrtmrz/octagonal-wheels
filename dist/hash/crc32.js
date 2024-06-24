const crc32kTable = new Uint32Array(256);
const crc32cTable = new Uint32Array(256);
function generateCRC32KTable() {
    const polynomial = 0xEDB88320;
    for (let i = 0; i < 256; i++) {
        let crc = i;
        for (let j = 0; j < 8; j++) {
            if (crc & 1) {
                crc = (crc >>> 1) ^ polynomial;
            }
            else {
                crc >>>= 1;
            }
        }
        crc32kTable[i] = crc;
    }
}
function generateCRC32CTable() {
    const polynomial = 0x1EDC6F41;
    for (let i = 0; i < 256; i++) {
        let crc = i;
        for (let j = 0; j < 8; j++) {
            if (crc & 1) {
                crc = (crc >>> 1) ^ polynomial;
            }
            else {
                crc >>>= 1;
            }
        }
        crc32cTable[i] = crc;
    }
}
generateCRC32CTable();
generateCRC32KTable();
function crc32CHash(strSrc) {
    let crc = 0xFFFFFFFF;
    const src = `s0` + strSrc + `\u0012\u0009` + strSrc.length;
    let i = src.length;
    while (--i) {
        const code = src.charCodeAt(i);
        const codeLow = (code & 0xff);
        const codeHigh = code >> 8;
        crc = (crc >>> 8) ^ crc32cTable[(crc ^ codeLow) & 0xFF];
        crc = (crc >>> 8) ^ crc32cTable[(crc ^ codeHigh) & 0xFF];
    }
    crc ^= 0xFFFFFFFF;
    return crc.toString(32);
}
function crc32CKHash(strSrc) {
    let crc = 0xFFFFFFFF;
    let crc2 = 0xFFFFFFFF;
    const src = `s0` + strSrc + `\u0012\u0009` + strSrc.length;
    let i = src.length;
    while (--i) {
        const code = src.charCodeAt(i);
        const codeLow = (code & 0xff);
        const codeHigh = code >> 8;
        crc = (crc >>> 8) ^ crc32cTable[(crc ^ codeLow) & 0xFF];
        crc = (crc >>> 8) ^ crc32cTable[(crc ^ codeHigh) & 0xFF];
        crc2 = (crc2 >>> 8) ^ crc32kTable[(crc2 ^ codeLow) & 0xFF];
        crc2 = (crc2 >>> 8) ^ crc32kTable[(crc2 ^ codeHigh) & 0xFF];
    }
    crc ^= 0xFFFFFFFF;
    crc2 ^= 0xFFFFFFFF;
    return crc.toString(32) + "-" + crc2.toString(32);
}

export { crc32CHash, crc32CKHash };
//# sourceMappingURL=crc32.js.map
