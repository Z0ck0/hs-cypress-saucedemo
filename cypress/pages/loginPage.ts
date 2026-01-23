import { getCredentials, UserRoleType } from '../support/userCredentials';

export class LoginPage {

    //------------------------------------------------
    // Login Page Selectors
    //------------------------------------------------
    private loginPageUrl() {
        return cy.url();
    }
    private usernameInput() {
        return cy.getByTestId('username');
    }
    private passwordInput() {
        return cy.getByTestId('password');
    }
    private loginButton() {
        return cy.getByTestId('login-button');
    }
    private loginErrorMessage() {
        return cy.getByTestId('error');
    }


    //------------------------------------------------
    // Inventory Page Actions
    //------------------------------------------------
    loginAs(role: UserRoleType): void {
        const user = getCredentials(role);
        this.usernameInput().clear().type(user.username);
        this.passwordInput().clear().type(user.password);
        this.loginButton().click();
    }


    //------------------------------------------------
    // Login Page Assertions Methods
    //------------------------------------------------
    /**
     * Assert that the login page is visible and the username, password, and login button are visible
     * @example
     * expectLoginPageToBeVisible();
     */
    expectLoginPageToBeVisible(): void {
        this.loginPageUrl().should('include', 'saucedemo.com');
        this.usernameInput().should('be.visible')
        this.passwordInput().should('be.visible')
        this.loginButton().should('be.visible')
    }
    expectLockedOutErrorToBeDisplayed(): void {
        this.loginErrorMessage()
            .should('be.visible')
            .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
    }
}

export const onLoginPage = new LoginPage();