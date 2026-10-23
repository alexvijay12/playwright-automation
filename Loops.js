 for (let i = 0; i < 10; i++) {
    console.log(i);
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    await page.evaluate((num) => {
        const element = document.querySelector('#random-number');
        if (element) {
            element.textContent = num;
        }
 }, randomNumber);
 }