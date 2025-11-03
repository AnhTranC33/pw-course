import { test } from '@playwright/test';

test('register with full information', async ({ page }) => {
  // Go to Material Playwright home page.
  await test.step('1. Access Material Playwright page', async () => {
    await page.goto('https://material.playwrightvn.com/');
  });

  // Click "Bài học 1: Register Page".
  await test.step('2. Go to Bài học 1: Register Page', async () => {
    await page.getByRole('link', { name: /Bài học 1: Register Page/i }).click();
  });
  

  // Fill registration form, click register button and verify success message.
  await test.step('3. Fill registration form and submit', async () => {
    await page.locator("//input[@id='username']").fill('Anh');
    await page.locator("//input[@id='email']").fill('pltest01@mailinator.com');
    await page.locator("//input[@id='male']").check();
    await page.locator("//input[@id='reading']").check();
    await page.locator("//input[@id='traveling']").check();
    await page.locator("//select[@id='interests']").selectOption({label:'Science'});
    await page.locator("//select[@id='country']").selectOption({label:'Australia'});
    await page.locator("//input[@id='dob']").pressSequentially('02151986');
    await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/uploadfile.txt");
    await page.locator("//textarea[@id='bio']").fill('I am a new student and would like to register this course.');
    await page.locator("//input[@id='rating']").fill('3');
    await page.locator("//div[contains(text(), 'Hover over me')]").hover();
    await page.locator("//input[@id='newsletter']").check();
    await page.locator("//span[@class='slider round']").click();
    await page.locator("//div[@id= 'starRating']").click();
    await page.locator("//button[text()='Register']").click();
});
});