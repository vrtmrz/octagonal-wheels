// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
    esbuild: {
        target: 'es2018',
    },
    test: {
        testTimeout: 10000,
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
            provider: "playwright",
            enabled: true,
            slowHijackESM: false,
            headless: true,
            fileParallelism: false,
            name: 'chromium', // browser name is required
            providerOptions: {
                launch: {
                    devtools: true,
                }
            }
        },
    },
})