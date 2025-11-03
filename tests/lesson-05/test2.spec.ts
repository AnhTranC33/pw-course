import { test } from '@playwright/test';

test('register with full information', async ({ page }) => {
  // Go to Material Playwright home page.
  await test.step('1. Access Material Playwright page', async () => {
    await page.goto('https://material.playwrightvn.com/');
  });

  // Click "Bài học 2: Product Page".
  await test.step('2. Go to Bài học 2: Product Page', async () => {
    await page.getByRole('link', { name: /Bài học 2: Product Page/i }).click();
  });


  // Add products to cart:
  //Product 1: 2, Product 2: 3, Product 3: 1
  await test.step('3. Add Product 1: 2 products, Product 2: 3 products, Product 3: 1 product ', async () => {
    let countProd1 = 1;
    let countProd2 = 1;

    while (countProd1 <= 2) {
      await page.locator('//button[@data-product-id=1]').click();
      countProd1++;
    }

    while (countProd2 <= 3) {
      await page.locator('//button[@data-product-id=2]').click();
      countProd2++;
    }

    await page.locator(`//button[@data-product-id=3]`).click();
  });
});