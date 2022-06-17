describe('Home', () => {
  it('should have a title', () => {
    cy.visit('/')

    cy.get('h1').contains('Welcome')
  })
})

export {}
