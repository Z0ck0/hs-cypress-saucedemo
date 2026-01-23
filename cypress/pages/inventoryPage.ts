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
    private cartBadge() {
        return cy.getByTestId('shopping-cart-badge');
    }
    private inventoryItemImage(productKey: string) {
        return cy.getByTestId(`inventory-item-${productKey}`);
    }


    //------------------------------------------------
    // Inventory Page Actions
    //------------------------------------------------
    /**
     * Add an item to the cart
     * @param productKey - The product key to add to the cart
     * @example
     * addItemToCart('sauce-labs-fleece-jacket');
     */
    addItemToCart(productKey: string): void {
        cy.getByTestId(`add-to-cart-${productKey}`).click();
    }
    openCart(): void {
        this.cartLink().click();
    }
    getCartBadgeText() {
        return this.cartBadge().invoke('text');
    }


    //------------------------------------------------
    // Inventory Page Assertions Methods
    //------------------------------------------------
    expectUserToBeLoggedIn(): void {
        this.inventoryContainer().should('be.visible');
        this.getUrl().should('include', 'inventory.html');
    }
    /**
     * Assert that the product image src matches the expected src
     * @param productKey - The product key
     * @param expectedSrc - The expected src to be included in the image src attribute
     * @example
     * expectProductImageSrcToMatch('sauce-labs-fleece-jacket', 'https://www.saucedemo.com/static/media/sauce-labs-fleece-jacket.68174a58.jpg');
     */
    expectProductImageSrcToMatch(productKey: string, expectedSrc: string): void {
        this.inventoryItemImage(productKey)
            .should('be.visible')
            .should('have.attr', 'src')
            .and('include', expectedSrc);
    }
    expectCartBadgeToBeDisplayed(): void {
        this.cartBadge()
            .should('be.visible')
    }

}

export const onInventoryPage = new InventoryPage();