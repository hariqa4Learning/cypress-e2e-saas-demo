describe('Protected Route', () => {
  it('redirects unauthenticated user to login page', () => {
    cy.visit('/inventory.html', {
      failOnStatusCode: false
    });

    cy.url().should('eq', 'https://www.saucedemo.com/');
  });
});
