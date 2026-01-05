import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';

describe('Product Sorting', () => {
  it('sorts by price low to high', () => {
    cy.fixture('users').then(({ standard_user }) => {
      LoginPage.visit();
      LoginPage.login(standard_user.username, standard_user.password);
      InventoryPage.sortLowToHigh();

      cy.get('.inventory_item_price').then(prices => {
        const values = [...prices].map(p =>
          Number(p.innerText.replace('$', ''))
        );
        const sorted = [...values].sort((a, b) => a - b);
        expect(values).to.deep.equal(sorted);
      });
    });
  });
});