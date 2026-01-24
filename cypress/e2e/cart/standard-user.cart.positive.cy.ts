import { UserRole } from '../../support/enums/userRoles';
import { onInventoryPage } from '../../pages/inventoryPage';
import { onCartPage } from '../../pages/cartPage';
import { ProductName } from '../../support/enums/productNames';

describe('Login as standard user', () => {
    beforeEach(() => {
        cy.loginAsSession(UserRole.STANDARD);
    });
    
    it('Should successfully login and navigate to inventory page', () => {
        // Login is confirmed in the beforeEach hook
        onInventoryPage.expectUserToBeLoggedIn();
    });
    
    it('Should add items to the cart, verify quantity and remove button visibility', () => {
        onInventoryPage.addItemToCart(ProductName.BACKPACK);
        onInventoryPage.openCart();
        onCartPage.expectItemQuantityToBe('1');
        onCartPage.expectRemoveButtonToBeVisible(ProductName.BACKPACK);
    });
});