# 🧪 Playwright Locator Test – `getByText()` & `getByRole()` Demo

This document explains a Playwright test that uses `getByText()` to validate visible text content on the Web Orders application after login. It also explains the use of `getByLabel()` for inputs and `getByRole()` for the button.

---

## ✅ Purpose

This test demonstrates how to:
- Use `getByLabel()` to interact with form fields based on their labels.
- Use `getByRole()` to click a button (since buttons typically don’t have associated `<label>`s).
- Use `getByText()` to match and assert visible text on the post-login page.
- Use both exact and case-insensitive text matching in assertions.

---

## 🚀 Steps Performed

1. Navigate to the Web Orders login page.
2. Assert that the title is `"Web Orders Login"`.
3. Use `getByLabel()` to:
   - Fill the Username and Password fields.
4. Use `getByRole()` to click the Login button.
5. Assert that the new page title is `"Web Orders"`.
6. Use `getByText()` to:
   - Assert that the text `"List of All Orders"` is visible.
   - Demonstrate case-insensitive matching using a regular expression.

---

## 💻 Test Code

```javascript
//@ts-check

import { test, expect } from '@playwright/test';

test('getByText locator demo', async ({ page }) => {
    await page.goto('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');

    await expect(page).toHaveTitle('Web Orders Login');

    await page.getByLabel('Username:').fill('Tester');
    await page.getByLabel('Password:').fill('test');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveTitle('Web Orders');

    // Validate text 'List of All Orders' is present and visible on the page
    await expect(page.getByText('List of All Orders')).toBeVisible();

    // Case-insensitive match using RegExp
    await expect(page.getByText(/list of All Orders/i)).toBeVisible();
});

🧠 Locator & Assertion Explanation
🔹 getByText('List of All Orders')
Finds an element that visibly contains the exact text "List of All Orders".

Whitespace is normalized; inner HTML formatting is ignored.

By default, it is case-sensitive.

🔹 getByText(/list of All Orders/i)
Uses a regular expression with the i flag for case-insensitive matching.

Useful when the exact casing may vary or you want partial matches.

🔹 getByLabel(...) and getByRole(...)
getByLabel() is used to find input fields by their associated visible labels (even if not wrapped in actual <label> tags).

getByRole('button', { name: 'Login' }) locates the login button, which is an <input type="submit"> (implicitly has role "button").

🔹 expect(...).toBeVisible()
Asserts that the selected element is both present in the DOM and visible to the user.

🔹 expect(page).toHaveTitle(...)
Confirms navigation and that login was successful by verifying page titles.

📘 When to Use getByText()
Scenario	Recommendation
Static text in headings	✅ Use getByText() or getByRole()
Alerts, success messages	✅ Use getByText()
Matching flexible content	✅ Use RegExp with getByText()
Semantic targeting	Prefer getByRole() when possible

🧾 Notes
Mixing locator strategies (getByLabel, getByRole, getByText) gives you power and flexibility.

Tests written this way are more maintainable and accessibility-friendly.

📂 Related Files
Test script: tests/locators-by-text.spec.js

Docs: locators-by-role-explained.md, web-orders-launch-explained.md, locators-by-label-explained.md

Happy Testing! 🎯🧪