
describe('Full Flow', { tags: '@regression' }, () => {
  it('complete checkout', () => {
    cy.login()
    cy.addToCart('Sauce Labs Backpack')
    cy.get('.shopping_cart_link').click()
    cy.contains('Checkout').click()
    cy.get('[data-test="firstName"]').type('QA')
    cy.get('[data-test="lastName"]').type('Tester')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()
    cy.contains('Finish').click()
    cy.contains('Thank you for your order')
  })
})
