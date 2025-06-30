# 🧪 Playwright Locator Test – `getByPlaceholder()` & `getByRole()` Demo

This document explains the purpose, behavior, and locator logic of the test script that automates login on the **OrangeHRM demo** website using a mix of `getByPlaceholder()` and `getByRole()` locators.

---

## ✅ Purpose

This test demonstrates how to:
- Use `getByPlaceholder()` to target input fields by placeholder text.
- Use `getByRole()` to interact with a button and verify successful login.
- Automate login on [OrangeHRM Demo Site](https://opensource-demo.orangehrmlive.com).

---

## 🚀 Steps Performed

1. Navigate to the OrangeHRM login page.
2. Confirm that the page title is `"OrangeHRM"`.
3. Use `getByPlaceholder()` to:
   - Enter the **username** in the field with placeholder `"Username"`.
   - Enter the **password** in the field with placeholder `"Password"`.
4. Use `getByRole()` to:
   - Click the `"Login"` button.
5. Use `getByRole()` again to:
   - Verify that a heading with text `"Dashboard"` is visible after successful login.

---

## 💻 Test Code

```javascript
//@ts-check

import { test, expect } from '@playwright/test';

test('getByRole locator demo', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page).toHaveTitle('OrangeHRM');

    // Use getByPlaceholder() to fill in login credentials
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    // Use getByRole() to click Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Assert successful login by checking presence of "Dashboard" heading
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

🧠 Code & Locator Explanation
🔹 getByPlaceholder('Username')
Targets an <input> element with placeholder="Username".

🔹 getByPlaceholder('Password')
Targets the password field using placeholder="Password".

🔹 getByRole('button', { name: 'Login' })
Targets the Login button, which Playwright maps as a button using ARIA role recognition.

🔹 getByRole('heading', { name: 'Dashboard' })
After login, this confirms you're on the Dashboard by checking a heading element with the text "Dashboard".

📚 Why Mix Locators?
getByPlaceholder() is perfect for form fields with visible hints.

getByRole() is ideal for buttons, headings, and accessibility-based assertions.

Mixing both gives flexibility and semantic accuracy for robust automation.

🧾 Notes
The test uses Playwright's built-in locators that are accessible-first and resilient.

This script shows how to chain locators to handle real-world login flows using multiple strategies.

📂 Related Files
Test script: tests/locators-by-placeholder.spec.js

Docs: locators-by-role-explained.md, web-orders-launch-explained.md

Happy Testing! 🎯🧪