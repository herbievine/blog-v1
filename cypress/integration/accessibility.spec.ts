context('Accessibility', () => {
  it('Tests the accessibility on search screen', () => {
    cy.visit('/search?q=next')
      .url()
      .should('eq', 'http://localhost:4000/search?q=next')
      .injectAxe()

    cy.checkA11y()
  })

  it('Tests the accessibility on post screen', () => {
    cy.visit('/post/my-first-post')
      .url()
      .should('eq', 'http://localhost:4000/post/my-first-post')
      .injectAxe()

    cy.checkA11y()
  })
})
