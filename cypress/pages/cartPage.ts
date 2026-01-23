export class CartPage {

    //------------------------------------------------
    // Cart Page Selectors
    //------------------------------------------------
    private cartList() {
        return cy.getByTestId('cart-list');
    }
    private itemQuantity() {
        return cy.getByTestId('item-quantity');
    }
    private removeButton(string: string) {
        return cy.getByTestId(`remove-${string}`);
    }


    //------------------------------------------------
    // Cart Page Actions
    //------------------------------------------------
    getItemQuantity() {
        return this.itemQuantity().invoke('text');
    }


    //------------------------------------------------
    // Cart Page Assertions Methods
    //------------------------------------------------
    expectCartListToBeVisible(): void {
        this.cartList().should('be.visible');
    }
    expectRemoveButtonToBeVisible(string: string): void {
        this.removeButton(string).should('be.visible');
    }
    expectItemQuantityToBe(string: string): void {
        this.itemQuantity().should('have.text', string);
    }
}

export const onCartPage = new CartPage();