import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';

describe('Checkout Validation', () => {
  it('shows error when first name missing', () => {
    cy.fixture('users').then(({ standard_user }) => {
      LoginPage.visit();
      LoginPage.login(standard_user.username, standard_user.password);
      InventoryPage.addBackpack();
      InventoryPage.openCart();
      CartPage.checkout();
      CheckoutPage.fillDetails('', 'Krishnan', '682001');
      CheckoutPage.continue();
      CheckoutPage.getError().should('contain.text', 'First Name is required');
    });
  });
});