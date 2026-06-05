import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test-fixtures';

const { Given, When, Then } = createBdd(test);

Given('the user opens the registration page', async ({ registerPage }) => {
  await registerPage.open();
});

When(
  'the user registers with email {string} and password {string}',
  async ({ registerPage }, email: string, password: string) => {
    await registerPage.register(email, password);
  }
);

Then('the registration form should be visible', async ({ registerPage }) => {
  await expect(registerPage.emailField()).toBeVisible();
  await expect(registerPage.passwordField()).toBeVisible();
  await expect(registerPage.actionButton()).toBeVisible();
  await expect(registerPage.message()).toBeVisible();
});

Then(
  'the register response message should be {string}',
  async ({ registerPage }, expectedMessage: string) => {
    await expect(registerPage.message()).toHaveText(expectedMessage);
  }
);
