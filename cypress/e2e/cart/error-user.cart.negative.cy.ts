import { onInventoryPage } from '../../pages/inventoryPage';
import { onLoginPage } from '../../pages/loginPage';
import { UserRole } from '../../support/enums/userRole';


describe('Login with error user', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', () => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        });

        onLoginPage.loginAs(UserRole.ERROR);
        onInventoryPage.expectUserToBeLoggedIn();
    });

    it('Add fleece jacket to cart and confirm (this should fail)', () => {
        onInventoryPage.addItemToCart('sauce-labs-fleece-jacket');
        onInventoryPage.expectCartBadgeToBeDisplayed();
    });
});