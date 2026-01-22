import { getCredentials, UserRoleType } from '../support/userCredentials';

export class LoginPage {

    //------------------------------------------------
    // Login Page Selectors
    //------------------------------------------------
    private usernameInput() {
        return cy.getByTestId('username');
    }
    private passwordInput() {
        return cy.getByTestId('password');
    }
    private loginButton() {
        return cy.getByTestId('login-button');
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
}

export const onLoginPage = new LoginPage();