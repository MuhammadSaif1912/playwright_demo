# Playwright Automation Demo

This repository contains the automation tests implemented using Playwright with TypeScript, following the Page Object Model (POM) design pattern.

---

## Overview

The assignment automates the following scenarios on [https://www.saucedemo.com/](https://www.saucedemo.com/):

1. **Verify User Login to the Website with Valid Credentials**  
   - User logs in with valid username and password  
   - Successfully navigates to the Product Page  

2. **User Places an Order and Checks Out Successfully**  
   - User adds a product to the cart  
   - Proceeds to the cart and verifies the product is added  
   - Completes checkout by filling in information and confirms order  
   - Validates the "Thank You for Your Order" confirmation message  

3. **Use OpenWeather API to Validate Current Weather**  
   - Calls the OpenWeather Current Weather Data API  
   - Asserts the temperature of Islamabad  
   - Checks for a successful API response  

---

## Project Structure

playwright-sdet-intern/
│
├── pages/ # Page Object Model classes for each page
│ ├── loginpage.ts
│ ├── productpage.ts
│ ├── cartpage.ts
│ └── checkoutpage.ts
│
├── tests/ # Test files for each scenario
│ ├── logintest.spec.ts
│ ├── ordertest.spec.ts
│ └── weathertest.spec.ts
│
├── package.json # Project dependencies and scripts
├── playwright.config.ts # Playwright configuration file
└── README.md # This file

---

## Setup and Run Tests

1. Clone the repository:
   git clone https://github.com/yourusername/playwright-sdet-intern.git
   cd playwright-sdet-intern
   
2. Install dependencies:
   npm install

3. Install Playwright browsers:
   npx playwright install

4. Run all tests:
   npx playwright test

5. Run a specific test (example: login test):
    npx playwright test tests/logintest.spec.ts
