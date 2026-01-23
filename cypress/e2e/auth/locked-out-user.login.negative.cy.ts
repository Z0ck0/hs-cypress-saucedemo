import { onLoginPage } from '../../pages/loginPage';
import { UserRole } from '../../support/enums/userRole';

describe('Login attempt with a locked out user', () => {
    it('Should display a locked out error message on login', () => {
        onLoginPage.loginAs(UserRole.LOCKED_OUT);
        onLoginPage.expectLockedOutErrorToBeDisplayed();
    });
});