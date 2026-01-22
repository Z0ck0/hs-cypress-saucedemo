import { onLoginPage } from '../pages/loginPage';
import { UserRole } from '../support/enums/userRole';

describe('login test', () => {
    it('logs in standard user', () => {
        cy.visit('/');
        onLoginPage.loginAs(UserRole.STANDARD);
        cy.url().should('include', '/inventory.html')
    });
});
