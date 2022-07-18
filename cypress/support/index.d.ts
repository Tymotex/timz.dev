declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Retrieves the `data-testid` attribute value of an HTML element.
         * @example
         * cy.getTestElement("breadcrumbs")
         */
        getTestElement(selector: string): Chainable<any>;
    }
}
