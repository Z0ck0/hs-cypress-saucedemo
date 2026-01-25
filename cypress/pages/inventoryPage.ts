import { ProductKeyType } from '../support/enums/productNames';

export class InventoryPage {

    //------------------------------------------------
    // Inventory Page Selectors
    //------------------------------------------------
    private getUrl() {
        return cy.url();
    }

    private inventoryContainer() {
        return cy.getByTestId('inventory-container');
    }

    private cartLink() {
        return cy.getByTestId('shopping-cart-link');
    }

    private inventoryItemImage(productKey: ProductKeyType) {
        return cy.getByTestId(`inventory-item-${productKey}`);
    }

    private removeButton(productKey: ProductKeyType) {
        return cy.getByTestId(`remove-${productKey}`);
    }

    private burgerMenuButton() {
        return cy.get('#react-burger-menu-btn');
    }

    private logoutLink() {
        return cy.getByTestId('logout-sidebar-link');
    }


    //------------------------------------------------
    // Inventory Page Actions
    //------------------------------------------------
    addItemToCart(productKey: ProductKeyType): void {
        cy.getByTestId(`add-to-cart-${productKey}`).click();
    }

    openCart(): void {
        this.cartLink().click();
    }

    openBurgerMenu(): void {
        this.burgerMenuButton().click();
    }

    clickLogout(): void {
        this.logoutLink().click();
    }


    //------------------------------------------------
    // Inventory Page Assertions Methods
    //------------------------------------------------
    /**
     * Assert that the user is successfully logged in by verifying:
     * - The inventory container is visible
     * - The URL includes 'inventory.html'
     * @example
     * expectUserToBeLoggedIn();
     */
    expectUserToBeLoggedIn(): void {
        this.inventoryContainer().should('be.visible');
        this.getUrl().should('include', 'inventory.html');
    }

    /**
     * Assert that the product image src matches the expected src
     * @param productKey - The product key
     * @param expectedSrc - The expected src to be included in the image src attribute
     * @example
     * expectProductImageSrcToMatch(ProductKeys.ONESIE_IMG, 'red-onesie');
     */
    expectProductImageSrcToMatch(productKey: ProductKeyType, expectedSrc: string): void {
        this.inventoryItemImage(productKey)
            .should('be.visible')
            .should('have.attr', 'src')
            .and('include', expectedSrc);
    }

    /**
     * Assert that the remove button is displayed
     * @param productKey - The product key
     * @example
     * expectRemoveButtonShouldBeDisplayed(ProductKeys.FLEECE_JACKET);
     */
    expectRemoveButtonToBeVisibleOn(productKey: ProductKeyType) {
        this.removeButton(productKey)
            .should('be.visible');
    }

    /**
     * Assert that the burger menu is visible
     * @example
     * expectBurgerMenuToBeVisible();
     */
    expectBurgerMenuToBeVisible(): void {
        this.burgerMenuButton().should('be.visible');
    }
}

export const onInventoryPage = new InventoryPage();