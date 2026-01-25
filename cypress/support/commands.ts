/// <reference types="cypress" />
// ***********************************************

import { onInventoryPage } from '../pages/inventoryPage';
import { onLoginPage } from '../pages/loginPage';
import type { UserRoleType } from './enums/userRoles';

Cypress.Commands.add("getByTestId", (testId: string) => {
    return cy.get(`[data-test="${testId}"]`);
});

Cypress.Commands.add('openAndVerifyLoginPage', () => {
    cy.visit('/');
    onLoginPage.expectLoginPageToBeVisible();
});

Cypress.Commands.add('loginAsSession', (role: UserRoleType) => {
    cy.session(role, () => {
        cy.openAndVerifyLoginPage();
        onLoginPage.loginAs(role);
    }, {
        validate() {
            onInventoryPage.expectBurgerMenuToBeVisible();
        },
    });
});

Cypress.Commands.add('logout', () => {
    onInventoryPage.openBurgerMenu();
    onInventoryPage.clickLogout();
});

// Declare global namespace for custom commands
declare global {
    namespace Cypress {
        interface Chainable {
            getByTestId(testId: string): Cypress.Chainable
            
            /**
             * This command is used to open the login page and verify it is visible.
             * @example cy.openAndVerifyLoginPage();
             */
            openAndVerifyLoginPage(): Cypress.Chainable<void>;
            
            /**
             * This command is used to login as a user and verify they are logged in.
             * Uses cy.session to avoid re-logging per test.
             * Validates that the login button is not visible after login.
             * @param role - The user role to log in as (e.g. UserRole.STANDARD).
             * @example cy.loginAsSession(UserRole.STANDARD);
             */
            loginAsSession(role: UserRoleType): Cypress.Chainable<void>;

            logout(): Cypress.Chainable<void>;
        }
    }
}
export { };

