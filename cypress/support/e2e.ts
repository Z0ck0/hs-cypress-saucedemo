import './commands'
import { onLoginPage } from '../pages/loginPage';

// Global beforeEach hook - runs before every test in all spec files
// This ensures cy.visit('/') is executed automatically without repeating it in each spec
beforeEach(() => {
  cy.openHomePage();
  onLoginPage.expectLoginPageToBeVisible();
});
