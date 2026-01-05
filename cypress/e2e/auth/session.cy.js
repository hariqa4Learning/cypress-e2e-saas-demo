import LoginPage from '../../pages/LoginPage';

describe('Session Persistence', () => {
  it('persists login after reload', () => {
    cy.fixture('users').then(({ standard_user }) => {
      LoginPage.visit();
      LoginPage.login(standard_user.username, standard_user.password);
      cy.reload();
      cy.url().should('include', '/inventory.html');
    });
  });
});