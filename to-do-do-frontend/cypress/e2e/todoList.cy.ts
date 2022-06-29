describe('todo list', () => {
  it('should display a todo list on successful response', () => {
    cy.setupAndVisit('fixture:todolist.full');
    cy.get('.todoList ul li').should('have.length', 2);
  });
  it('should display a warning message on empty list response', () => {
    cy.setupAndVisit('fixture:todolist.empty');
    cy.get('.todoList ul').should('not.exist');
    cy.get('.emptyListText').should('have.text', 'No items found');
  });
  it('should display an error message on failed response', () => {
    cy.server();
    cy.route({
      url: Cypress.env('GET_TODO_LIST_ENDPOINT'),
      method: 'GET',
      status: 500,
      response: {}
    });
    cy.visit('/');
    cy.wait(10000);
    cy.get('.todoList ul').should('not.exist');
    cy.get('.errorListText').should('have.text', 'Something went wrong');
  });
});
