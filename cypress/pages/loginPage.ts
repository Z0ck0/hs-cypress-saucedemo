import { getCredentials, UserRoleType } from '../support/userCredentials';


export class LoginPage {
    private usernameInput() {
        return cy.get('[data-test="username"]');
    }
    private passwordInput() {
        return cy.get('[data-test="password"]');
    }
    private loginButton() {
        return cy.get('[data-test="login-button"]');
    }

    logIn(username: string, password: string): void {
        this.usernameInput().clear().type(username);
        this.passwordInput().clear().type(password);
        this.loginButton().click();

    }

    loginAs(role: UserRoleType): void {
        const user = getCredentials(role);
        this.logIn(user.username, user.password);
    }
}

export const onLoginPage = new LoginPage();