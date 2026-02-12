Cypress.Commands.add('login', () => {
  cy.visit('/')
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('secret_sauce')
  cy.get('#login-button').click()
})

Cypress.Commands.add('addToCart', (item) => {
  cy.contains(item).parents('.inventory_item').find('button').click()
})
