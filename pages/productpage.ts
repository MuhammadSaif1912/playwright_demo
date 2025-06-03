import { Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addToCartButton = '#add-to-cart-sauce-labs-backpack';
  readonly cartButton = '.shopping_cart_link';

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCart() {
    await this.page.click(this.addToCartButton);
  }

  async goToCart() {
    await this.page.click(this.cartButton);
  }
}
