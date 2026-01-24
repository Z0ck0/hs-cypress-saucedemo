import { ProductKeyType } from '../support/enums/productNames';

export class CartPage {

    //------------------------------------------------
    // Cart Page Selectors
    //------------------------------------------------
    private itemQuantity(){
        return cy.getByTestId('item-quantity');
    }
    
    private removeButton(productKey: ProductKeyType){
        return cy.getByTestId(`remove-${productKey}`);
    }


    //------------------------------------------------
    // Cart Page Assertions Methods
    //------------------------------------------------
    /**
     * Assert that the remove button for a specific product is visible
     * @param productKey - The product key identifier
     * @example
     * expectRemoveButtonToBeVisible(ProductKeys.BACKPACK);
     */
    expectRemoveButtonToBeVisible(productKey: ProductKeyType): void {
        this.removeButton(productKey).should('be.visible');
    }
    
    /**
     * Assert that the item quantity matches the expected value
     * @param expectedQuantity - The expected quantity as a string (e.g., '1', '2')
     * @example
     * expectItemQuantityToBe('1');
     */
    expectItemQuantityToBe(expectedQuantity: string): void {
        this.itemQuantity().should('have.text', expectedQuantity);
    }
}

export const onCartPage = new CartPage();