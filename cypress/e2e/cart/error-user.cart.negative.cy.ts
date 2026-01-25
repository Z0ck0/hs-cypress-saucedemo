import { onInventoryPage } from '../../pages/inventoryPage';
import { onLoginPage } from '../../pages/loginPage';
import { ProductName } from '../../support/enums/productNames';
import { UserRole } from '../../support/enums/userRoles';
import { ignoreKnownAppErrors } from '../../support/utils/ignoreKnownAppErrors';

describe('Login with error user', () => {
    beforeEach(() => {
        ignoreKnownAppErrors();
        cy.openAndVerifyLoginPage();
        onLoginPage.loginAs(UserRole.ERROR);
        onInventoryPage.expectUserToBeLoggedIn();
    });

    it('Should add fleece jacket to cart and confirm (this should fail)', () => {
        onInventoryPage.addItemToCart(ProductName.FLEECE_JACKET);
        onInventoryPage.expectRemoveButtonToBeVisibleOn(ProductName.FLEECE_JACKET)
    });
});