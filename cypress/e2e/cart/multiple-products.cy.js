import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';

describe('Multiple Products', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ standard_user }) => {
      LoginPage.visit();
      LoginPage.login(standard_user.username, standard_user.password);
    });
  });

  it('adds multiple products', () => {
    InventoryPage.addBackpack();
    InventoryPage.addBikeLight();
    CartPage.getBadge().should('have.text', '2');
  });
});