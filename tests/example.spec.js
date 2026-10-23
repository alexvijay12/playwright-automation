 import{test} from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    const title = await page.title();
    console.log(title);
    console.log(await page.url());
   
    await page.screenshot({ path: './screenshots/facebook_screenshot.png' });

 await page.goto(("https://www.instagram.com/"));
 console.log(await page.title());
 console.log(await page.url());
  
})
test('launch facebook', async ({ page }) => {
    await page.goto('https://www.facebook.com/');;  
     await page.goBack();
     await page.goForward();
})