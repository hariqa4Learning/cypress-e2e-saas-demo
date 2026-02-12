
describe('Smoke', { tags: '@smoke' }, () => {
  it('login works', () => {
    cy.login()
    cy.url().should('include','inventory')
  })
})
