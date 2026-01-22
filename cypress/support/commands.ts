/// <reference types="cypress" />
// ***********************************************

// Utility command: get element by data-test attribute
Cypress.Commands.add("getByTestId", (testId: string) => {
    return cy.get(`[data-test="${testId}"]`);
});

Cypress.Commands.add('openHomePage', () => {
  cy.visit('/');
});



// Declare global namespace for custom commands
declare global {
    namespace Cypress {
        interface Chainable {
            getByTestId(testId: string): Cypress.Chainable
            openHomePage(): Cypress.Chainable<void>;
        }
    }
}
export { };
