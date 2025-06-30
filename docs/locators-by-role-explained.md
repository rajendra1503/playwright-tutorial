# 🧪 Playwright Locator Test – `getByRole()` Demo

This document explains the purpose, behavior, and code breakdown of the `getByRole` locator test script that logs into the Web Orders sample application using semantic roles.

---

## ✅ Purpose

This test demonstrates the use of `getByRole()` locators in Playwright to identify and interact with web elements based on their **ARIA roles** and **accessible names**.

It tests the login functionality of the Web Orders application.

---

## 🚀 Steps Performed

1. Navigate to the Web Orders login page.
2. Validate the page title to confirm successful navigation.
3. Use `getByRole()` to:
   - Fill in the **Username** textbox.
   - Fill in the **Password** textbox.
   - Click the **Login** button.
4. Verify that the page title after login is `"Web Orders"`.

---

## 💻 Test Code

```javascript
//@ts-check

import { test, expect } from '@playwright/test';

test('getByRole locator demo', async ({ page }) => {
    await page.goto('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');

    await expect(page).toHaveTitle('Web Orders Login');

    // Use the getByRole() method to identify the web elements on the login page.

    await page.getByRole('textbox', { name: 'Username:' }).fill('Tester');
    await page.getByRole('textbox', { name: 'Password:' }).fill('test');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveTitle('Web Orders');
});
```

---

## 🧠 Code Explanation

### `getByRole('textbox', { name: 'Username:' })`
- Selects the input field with role `textbox` and accessible name `"Username:"`.
- This input is identified as a `<input type="text">` element.

### `getByRole('textbox', { name: 'Password:' })`
- Selects the password input field, also considered a `textbox` by ARIA standards.
- Even though it's `type="password"`, Playwright treats it as `textbox`.

### `getByRole('button', { name: 'Login' })`
- Matches the `<input type="submit">` element with value `"Login"`.
- Even though it’s not a `<button>` tag, it maps to the `button` role.

### `expect(page).toHaveTitle(...)`
- Validates the page's title before and after login to confirm page transitions.

---

## 📚 Why `getByRole()` Works Even Without Explicit ARIA

Playwright relies on the **browser's accessibility tree**, not just the raw HTML.

Many HTML elements have **implicit ARIA roles**, even if `role="..."` is not present in the markup. For example:

| HTML Element                | Implicit ARIA Role |
|----------------------------|--------------------|
| `<input type="text">`      | `textbox`          |
| `<input type="password">`  | `textbox`          |
| `<input type="submit">`    | `button`           |
| `<a href="...">`           | `link`             |

So Playwright's `getByRole('button')` will **match** an `<input type="submit">` just like it would a `<button>`.

Additionally, Playwright uses nearby labels or visible text (like `<td>`, `<label>`, `aria-label`) to infer **accessible names** such as `"Username:"` or `"Password:"`.

This makes your tests more **semantic**, **resilient**, and **accessible-aware**.

---

## 🧾 Notes

- `getByRole()` is based on accessibility (ARIA roles), not just raw HTML tags.
- This approach improves reliability and makes tests more readable and maintainable.
- Playwright mimics how screen readers and assistive tech interpret the page.

---

## 📂 Related Files

- Test script: `tests/locators-by-role.spec.js`
- Docs: `README.md`, `Installing Playwright.docx`, `web-orders-launch-explained.md`

---

Happy Testing! 🎭
