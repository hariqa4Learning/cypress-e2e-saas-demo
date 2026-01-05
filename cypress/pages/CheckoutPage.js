class CheckoutPage {
  fillDetails(first, last, zip) {

    if (first) {
      cy.get('[data-test="firstName"]').type(first);
    }

    if (last) {
      cy.get('[data-test="lastName"]').type(last);
    }

    if (zip) {
      cy.get('[data-test="postalCode"]').type(zip);
    }
  }

  continue() {
    cy.get('[data-test="continue"]').click();
  }

  finish() {
    cy.get('[data-test="finish"]').click();
  }

  getError() {
    return cy.get('[data-test="error"]');
  }
}

export default new CheckoutPage();
