# 🧪 Web Orders Launch Test – Explained

This document explains the purpose, steps, and code breakdown of the `web-orders-launch.spec.js` test script written using Playwright.

---

## ✅ Purpose

This test verifies that the Web Orders application launches successfully and the login page loads with the correct page title.

---

## 🚀 Steps Performed

1. Launch a new browser context and open a new page (handled by Playwright's test runner).
2. Navigate to the Web Orders login page URL.
3. Assert that the page's title matches the expected title "Web Orders Login".

---

## 💻 Test Code

```javascript
const { test, expect } = require('@playwright/test');

test('should display Web Orders login page', async ({ page }) => {
  // Navigate to the login page of the Web Orders application
  await page.goto('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');

  // Assert that the page title is correct
  await expect(page).toHaveTitle('Web Orders Login');
});
```

---

## 🧠 Code Explanation

### `const { test, expect } = require('@playwright/test');`
- Imports the `test` and `expect` functions from Playwright's testing module.
- `test()` is used to define test cases.
- `expect()` is used for assertions (e.g., to check page title, text, visibility, etc.).

### `test('should display Web Orders login page', async ({ page }) => {...});`
- Defines a test case with the name shown in reports.
- `{ page }` is an isolated browser tab injected by Playwright.

### `await page.goto('...');`
- Navigates the browser to the provided URL.
- `await` waits until the page is fully loaded before continuing.

### `await expect(page).toHaveTitle('Web Orders Login');`
- Verifies that the page title is exactly `"Web Orders Login"`.

---

## 🧾 Notes

- The test runner automatically launches the browser and handles setup/teardown.
- You can run this test using: `npx playwright test`.

---

## 📂 Related Files

- Test script: `tests/web-orders-launch.spec.js`
- Docs: `README.md`, `Installing Playwright.docx`

---

Happy Testing! 🎭
