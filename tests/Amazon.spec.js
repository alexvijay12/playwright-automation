import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test, expect } from '@playwright/test';  

const dirname = path.dirname(fileURLToPath(import.meta.url));

test('Handle dropdowns', async ({ page }) => { 
  const screenshotDir = path.join(dirname,'screenshots');
  fs.mkdirSync(screenshotDir, { recursive: true });

  await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');

  await page.getByRole('button', { name: 'Simple Dropdown' }).click();
  await page.locator('select').nth(0).scrollIntoViewIfNeeded();
  await page.locator('select').nth(0).selectOption('option2');
  await page.screenshot({ path: path.join(screenshotDir, 'dropdown_screenshot.png') });

  await page.getByRole('button', { name: 'Styled Dropdown' }).click();
  await page.locator('select').nth(1).scrollIntoViewIfNeeded();
  await page.locator('select').nth(1).selectOption('option3');
  await page.screenshot({ path: path.join(screenshotDir, 'dropdown_screenshot2.png') });

  await page.getByRole('button', { name: 'Multi-Select' }).click();
  await page.locator('select').nth(2).scrollIntoViewIfNeeded();
  await page.locator('select').nth(2).selectOption(['option2', 'option5']);
  await page.screenshot({ path: path.join(screenshotDir, 'dropdown_screenshot3.png') });

  await page.getByRole('button', { name: 'Grouped Dropdown' }).click();
  await page.locator('select').nth(3).scrollIntoViewIfNeeded();
  await page.locator('select').nth(3).selectOption('option4');
  await page.screenshot({ path: path.join(screenshotDir, 'dropdown_screenshot4.png') });

  await expect(page.locator('select').nth(3)).toHaveValue('option4');

  await page.getByRole('button', { name: 'Dependent Dropdowns' }).click();
  const parentDropdown = page.locator('#parent-dropdown');
  await parentDropdown.scrollIntoViewIfNeeded();
  await parentDropdown.selectOption('vegetable');
  await expect(parentDropdown).toHaveValue('vegetable');
  await page.screenshot({ path: path.join(screenshotDir, 'dropdown_screenshot5.png') });
});