import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const bddTestDir = defineBddConfig({
  paths: ['features/*.feature'],
  require: ['src/steps/*.ts'],
  importTestFrom: './src/fixtures/test-fixtures.ts',
  outputDir: '.features-gen',
  disableWarnings: {
    importTestFrom: true
  }
});

export default defineConfig({
  timeout: 30_000,
  fullyParallel: false,
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'api',
      testDir: './tests/api',
      use: {
        baseURL: process.env.BACKEND_URL || 'http://127.0.0.1:3000'
      }
    },
    {
      name: 'non-functional',
      testDir: './tests/non-functional',
      use: {
        baseURL: process.env.BACKEND_URL || 'http://127.0.0.1:3000'
      }
    },
    {
      name: 'bdd-chromium',
      testDir: bddTestDir,
      use: {
        baseURL: process.env.FRONTEND_URL || 'http://127.0.0.1:4000',
        browserName: 'chromium'
      }
    }
  ]
});
