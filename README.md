# Playwright DemoQA Automation Project

## 1. Project Overview

This project is a **beginner-level UI automation framework** built using **Playwright with JavaScript**. It demonstrates hands-on learning of Playwright fundamentals by automating common UI components on the DemoQA application.

The project is designed to showcase:

* Understanding of Playwright test structure
* Proper locator strategies
* Assertions (hard & soft)
* Handling common web elements
* Clean and readable test code suitable for a portfolio

---

## 2. Application Under Test (AUT)

**DemoQA** – [https://demoqa.com](https://demoqa.com)

---

## 3. Tech Stack

* Playwright
* JavaScript (Node.js)
* Playwright Test Runner

---

## 4. Project Structure

```
playwright-demoqa-automation/
│
├── tests/
│   ├── textBox.spec.js
│   ├── radioButton.spec.js
│   ├── checkbox.spec.js
│   ├── dropdown.spec.js
│
├── test-data/
│   └── userData.json
│
├── playwright.config.js
├── package.json
├── README.md
└── .gitignore
```

---

## 5. Test Scope

### In Scope

* Input fields
* Radio buttons
* Checkboxes
* Dropdowns
* Built-in, CSS, and XPath locators
* Hard & soft assertions
* Playwright fixtures (page, context)

### Out of Scope

* API testing
* CI/CD integration
* Authentication
* File uploads/downloads
* iFrames

---

## 6. Locator Strategy

Priority followed across the project:

1. getByRole
2. getByLabel
3. getByPlaceholder
4. CSS selectors
5. XPath (used only when unavoidable)

---

## 7. Test Data

**test-data/userData.json**

```json
{
  "fullName": "John Doe",
  "email": "john.doe@test.com"
}
```

---

## 8. Test Scenarios & Cases

### Module 1: Text Box

* Verify the user can submit the text box form
* Verify name is displayed
* Verify email is displayed

### Module 2: Radio Buttons

* Verify user can select the "Yes" radio button
* Verify the selected value is displayed

### Module 3: Checkboxes

* Expand all checkboxes
* Select the Desktop checkbox
* Verify the selected checkbox appears in the result

### Module 4: Dropdown

* Select Blue from the dropdown
* Verify selected value

---

## 9. Assertions Strategy

* Hard assertions are used for critical validations
* Soft assertions can be used when validating multiple independent outputs

---

## 10. How to Run the Project

```bash
npm install
npx playwright install
npx playwright test
```

---

## 11. Future Enhancements

* Page Object Model (POM)
* Test hooks (beforeEach, afterEach)
* Data-driven testing
* CI/CD integration

---

## 12. Portfolio Note

This project represents **learning progress** and demonstrates foundational automation skills using Playwright.
