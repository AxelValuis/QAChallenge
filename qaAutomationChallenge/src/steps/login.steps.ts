import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test-fixtures';

const { Given, When, Then } = createBdd(test);

Given('que el usuario abre la página de login', async ({ loginPage }) => {
  await loginPage.open();
});

When(
  'el usuario inicia sesión con email {string} y password {string}',
  async ({ loginPage }, email: string, password: string) => {
    await loginPage.login(email, password);
  }
);

Then('el formulario de login debe ser visible', async ({ loginPage }) => {
  await expect(loginPage.emailField()).toBeVisible();
  await expect(loginPage.passwordField()).toBeVisible();
  await expect(loginPage.actionButton()).toBeVisible();
  await expect(loginPage.message()).toBeVisible();
});

Then(
  'el mensaje de respuesta del login debe ser {string}',
  async ({ loginPage }, expectedMessage: string) => {
    await expect(loginPage.message()).toHaveText(expectedMessage);
  }
);
