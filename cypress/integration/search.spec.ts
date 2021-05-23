context('Search', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(1000)
  })

  it('Should navigate correctly', () => {
    cy.get('[data-cy=search-bar]')
      .type('react')
      .url()
      .should('eq', 'http://localhost:4000/search?q=react')
  })

  it('Should find a post by title', () => {
    cy.get('[data-cy=search-bar]')
      .type('tutorial')
      .get('[data-cy=filter-title]')
      .click()
      .get('[data-cy=post]')
      .should('be.visible')
  })

  it('Should find a post by category', () => {
    cy.get('[data-cy=search-bar]')
      .type('react')
      .get('[data-cy=filter-category]')
      .click()
      .get('[data-cy=post]')
      .should('be.visible')
  })

  it('Should find a post by author', () => {
    cy.get('[data-cy=search-bar]')
      .type('herbie')
      .get('[data-cy=filter-author]')
      .click()
      .get('[data-cy=post]')
      .should('be.visible')
  })

  it('Should match value', () => {
    cy.get('[data-cy=search-bar]')
      .type('react')
      .should('have.value', 'react')
      .visit('/')
  })
})
