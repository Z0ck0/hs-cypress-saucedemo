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