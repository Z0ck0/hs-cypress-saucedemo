import { onLoginPage } from '../../pages/loginPage';
import { UserRole } from '../../support/enums/userRole';
import { onInventoryPage } from '../../pages/inventoryPage';

describe('Login as problem user ', () => {
    it('Check that the onesie image is shown as the source for the onesie', () => {
        onLoginPage.loginAs(UserRole.PROBLEM);
        onInventoryPage.expectUserToBeLoggedIn();
        onInventoryPage.expectProductImageSrcToMatch('sauce-labs-onesie-img', 'sl-404');
    });
});