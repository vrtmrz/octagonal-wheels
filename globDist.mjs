// Generate package.json exports field from dist directory.
//
// Directory barrels (for example `dist/conduit/index.js`) must be exported
// explicitly as `./conduit` and `./conduit.js`. Deep module imports are covered
// by subpath patterns below, so we do not have to enumerate every file.
import { sync } from "glob";
import fs from "node:fs";
import { join } from "node:path";
import { sep as sepWin } from "node:path/win32";
import { sep } from "node:path/posix";
const cwd = import.meta.dirname;
const distDirName = "dist";
const distDir = join(cwd, distDirName);
const files = sync("**/*.js", { cwd: distDir }).map((file) => {
    return file.split(sepWin).join(sep);
});

const makeExport = (file) => {
    const typePath = file.replace(/\.js$/, ".d.ts");
    const writeTypePath = `./${distDirName}/${typePath}`;
    const writeImportPath = `./${distDirName}/${file}`;
    if (fs.existsSync(join(distDir, typePath)) === false) {
        console.warn(`Type definition file not found: ${typePath}`);
    }
    return {
        import: writeImportPath,
        types: writeTypePath,
    };
};

const directoryBarrels = files
    .filter((file) => file !== "index.js")
    .filter((file) => file.endsWith("/index.js"))
    .map((file) => {
        const exportPath = file.replace(/\/index\.js$/, "");
        const entry = makeExport(file);
        return [
            [`./${exportPath}`, entry],
            [`./${exportPath}.js`, entry],
        ];
    })
    .flat();

const exportObject = {
    ".": {
        import: `./${distDirName}/index.js`,
        types: `./${distDirName}/index.d.ts`,
    },
    "./package.json": `./package.json`,
    "./index": null,
    "./index.js": null,
    "./patched_xxhash_wasm/*": null,
    "./patched_xxhash_wasm/*.js": null,
    ...Object.fromEntries(
        directoryBarrels.sort((a, b) => {
            return String(a[0]).localeCompare(String(b[0]));
        })
    ),
    "./*": {
        import: `./${distDirName}/*.js`,
        types: `./${distDirName}/*.d.ts`,
    },
    "./*.js": {
        import: `./${distDirName}/*.js`,
        types: `./${distDirName}/*.d.ts`,
    },
};
const pkg = JSON.parse(fs.readFileSync("./package.json") + "");
pkg.exports = exportObject;
fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 4) + "\n");
console.log("Updated package.json exports field.");
// console.dir(exportObject);
