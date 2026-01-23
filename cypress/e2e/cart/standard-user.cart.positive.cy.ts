import { onLoginPage } from '../../pages/loginPage';
import { UserRole } from '../../support/enums/userRole';
import { onInventoryPage } from '../../pages/inventoryPage';
import { onCartPage } from '../../pages/cartPage';

describe('Login as standard user', () => {
    beforeEach(() => {
        onLoginPage.loginAs(UserRole.STANDARD);
        onInventoryPage.expectUserToBeLoggedIn();
    });
    it('Confirm login and check the URL', () => {
        // Login is confirmed in the beforeEach hook
    });
    it('Add items to the cart, verify quantity and remove button visibility', () => {
        onInventoryPage.addItemToCart('sauce-labs-backpack');
        onInventoryPage.openCart();
        onCartPage.expectItemQuantityToBe('1');
        onCartPage.expectRemoveButtonToBeVisible('sauce-labs-backpack');
    });
});
