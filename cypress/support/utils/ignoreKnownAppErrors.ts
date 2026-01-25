// prevent app errors from failing this negative test
export const ignoreKnownAppErrors = () => {
    Cypress.on('uncaught:exception', () => false);
};
