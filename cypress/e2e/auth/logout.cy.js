import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';

describe('Logout', () => {
  it('logs out successfully', () => {
    cy.fixture('users').then(({ standard_user }) => {
      LoginPage.visit();
      LoginPage.login(standard_user.username, standard_user.password);
      InventoryPage.logout();
      cy.url().should('eq', 'https://www.saucedemo.com/');
    });
  });
});