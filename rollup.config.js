//@ts-check
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import fs from "node:fs";
import { globSync } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";

const pkg = JSON.parse(fs.readFileSync("./package.json") + "");
const LIB_VERSION = pkg?.name + "-" + pkg?.version;

const moduleName = pkg?.name ?? "";

const banner = `/*!
  ${moduleName}.js v${pkg.version}
  Released under the ${pkg.license} License.
*/`;

//type RollupOptions
export default {
    platform: "browser",
    input: Object.fromEntries(
        globSync("src/**/*.ts")
            .filter((file) => !file.endsWith(".test.ts") && !file.endsWith(".bench.ts"))
            .map((file) => [
                // This remove `src/` as well as the file extension from each
                // file, so e.g. src/nested/foo.js becomes nested/foo
                path.relative("src", file.slice(0, file.length - path.extname(file).length)),
                // This expands the relative paths to absolute paths, so e.g.
                // src/nested/foo becomes /project/src/nested/foo.js
                fileURLToPath(new URL(file, import.meta.url)),
            ]),
    ),
    output: [
        {
            dir: "dist",
            format: "es",
            // preserveSymlinks: true,
            preserveModules: true,
            preserveModulesRoot: "src",
            sourcemap: true,
        },
    ],
    external: [/node_modules/],
    plugins: [
        typescript({
            tsconfigOverride: {
                platform: "browser",
                compilerOptions: {
                    declaration: true,
                    sourceMap: true,
                    outDir: "dist/types",
                },
            },
        }),
        nodeResolve({
            browser: true,
            // exportConditions: ["default", "module", "import"],
            // mainFields: ["browser", "module", "main"],
            // preferBuiltins: false,
        }),
        commonjs(),
        replace({
            values: {
                LIB_VERSION: JSON.stringify(LIB_VERSION),
                "process.browser": "true",
            },
            preventAssignment: true,
        }),
    ],
};
