# Hornetsecurity Cypress Code Challenge

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
   ### Run tests by feature (folder):
   - `npm run test:auth` - Run ALL auth tests under auth folder


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