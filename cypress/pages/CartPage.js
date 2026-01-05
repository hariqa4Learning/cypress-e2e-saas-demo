class CartPage {
  checkout() {
    cy.get('[data-test="checkout"]').click();
  }

  getBadge() {
    return cy.get('.shopping_cart_badge');
  }
}

export default new CartPage();