# Hornetsecurity Cypress Code Challenge

Basic Cypress + TypeScript E2E framework setup for testing https://www.saucedemo.com.


## Setup
1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add credentials**
   - Rename `cypress/support/config/.env.credentials.example` to `cypress/support/config/.env.credentials`
   - Add your credentials


## How to run (scripts)
- `npm run cypress:open` - Open Cypress Test Runner (GUI)
- `npm run cypress:run` - Run tests headlessly
- `npm test` - Run tests


## Project Structure
- **cypress/config/** - environment variables
- **cypress/support/enums/userRoles.ts** - User role constants
- **cypress/tsconfig.json** - TypeScript configuration for Cypress


## Completed Tasks
- Cypress and TypeScript setup
- Base URL configuration (SauceDemo)
- Environment variables setup with dotenv
- User roles enum created
- TypeScript configuration