import  { test, expect } from '@playwright/test';

test('windows handling', async ({ context }) => {
    const page = await context.newPage();
    await page.goto("https://www.myntra.com/");
    await page.locator("//a[@data-group='kids']").click();
    await page.locator("//a[@href='/boy-tshirts']").click();

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("//h4[text()='boys print t-shirt ']/preceding-sibling::h3[text()='boys print t-shirt ']").click()
    ]);  
    

  // Test code for window handling
});