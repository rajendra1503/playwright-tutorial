# 🧪 Playwright Locator Test – `getByLabel()` & `getByRole()` Demo

This document explains the test script that uses `getByLabel()` to interact with form fields on the Web Orders login page, and `getByRole()` to click the login button. It also explains the `fill()` method and assertions used to verify expected outcomes.

---

## ✅ Purpose

This test demonstrates how to:
- Use `getByLabel()` to locate and interact with input fields based on visible labels.
- Use `getByRole()` to interact with a button.
- Use `fill()` to simulate typing into fields.
- Use `expect()` assertions to verify page behavior and successful login.

---

## 🚀 Steps Performed

1. Navigate to the Web Orders login page.
2. Validate that the page title is `"Web Orders Login"`.
3. Use `getByLabel()` to:
   - Enter the username in the "Username:" field.
   - Enter the password in the "Password:" field.
4. Use `getByRole()` to click the Login button.
5. Assert that the title of the resulting page is `"Web Orders"` (post-login success).

---

## 💻 Test Code

```javascript
//@ts-check

import { test, expect } from '@playwright/test';

test('getByRole locator demo', async ({ page }) => {
    await page.goto('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');

    await expect(page).toHaveTitle('Web Orders Login');

    // Use the getByLabel() method to identify the 2 textfields on the login page
    await page.getByLabel('Username:').fill('Tester');
    await page.getByLabel('Password:').fill('test');

    // Login button does not have a label, so we use getByRole()
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveTitle('Web Orders');
});

🧠 Locator & Method Explanation
🔹 getByLabel('Username:') and getByLabel('Password:')
Playwright uses visible labels to find the related input field.

Even if the page doesn't use <label> tags explicitly, Playwright can infer the label from nearby text such as inside <td> or <div> elements.

This is especially useful for forms where IDs are auto-generated or inconsistent.

🔹 .fill(value)
The fill() method clears any existing value in the input and types the given value into the field.

It mimics real user input and is the recommended way to enter text.

Example: await page.getByLabel('Username:').fill('Tester');

🔹 getByRole('button', { name: 'Login' })
Targets the Login button, which is implemented as an <input type="submit">.

Although it’s not a <button> tag, Playwright maps it to the ARIA role "button" based on its type and attributes.

getByLabel() won’t work here since the button isn’t labeled with visible text linked via <label>.

✅ Assertions Explained
await expect(page).toHaveTitle('Web Orders Login')
Ensures that the correct login page is loaded before any interaction.

Helps avoid flaky tests by verifying page state before proceeding.

await expect(page).toHaveTitle('Web Orders')
Verifies that login was successful by checking that the post-login page has the expected title.

These assertions are vital for test stability and validate key transitions in your app.

📚 Why Use getByLabel() and getByRole() Together?
Locator	Best For
getByLabel()	Textboxes, form fields
getByRole()	Buttons, headings, links

Combining both gives you semantic, human-readable, and accessible-friendly tests.

🧾 Notes
These locator strategies align with accessibility standards.

They make your test code more maintainable and closer to how a real user or screen reader would interact with the UI.

📂 Related Files
Test script: tests/locators-by-label.spec.js

Docs: locators-by-role-explained.md, web-orders-launch-explained.md

Happy Testing! 🧪🎯