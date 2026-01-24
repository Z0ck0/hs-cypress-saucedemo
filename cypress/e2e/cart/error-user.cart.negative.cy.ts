import { onInventoryPage } from '../../pages/inventoryPage';
import { onLoginPage } from '../../pages/loginPage';
import { ProductName } from '../../support/enums/productNames';
import { UserRole } from '../../support/enums/userRoles';

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

    it('Should add fleece jacket to cart and confirm (this should fail)', () => {
        onInventoryPage.addItemToCart(ProductName.FLEECE_JACKET);
        onInventoryPage.expectCartBadgeToBeDisplayed();
    });
});