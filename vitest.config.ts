// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
    esbuild: {
        target: 'es2018',
    },
    test: {
        fileParallelism: false,
        watch: false,
        // environment: "browser",
        include: ['src/**/*.test.ts'],
        coverage: {
            include: ['src/**/*.ts'],
            provider: 'istanbul',
            reporter: ['text', 'json', 'html'],
            // ignoreEmptyLines: true,
        },
        browser: {
            provider: "webdriverio",
            enabled: true,
            slowHijackESM: false,
            headless: true,
            fileParallelism: false,
            name: 'chrome', // browser name is required
            providerOptions: {
                launch: {
                    devtools: true,
                }
            }
        },
    },
})