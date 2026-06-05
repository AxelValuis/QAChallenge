import type { Locator, Page } from '@playwright/test';
import { AuthFormPage } from './auth-form.page';

export class RegisterPage extends AuthFormPage {
  constructor(page: Page) {
    super(page);
  }

  private get registerButton(): Locator {
    return this.page.locator('#register');
  }

  actionButton(): Locator {
    return this.registerButton;
  }

  async open(): Promise<void> {
    await super.open('/register');
  }

  async formAction(): Promise<void> {
    await this.registerButton.click();
  }

  async register(email: string, password: string): Promise<void> {
    await this.fillCredentials(email, password);
    await this.formAction();
  }
}
