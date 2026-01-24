import { onLoginPage } from '../../pages/loginPage';
import { UserRole } from '../../support/enums/userRoles';
import { onInventoryPage } from '../../pages/inventoryPage';
import { ProductName } from '../../support/enums/productNames';

describe('Login as problem user ', () => {
    beforeEach(() => {
        onLoginPage.loginAs(UserRole.PROBLEM);
        onInventoryPage.expectUserToBeLoggedIn();
    });

    it('Should verify that the onesie image is shown as the source for the onesie', () => {
        onInventoryPage.expectProductImageSrcToMatch(ProductName.ONESIE_IMG, 'red-onesie');
    });
});