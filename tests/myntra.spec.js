// import { test } from '@playwright/test';

// test('myntra count', async ({ page }) => {
//     await page.goto('https://www.myntra.com/boy-tshirts');

//     const prices = await page.locator('//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice" or (not(@class) and normalize-space(text()))]').allTextContents();
//     console.log('All prices:', prices);

//     const priceNumbers = prices.map(price =>
//         Number(price.replace('Rs. ', '').replace(',', '').trim())
//     );
//     const minPrice = Math.min(...priceNumbers);
//     console.log('Minimum price:', minPrice);

//     const productName = page.locator(`//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and normalize-space(.)="Rs. ${minPrice}" or not(@class) and normalize-space(.)="Rs. ${minPrice}"]/ancestor::div[@class="product-productMetaInfo"]//h4[@class="product-product"]`);
//     console.log("Product Name:", await productName.first().textContent());
// });



import { test, expect } from '@playwright/test';

test('Find minimum Myntra T-shirt price', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');

    const cards = page.locator("//li[contains(@class,'product-base')]");
    await expect(cards.first()).toBeVisible();

    const prices = await cards.locator(
        "xpath=.//div[@class='product-price']//span[@class='product-discountedPrice' or (not(@class) and normalize-space(text()))]"
    ).allTextContents();

    const brands = await cards.locator(
        "xpath=.//*[contains(@class,'product-brand')]"
    ).allTextContents();

    const titles = await cards.locator(
        "xpath=.//h4[contains(@class,'product-product')]"
    ).allTextContents();

    const products = prices.map((text, i) => ({
      price: Number(
       text.replace(/Rs\.?|₹|,/gi, ' ')
        .trim()
        .split(/\s+/)[0]
   ),
        brand: brands[i].trim(),
        title: titles[i].trim()
    }));

    const valid = products.filter(p => p.price > 0);
    const minimum = valid.reduce((a, b) => a.price < b.price ? a : b, { price: Infinity });

    console.log('Total products:', await cards.count());
    console.log('Valid prices:', valid.length);
    console.log('Minimum price:', minimum.price);
    console.log('Brand:', minimum.brand);
    console.log('Product:', minimum.title);

    expect(await cards.count()).toBe(50);
    expect(minimum.price).toBeGreaterThan(0);
});