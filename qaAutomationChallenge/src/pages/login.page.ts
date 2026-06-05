import type { Locator, Page } from '@playwright/test';
import { AuthFormPage } from './auth-form.page';

export class LoginPage extends AuthFormPage {
  constructor(page: Page) {
    super(page);
  }

  private get loginButton(): Locator {
    return this.page.locator('#login');
  }

  actionButton(): Locator {
    return this.loginButton;
  }

  async open(): Promise<void> {
    await super.open('/login');
  }

  async formAction(): Promise<void> {
    await this.loginButton.click();
  }

  async login(email: string, password: string): Promise<void> {
    await this.fillCredentials(email, password);
    await this.formAction();
  }
}
