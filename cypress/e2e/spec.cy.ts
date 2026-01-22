import { LoginPage } from '../pages/loginPage';
describe('login test', () => {
    it('logs in standard user', () => {
        cy.visit('/');
        const loginPage = new LoginPage();
        loginPage.logIn(
            Cypress.env('STANDARD_USER'), 
            Cypress.env('PASSWORD')
        );
        cy.url().should('include', '/inventory.html')
    });
});
