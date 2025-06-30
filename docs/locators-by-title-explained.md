# 🧪 Playwright Locator Test – `getByTitle()` Demo

This document explains the use of the `getByTitle()` locator in Playwright to identify elements using their `title` attribute. It also highlights why storing locators in variables improves readability and maintainability.

---

## ✅ Purpose

This test demonstrates how to:
- Use the `getByTitle()` locator to find elements by their `title` attribute.
- Assert visibility of tooltip-enabled elements.
- Fill a text input identified using its `title`.
- Improve test structure by using variables to store locator references.

---

## 🚀 Steps Performed

1. Open a local HTML page containing elements with `title` attributes.
2. Locate a text input field labeled with `title="Enter your city"` and fill it with "Mumbai".
3. Locate a second element with `title="Tooltip info"` and verify that it is visible.

---

## 💻 Test Code

```javascript
//@ts-check

import { test, expect } from '@playwright/test';

test('using getByTitle locator', async ({ page }) => {
  await page.goto('file:///D:/Rajendra/HTML/playwright-locators-demo.html#');

  // Locate input field by title and fill it
  const cityInput = page.getByTitle('Enter your city');
  await expect(cityInput).toBeVisible();
  await cityInput.fill('Mumbai');

  // Locate tooltip element by title and assert it is visible
  const tooltip = page.getByTitle('Tooltip info');
  await expect(tooltip).toBeVisible();
});

🧠 Locator & Method Explanation
🔹 getByTitle('Enter your city')
Selects an element that contains a title="Enter your city" attribute.

Commonly used with <input> elements that show tooltips on hover.

🔹 getByTitle('Tooltip info')
Targets a non-form element with a title attribute (e.g., <span title="Tooltip info">Hover me</span>).

Validates presence of informational content tied to hover state.

🔹 fill('Mumbai')
Clears any existing value and types 'Mumbai' into the input field.

✅ Why Use Variables to Store Elements?
Instead of repeatedly writing:

await page.getByTitle('Enter your city').fill('Mumbai');
You can do:

const cityInput = page.getByTitle('Enter your city');
await expect(cityInput).toBeVisible();
await cityInput.fill('Mumbai');
🔍 Benefits of Using Variables
Benefit	Explanation
✅ Readability	Easier to understand what each element is
✅ Reusability	Use the same element multiple times
✅ Performance	Evaluates the locator once and reuses it
✅ Debugging	Cleaner call stacks and traceability

📘 Best Practices
Use getByTitle() for elements with meaningful tooltip text.

Avoid getByTitle() for clickable buttons or headings — use getByRole() for those.

Store locators in variables when you’ll use them more than once.

📂 Related Files
Test script: tests/locators-by-title.spec.js

Docs: locators-by-text-explained.md, locators-by-alttext-explained.md, locators-by-label-explained.md

Happy Testing! 🧪🧠