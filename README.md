# Cypress Code Challenge

Basic Cypress + TypeScript E2E framework setup for testing https://www.saucedemo.com.


## Setup 
1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add credentials**
   - Rename `cypress/config/.env.credentials.example` to `cypress/config/.env.credentials`
   - Add your credentials


## How to run (scripts)
- `npm run cypress:open` - Open Cypress Test Runner (GUI)
- `npm run cypress:run` - Run tests in headless mode
- `npm run test:all` - Run all tests
   ### Run tests by type (file naming):
   - `npm run test:smoke` - Run ALL smoke tests
   - `npm run test:positive` - Run ALL positive flow tests
   - `npm run test:negative` - Run ALL negative flow tests
   ### Run tests by feature (folder):
   - `npm run test:auth` - Run ALL auth tests under auth folder
   - `npm run test:product` - Run ALL tests under product folder
   - `npm run test:cart` - Run ALL tests under cart folder


## Project Structure
- **cypress/config/** - environment variables
- **cypress/support/enums/userRole.ts** - User role constants
- **cypress/tsconfig.json** - TypeScript configuration for Cypress
- **cypress/pages/** - Page Objects for login, inventory and cart pages
- **cypress/support/commands.ts** - Custom Cypress commands (`getByTestId`, `openHomePage`)
- **cypress/support/userCredentials.ts** - Helper for mapping user roles to credentials using `Cypress.env`
- **cypress/support/e2e.ts** - Global setup and `beforeEach` hook


## Completed Tasks
- Cypress and TypeScript setup
- Base URL configuration (SauceDemo)
- Environment variables setup with dotenv
- User roles enum created
- TypeScript configuration
- Page Objects for Login, Inventory and Cart pages created
- Custom Cypress commands for `data-test` selectors and opening the home page
- Global `beforeEach` hook that visits the home page and verifies the login page
- Helper for user credentials wired to SauceDemo user roles
- Smoke test for app load and positive cart flow for the standard user


## Intentionally Not Implemented
The following patterns were **not** added to this project:
- **BasePage** — shared base class for page objects  
- **Helper classes** - dedicated helper modules  
- **Utils classes** - generic utility modules  
- **Page Object Factory** - factory for creating page objects
- **Test Facade** - facade that exposes high-level workflows (e.g. login + add to cart) 
- **Reports** - HTML or other 3rd‑party test reports  


**Why:**
- **BasePage** - There is not enough shared logic across the few page objects to justify a base class; each page stays self-contained.
- **Helper classes** — There are not enough repeatable actions to extract into dedicated helpers; custom commands cover what we need.
- **Utils classes** — Same as helpers: not enough repeatable, generic logic to warrant a utils layer.
- **Page Object Factory** - The flows are simple and direct; no need for a factory that creates page objects 
- **Test Facade** -  The flows are simple, so there’s no need for a test facad that orchestrates multi-page workflows.
- **Reports** — The task asked not to install 3rd‑party libraries unless necessary. Cypress’s built‑in output and the Test Runner suffice for this scope.

The project is small, and keeping the framework simple improves readability and fast onboarding. These patterns can be added later if the suite grows—the current structure leaves room for that without locking you in.