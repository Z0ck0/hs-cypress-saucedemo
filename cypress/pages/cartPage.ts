export class CartPage {

    //------------------------------------------------
    // Cart Page Selectors
    //------------------------------------------------
    private cartList() {
        return cy.getByTestId('cart-list');
    }
    private removeSauceLabsBackpackButton() {
        return cy.getByTestId('remove-sauce-labs-backpack');
    }
    private removeFleeceJacketButton() {
        return cy.getByTestId('remove-fleece-jacket');
    }
    private itemQuantity() {
        return cy.getByTestId('item-quantity');
    }


    //------------------------------------------------
    // Cart Page Actions
    //------------------------------------------------
    verifyCartListIsVisible(): void {
        this.cartList().should('be.visible');
    }
    verifyRemoveSauceLabsBackpackButtonIsVisible(): void {
        this.removeSauceLabsBackpackButton().should('be.visible');
    }
    verifyRemoveFleeceJacketButtonIsVisible(): void {
        this.removeFleeceJacketButton().should('be.visible');
    }
    verifyItemQuantityIsVisible(): void {
        this.itemQuantity().should('be.visible');
    }
    getItemQuantity() {
        return this.itemQuantity().invoke('text');
    }
}

export const onCartPage = new CartPage();