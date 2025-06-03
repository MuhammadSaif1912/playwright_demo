import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillCheckoutInfo(firstName: string, lastName: string, zipCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', zipCode);
    await this.page.click('#continue');
  }

  async finishOrder() {
    await this.page.click('#finish');
  }

  async verifySuccessMessage() {
    await this.page.waitForSelector('.complete-header');
  }
}
