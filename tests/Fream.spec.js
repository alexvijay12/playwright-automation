import { test, expect } from '@playwright/test';

test('Frames practice page', async ({ page }) => {
  await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');

  const dropdownFrame = page.frameLocator('//iframe[@id="frm1"]');
  const course = dropdownFrame.locator('//*[@id="course"]');
  await course.selectOption('java');
  await expect(course).toHaveValue('java');

  const ide = dropdownFrame.locator('//*[@id="ide"]');
  await ide.selectOption(['ec', 'nb']);
  await expect(ide).toHaveValues(['ec', 'nb']);

  const controlsFrame = page.frameLocator('xpath=//iframe[@id="frm2"]');
  await controlsFrame.locator('//*[@id="firstName"]').fill('John');
  await controlsFrame.locator('//*[@id="lastName"]').fill('Smith');
  await controlsFrame.locator('*[@id="femalerb"]').check();
  await controlsFrame.locator('//*[@id="englishchbx"]').check();
  await controlsFrame.locator('//*[@id="frenchchbx"]').check();
  await controlsFrame.locator('*[@id="email"]').fill('john.smith@example.com');
  await controlsFrame.locator('*[@id="password"]').fill('TestPassword123');

  await controlsFrame.locator('//*[@id="registerbtn"]').click();
  await expect(controlsFrame.locator('//*[@id="msg"]')).toHaveText(
    'Registration is Successful',
  );

  await controlsFrame.locator('//*[@id="clearbtn"]').click();
  await expect(controlsFrame.locator('//*[@id="firstName"]')).toHaveValue('');
  await expect(controlsFrame.locator('//*[@id="lastName"]')).toHaveValue('');
  await expect(controlsFrame.locator('//*[@id="malerb"]')).toBeChecked();
  await expect(controlsFrame.locator('//*[@id="englishchbx"]')).not.toBeChecked();
  await expect(controlsFrame.locator('//*[@id="msg"]')).toBeEmpty();

  const nestedDropdownFrame = page
    .frameLocator('//iframe[@id="frm3"]')
    .frameLocator('//iframe[@id="frm1"]');
  const nestedCourse = nestedDropdownFrame.locator('//*[@id="course"]');
  await nestedCourse.selectOption('python');
  await expect(nestedCourse).toHaveValue('python');u
});
