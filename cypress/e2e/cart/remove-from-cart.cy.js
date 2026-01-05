import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';

describe('Remove from Cart', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ standard_user }) => {
      LoginPage.visit();
      LoginPage.login(standard_user.username, standard_user.password);
    });
  });

  it('removes product from cart', () => {
    InventoryPage.addBackpack();
    InventoryPage.openCart();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    CartPage.getBadge().should('not.exist');
  });
});