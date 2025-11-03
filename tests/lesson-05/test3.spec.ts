import { test } from '@playwright/test';

test('register with full information', async ({ page }) => {
  // Go to Material Playwright home page.
  await test.step('1. Access Material Playwright page', async () => {
    await page.goto('https://material.playwrightvn.com/');
  });

  // Click "Bài học 3: Todo Page".
  await test.step('2. Go to Bài học 3: ToDo Page', async () => {
    await page.getByRole('link', { name: /Bài học 3: ToDo Page/i }).click();
  });


  // Add 100 todo items with content: "Todo <i>"

  await test.step('3. Add 100 todo items with content Todo <i> ', async () => {
    let countTodo = 1;
    let countDelTodo = 1;

    page.on('dialog', async dialog => dialog.accept());

    while (countTodo <= 100) {
      await page.locator('//input[@id="new-task"]').fill(`Todo ${countTodo}`);
      await page.locator('//button[@id="add-task"]').click();
      countTodo++;
    }

    while (countDelTodo <= 100) {
      if (countDelTodo % 2 === 1) {
        await page.locator(`//button[@id="todo-${countDelTodo}-delete"]`).click();
      }
      countDelTodo++;
    }

  });
});