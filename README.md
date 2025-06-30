# 🎭 Playwright Tutorial

This repository contains a sample project demonstrating how to use [Microsoft Playwright](https://playwright.dev/) for end-to-end testing.

It includes the Playwright setup, basic test scripts, configuration, and documentation to help you get started quickly.

---

## 📘 Documentation

- [Installing Playwright Guide (Word Document)](docs/Installing%20Playwright.docx)
- [Web Orders Launch Test – Explained (Markdown)](docs/web-orders-launch-explained.md)

### 🔍 Locator Tests and Their Documentation

- [getByRole Test Script](tests/locators-by-role.spec.js)
- [getByRole – Explained](docs/locators-by-role-explained.md)

- [getByLabel Test Script](tests/locators-by-label.spec.js)
- [getByLabel – Explained](docs/locators-by-label-explained.md)

- [getByPlaceholder Test Script](tests/locators-by-placeholder.spec.js)
- [getByPlaceholder – Explained](docs/locators-by-placeholder-explained.md)

- [getByText Test Script](tests/locators-by-text.spec.js)
- [getByText – Explained](docs/locators-by-text-explained.md)

- [getByAltText Test Script](tests/locators-by-alttext.spec.js)
- [getByAltText – Explained](docs/locators-by-alttext-explained.md)

- [getByTitle Test Script](tests/locators-by-title.spec.js)
- [getByTitle – Explained](docs/locators-by-title-explained.md)

- [getByTestId Test Script](tests/locators-by-testid.spec.js)
- [getByTestId – Explained](docs/locators-by-testid-explained.md)


This guide walks you through how to set up Playwright from scratch using VS Code, Node.js, and the terminal.

---

## 🚀 Getting Started

### 📂 Clone the Repo

```bash
git clone https://github.com/rajendra1503/playwright-tutorial.git
cd playwright-tutorial
```

### 📦 Install Dependencies

```bash
npm install
```

### 🧪 Run Tests

```bash
npx playwright test
```

You can also launch the Playwright Test UI:

```bash
npx playwright test --ui
```

---

## 📁 Project Structure

```
playwright-tutorial/
├── docs/
│   └── Installing Playwright.docx     # Word document guide
├── tests/
│   └── example.spec.js                # Sample test
├── tests-examples/
│   └── demo-todo-app.spec.js          # Demo test from Playwright
├── .github/
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js               # Playwright configuration
└── README.md
```

---

## 🛠️ Tools Used

- Node.js
- Playwright
- Visual Studio Code

---

## 👤 Author

**Rajendra Gokhale**  
📧 [rajagokhale@hotmail.com](mailto:rajagokhale@hotmail.com)

---

Happy testing! ✨🐞🎭
