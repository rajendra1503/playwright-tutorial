# 🧪 Playwright Locator Test – `getByTestId()` Demo

This document explains how to use Playwright’s `getByTestId()` locator to select elements using custom `data-testid` attributes. It also describes how to configure a custom test ID attribute globally via `playwright.config.js`.

---

## ✅ Purpose

This test demonstrates how to:
- Use `getByTestId()` to reliably select elements in the DOM using test-specific attributes.
- Verify the visibility of UI elements without relying on text content or styling.
- Configure Playwright to use a custom test ID attribute if your app uses one.

---

## 🚀 Steps Performed

1. Open a local HTML file in the browser.
2. Locate a button with `data-testid="submitBtn"` and verify that it is visible.
3. Locate a status message or loader with `data-testid="status"` and assert its visibility.

---

## 💻 Test Code

```javascript
//@ts-check

import { test, expect } from '@playwright/test';

test('using getByTestId locator', async ({ page }) => {
  await page.goto('file:///D:/Rajendra/HTML/playwright-locators-demo.html#');

  const btnSubmitForm = page.getByTestId('submitBtn');
  await expect(btnSubmitForm).toBeVisible();

  const loading = page.getByTestId('status');
  await expect(loading).toBeVisible();
});

🧠 What is data-testid?
data-testid is a custom HTML attribute specifically added to elements for testing purposes. It is not rendered visually and does not affect layout or behavior.

✅ Example in HTML

<button data-testid="submitBtn">Submit</button>
<span data-testid="status">Loading...</span>

## 📘 Why Use `data-testid`?

| ✅ Benefit             | 💡 Explanation                                                                 |
|------------------------|--------------------------------------------------------------------------------|
| **Stability**          | Not affected by visual changes like CSS, layout, or button text               |
| **Clarity**            | Makes it easy to understand what each element is in your tests                |
| **User-invisible**     | Does not impact layout or appearance of the UI                                |
| **No interference**    | Not used for styling or logic, so changes rarely break your tests             |
| **Industry Standard**  | Common in React Testing Library, Cypress, Playwright, and other frameworks    |


🔍 getByTestId() in Playwright

page.getByTestId('submitBtn');
This matches any element with:

<data-testid="submitBtn">
It’s one of the most reliable ways to locate an element in automated tests.

⚙️ Customizing the Attribute Name
If your app uses a different attribute such as data-qa, data-test, or data-automation, you can configure Playwright to use it instead of data-testid.

📁 In playwright.config.js:

import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    testIdAttribute: 'data-qa' // Playwright will now use data-qa instead
  }
});
Then this will work:

<button data-qa="submitBtn">Submit</button>
And the locator remains the same:

page.getByTestId('submitBtn');
📘 Best Practices
Use data-testid only for testing — not styling or logic.

Keep test IDs stable to avoid frequent test breakages.

Use short, meaningful names like submitBtn, mainNav, loadingSpinner.

📂 Related Files
Test script: tests/locators-by-testid.spec.js

Docs: locators-by-alttext-explained.md, locators-by-title-explained.md

Happy Testing! 🎯🧪