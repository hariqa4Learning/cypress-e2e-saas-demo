import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';

describe('Add to Cart', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ standard_user }) => {
      LoginPage.visit();
      LoginPage.login(standard_user.username, standard_user.password);
    });
  });

  it('adds product to cart', () => {
    InventoryPage.addBackpack();
    CartPage.getBadge().should('have.text', '1');
  });
});