//@ts-check

import { test, expect } from '@playwright/test';

test('Validate User Avatar image is visible using getByAltText locator', async ({ page }) => {

    await page.goto('file:///D:/Rajendra/HTML/playwright-locators-demo.html#');

    //All images should have an alt attribute that describes the image.
    // You can locate an image based on the text alternative using page.getByAltText(). 

    await expect(page.getByAltText('User Avatar')).toBeVisible();
    await page.getByAltText('User Avatar').click();
})

test('Validate Company Logo image is visible using getByAltText locator', async ({ page }) => {

    await page.goto('file:///D:/Rajendra/HTML/playwright-locators-demo.html#');

    const logo = page.getByAltText('Company Logo');
    await expect(logo).toBeVisible();
    await logo.click();
})