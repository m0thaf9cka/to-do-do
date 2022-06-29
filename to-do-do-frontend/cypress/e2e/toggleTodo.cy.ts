describe('toggle todo', () => {
  beforeEach(() => {
    cy.setupAndVisit('fixture:todolist.full');
  })
  it('should set todo item to complete state', () => {
    cy.get('.todoList ul li').first().as('todoItem');
    cy.get('@todoItem').find('.MuiCheckbox-root').click();
    cy.get('@todoItem').find('.MuiListItemText-root').should('have.class', 'todoListItemText-complete');
  });
  it('should set todo item to complete state', () => {
    cy.get('.todoList ul li').eq(1).as('todoItem');
    cy.get('@todoItem').find('.MuiCheckbox-root').click();
    cy.get('@todoItem').find('.MuiListItemText-root').should('have.class', 'todoListItemText-active');
  });
});
