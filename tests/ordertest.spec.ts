import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { ProductPage } from '../pages/productpage';
import { CartPage } from '../pages/cartpage';
import { CheckoutPage } from '../pages/checkoutpage';

test('Scenario 2: User places an order and checks out successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productPage.addProductToCart();
  await productPage.goToCart();

  await cartPage.clickCheckout();

  await checkoutPage.fillCheckoutInfo('Muhammad', 'Saif', '03123456789');
  await checkoutPage.finishOrder();

  await checkoutPage.verifySuccessMessage();

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
