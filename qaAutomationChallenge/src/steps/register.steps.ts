import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test-fixtures';

const { Given, When, Then } = createBdd(test);

Given('que el usuario abre la página de registro', async ({ registerPage }) => {
  await registerPage.open();
});

When(
  'el usuario se registra con email {string} y password {string}',
  async ({ registerPage }, email: string, password: string) => {
    await registerPage.register(email, password);
  }
);

Then('el formulario de registro debe ser visible', async ({ registerPage }) => {
  await expect(registerPage.emailField()).toBeVisible();
  await expect(registerPage.passwordField()).toBeVisible();
  await expect(registerPage.actionButton()).toBeVisible();
  await expect(registerPage.message()).toBeVisible();
});

Then(
  'el mensaje de respuesta del registro debe ser {string}',
  async ({ registerPage }, expectedMessage: string) => {
    await expect(registerPage.message()).toHaveText(expectedMessage);
  }
);
