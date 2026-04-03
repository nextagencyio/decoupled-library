import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  retries: 0,
  use: {
    baseURL: 'http://localhost:3001',
    headless: true,
  },
  webServer: {
    command: 'NODE_TLS_REJECT_UNAUTHORIZED=0 npx next start -p 3001',
    port: 3001,
    timeout: 30_000,
    reuseExistingServer: true,
  },
})
