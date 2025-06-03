import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('Scenario 1: Verify user login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Step 1: Navigate to the login page
  await loginPage.goto();

  // Step 2: Login with valid credentials
  await loginPage.login('standard_user', 'secret_sauce');

  // Step 3: Expect to be redirected to the products page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Optional: Verify something on the product page to confirm login success
  await expect(page.locator('.title')).toHaveText('Products');
});
