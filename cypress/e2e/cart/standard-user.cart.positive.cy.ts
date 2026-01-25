import { UserRole } from '../../support/enums/userRoles';
import { onInventoryPage } from '../../pages/inventoryPage';
import { onCartPage } from '../../pages/cartPage';
import { onLoginPage } from '../../pages/loginPage';
import { ProductName } from '../../support/enums/productNames';

describe('Login as standard user', () => {
    beforeEach(() => {
        cy.loginAsSession(UserRole.STANDARD);
    });
    
    it('Should successfully login and navigate to inventory page', () => {
        onInventoryPage.expectUserToBeLoggedIn();
    });
    
    it('Should add items to the cart, verify quantity and remove button visibility', () => {
        onInventoryPage.addItemToCart(ProductName.BACKPACK);
        onInventoryPage.openCart();
        onCartPage.expectItemQuantityToBe('1');
        onCartPage.expectRemoveButtonToBeVisible(ProductName.BACKPACK);
    });

    it('Should successfully logout and navigate to login page', () => {
        onInventoryPage.expectBurgerMenuToBeVisible();
        cy.logout();
        onLoginPage.expectLoginPageToBeVisible();
    });
});