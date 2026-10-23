 import { test, expect } from '@playwright/test';
 
 test('upload file', async ({ page }) => {
    await page.goto('https://www.file.io/');    
    await page.setInputFiles('input[type="file"]', 'tests/testfile.txt');
    await page.click('button[type="submit"]');
    

 });

    