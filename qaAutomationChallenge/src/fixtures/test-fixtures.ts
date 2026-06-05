import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/login.page';
import { RegisterPage } from '../pages/register.page';

type QaFixtures = {
  loginPage: LoginPage;
  registerPage: RegisterPage;
};

export const test = base.extend<QaFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  }
});
