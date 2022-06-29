Cypress.Commands.add('setupAndVisit', (response: string) => {
  cy.server();
  cy.route('GET', Cypress.env('GET_TODO_LIST_ENDPOINT'), response);
  cy.route('PATCH', Cypress.env('TOGGLE_TODO_ENDPOINT') + 1, {});
  cy.route('PATCH', Cypress.env('TOGGLE_TODO_ENDPOINT') + 2, {});
  cy.visit('/');
});

declare namespace Cypress {
  interface Chainable<Subject = any> {
    setupAndVisit(response: string): Chainable<null>;
  }
}
