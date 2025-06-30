//@ts-check

import { test, expect } from '@playwright/test';

test('using getByTitle locator', async ({ page }) => {
  await page.goto('file:///D:/Rajendra/HTML/playwright-locators-demo.html#');

  // Below the "Loading..." text, the page contains:
  // - A text field with a tooltip ("Enter your city")
  // - A span or similar element with a tooltip ("Tooltip info")
  //
  // Both elements include a `title` attribute.
  // The `getByTitle()` locator uses the value of the title attribute to find elements.

  const cityInput = page.getByTitle('Enter your city');
  await expect(cityInput).toBeVisible();
  await cityInput.fill('Mumbai');

  const tooltip = page.getByTitle('Tooltip info');
  await expect(tooltip).toBeVisible();
});
