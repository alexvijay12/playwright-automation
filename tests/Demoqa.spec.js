import { test, expect } from '@playwright/test';

test('Demoqa test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByPlaceholder('First Name').fill('Alex');
  await page.getByPlaceholder('Last Name').fill('pandian');
  await page.getByPlaceholder('name@example.com').fill('alex.pandian@gmail.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByPlaceholder('Mobile Number').fill('6374144476');
  await page.locator('#dateOfBirthInput').fill('21 Sep 1996');
  await page.locator('#subjectsInput').fill('Maths');
  await page.getByText('Maths', { exact: true }).click();
  await page.getByRole('checkbox', { name: 'Sports' }).check();
  await page.getByRole('checkbox', { name: 'Reading' }).check();
  await page.getByPlaceholder('Current Address').fill('Chennai');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
});
