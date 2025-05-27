// Generate package.json exports field from dist directory
// And, also generate several sorts of exports for the sake of compatibility
// for example:
//  dist/conduit/index.js to...
//  -> dist/conduit
//  -> dist/conduit.js
//  -> dist/conduit/index.js
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
const map = files.flatMap((file) => {
    if (file == "index.js") {
        return [];
    }
    let exportPath = file.replace(/\.js$/, "");
    if (exportPath.endsWith("index")) {
        exportPath = exportPath.replace(/\/index$/, "");
        return [
            [`./${exportPath}.js`, `./${distDirName}/${file}`],
            [`./${exportPath}`, `./${distDirName}/${file}`],
            [`./${exportPath}/index.js`, `./${distDirName}/${file}`],
        ];
    }
    return [
        [`./${exportPath}`, `./${distDirName}/${file}`],
        [`./${exportPath}.js`, `./${distDirName}/${file}`],
    ];
});
const exportObject = {
    ".": `./${distDirName}/index.js`,
    "./package.json": `./package.json`,
    ...Object.fromEntries(map),
};
const pkg = JSON.parse(fs.readFileSync("./package.json") + "");
pkg.exports = exportObject;
fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 4) + "\n");

console.dir(exportObject);
