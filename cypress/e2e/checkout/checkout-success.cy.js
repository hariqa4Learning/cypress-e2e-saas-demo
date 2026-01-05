import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';

describe('Checkout Success', () => {
  it('completes checkout', () => {
    cy.fixture('users').then(({ standard_user }) => {
      LoginPage.visit();
      LoginPage.login(standard_user.username, standard_user.password);
      InventoryPage.addBackpack();
      InventoryPage.openCart();
      CartPage.checkout();
      CheckoutPage.fillDetails('Hari', 'Krishnan', '682001');
      CheckoutPage.continue();
      CheckoutPage.finish();
      cy.contains('Thank you for your order').should('be.visible');
    });
  });
});