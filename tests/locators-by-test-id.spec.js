//@ts-check

import { test, expect } from '@playwright/test';

test('using getByTestId locator', async ({ page }) => {
  await page.goto('file:///D:/Rajendra/HTML/playwright-locators-demo.html#');

  // Locate and validate the submit button using data-testid
  const btnSubmitForm = page.getByTestId('submitBtn');
  await expect(btnSubmitForm).toBeVisible();

  // Locate and validate a status indicator using data-testid
  const loading = page.getByTestId('status');
  await expect(loading).toBeVisible();
});
