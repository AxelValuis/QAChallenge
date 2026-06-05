import type { Locator, Page } from '@playwright/test';

export abstract class AuthFormPage {
  protected constructor(protected readonly page: Page) {}

  protected get emailInput(): Locator {
    return this.page.locator('#email');
  }

  protected get passwordInput(): Locator {
    return this.page.locator('#password');
  }

  protected get feedbackLabel(): Locator {
    return this.page.locator('#msg');
  }

  protected async open(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async fillCredentials(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  emailField(): Locator {
    return this.emailInput;
  }

  passwordField(): Locator {
    return this.passwordInput;
  }

  message(): Locator {
    return this.feedbackLabel;
  }

  abstract actionButton(): Locator;
  abstract formAction(): Promise<void>;
}
