describe('todo search', () => {
  it('should have a search input on the page', () => {
    cy.visit('/');
    cy.get('.todoSearch');
  });
});
