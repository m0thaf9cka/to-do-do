Cypress.Commands.add('setupAndVisit', (response: string) => {
  cy.server();
  cy.route('GET', Cypress.env('TODO_LIST_ENDPOINT'), response);
  cy.visit('/');
});

declare namespace Cypress {
  interface Chainable<Subject = any> {
    setupAndVisit(response: string): Chainable<null>;
  }
}
