describe('Basic Test', () => {
  it('Visits example page', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  })
})
