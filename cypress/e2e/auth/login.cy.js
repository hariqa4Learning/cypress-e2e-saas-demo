import LoginPage from '../../pages/LoginPage';

describe('Login', () => {
  it('logs in with valid credentials', () => {
    cy.fixture('users').then(({ standard_user }) => {
      LoginPage.visit();
      LoginPage.login(standard_user.username, standard_user.password);
      cy.url().should('include', '/inventory.html');
    });
  });
});