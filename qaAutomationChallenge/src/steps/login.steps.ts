import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test-fixtures';

const { Given, When, Then } = createBdd(test);

Given('the user opens the login page', async ({ loginPage }) => {
  await loginPage.open();
});

When(
  'the user logs in with email {string} and password {string}',
  async ({ loginPage }, email: string, password: string) => {
    await loginPage.login(email, password);
  }
);

Then('the login form should be visible', async ({ loginPage }) => {
  await expect(loginPage.emailField()).toBeVisible();
  await expect(loginPage.passwordField()).toBeVisible();
  await expect(loginPage.actionButton()).toBeVisible();
  await expect(loginPage.message()).toBeVisible();
});

Then(
  'the login response message should be {string}',
  async ({ loginPage }, expectedMessage: string) => {
    await expect(loginPage.message()).toHaveText(expectedMessage);
  }
);
