describe('Smoke - Verify app loads', () => {
    beforeEach(() => {
        cy.openAndVerifyLoginPage();
    });

    it('Should load the app and show the login form', () => {
        // Login page visibility is asserted in beforeEach
    });
});
