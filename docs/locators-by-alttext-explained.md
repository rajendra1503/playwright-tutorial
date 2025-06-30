# 🧪 Playwright Locator Test – `getByAltText()` Demo

This document explains the use of Playwright’s `getByAltText()` locator to validate and interact with images that use `alt` attributes for accessibility. The test checks for visibility and clickability of two images on a local HTML demo page.

---

## ✅ Purpose

This test demonstrates:
- How to locate images using the `alt` text with `getByAltText()`
- The use of `expect(...).toBeVisible()` to assert that images are rendered and visible
- How to interact with images (e.g., clicking them) once they are located

---

## 🚀 Steps Performed

Each test:
1. Opens a local HTML file in the browser.
2. Locates an image using the value of its `alt` attribute.
3. Asserts that the image is visible on the page.
4. Clicks the image (for example, to trigger a pop-up or navigation).

---

## 💻 Test Code

```javascript
//@ts-check

import { test, expect } from '@playwright/test';

test('Validate User Avatar image is visible using getByAltText locator', async ({ page }) => {
    await page.goto('file:///D:/Rajendra/HTML/playwright-locators-demo.html#');

    // Locate image by its alt text
    await expect(page.getByAltText('User Avatar')).toBeVisible();
    await page.getByAltText('User Avatar').click();
});

test('Validate Company Logo image is visible using getByAltText locator', async ({ page }) => {
    await page.goto('file:///D:/Rajendra/HTML/playwright-locators-demo.html#');

    const logo = page.getByAltText('Company Logo');
    await expect(logo).toBeVisible();
    await logo.click();
});

🧠 Locator & Assertion Explanation
🔹 getByAltText('...')
Selects an element (typically an <img>) using the value of its alt attribute.

Ideal for locating images that are labeled for screen readers and accessibility.

Example target element:

<img src="avatar.jpg" alt="User Avatar" />
🔹 expect(...).toBeVisible()
Ensures the image is:

Present in the DOM

Rendered and not hidden via display: none, visibility: hidden, or opacity: 0

🔹 .click()
Simulates a user click on the image — useful when the image is interactive (e.g., opens a modal or navigates to another page).

📘 Best Practices
Recommendation	Reason
Use alt attributes for all images	Improves accessibility and enables better tests
Use getByAltText() for <img>	Most semantic and user-centric image locator
Combine with expect().toBeVisible()	Ensures meaningful UI presence

📂 Related Files
Test script: tests/locators-by-alttext.spec.js

Docs: locators-by-text-explained.md, locators-by-label-explained.md

Happy Testing! 🎯🧪