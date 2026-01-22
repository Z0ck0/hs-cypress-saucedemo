export class InventoryPage {

    //------------------------------------------------
    // Inventory Page Selectors
    //------------------------------------------------
    private inventoryContainer() {
        return cy.getByTestId('inventory-container');
    }
    private addToCartSauceLabsBackpackButton() {
        return cy.getByTestId('add-to-cart-sauce-labs-backpack');
    }
    private addToCartFleeceJacketButton() {
        return cy.getByTestId('add-to-cart-fleece-jacket');
    }
    private addToCartOnesieButton() {
        return cy.getByTestId('add-to-cart-onesie');
    }
    private cartLink() {
        return cy.getByTestId('shopping-cart-link');
    }
    private cartBadge() {
        return cy.getByTestId('shopping-cart-badge');
    }


    //------------------------------------------------
    // Inventory Page Actions
    //------------------------------------------------
    verifyInventoryContainerIsVisible(): void {
        this.inventoryContainer().should('be.visible');
    }
    addToCartSauceLabsBackpack(): void {
        this.addToCartSauceLabsBackpackButton().click();
    }
    addToCartFleeceJacket(): void {
        this.addToCartFleeceJacketButton().click();
    }
    addToCartOnesie(): void {
        this.addToCartOnesieButton().click();
    }
    openCart(): void {
        this.cartLink().click();
    }
    getCartBadgeText() {
        return this.cartBadge().invoke('text');
    }
}

export const onInventoryPage = new InventoryPage();