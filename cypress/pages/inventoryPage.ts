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

    private cartBadge() {
        return cy.getByTestId('shopping-cart-badge');
    }

    private inventoryItemImage(productKey: ProductKeyType) {
        return cy.getByTestId(`inventory-item-${productKey}`);
    }


    //------------------------------------------------
    // Inventory Page Actions
    //------------------------------------------------
    /**
     * Add an item to the cart
     * @param productKey - The product key to add to the cart
     * @example
     * addItemToCart(ProductKeys.FLEECE_JACKET);
     */
    addItemToCart(productKey: ProductKeyType): void {
        cy.getByTestId(`add-to-cart-${productKey}`).click();
    }

    /**
     * Open the shopping cart by clicking the cart link
     * @example
     * openCart();
     */
    openCart(): void {
        this.cartLink().click();
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
     * Assert that the shopping cart badge is displayed (indicating items in cart)
     * @example
     * expectCartBadgeToBeDisplayed();
     */
    expectCartBadgeToBeDisplayed(): void {
        this.cartBadge()
            .should('be.visible')
    }

}

export const onInventoryPage = new InventoryPage();