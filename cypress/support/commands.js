Cypress.Commands.add("getTestElement", (selector) => {
    return cy.get(`[data-testid="${selector}"]`);
});


// Source: https://github.com/cypress-io/cypress/issues/249.
// const COMMAND_DELAY = 500;

// for (const command of ['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains']) {
//     Cypress.Commands.overwrite(command, (originalFn, ...args) => {
//         const origVal = originalFn(...args);

//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(origVal);
//             }, COMMAND_DELAY);
//         });
//     });
// } 
