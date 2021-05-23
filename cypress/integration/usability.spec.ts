context('Usability', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(1000)
  })

  it('Should search for a post by user, then click the first one, then go to home', () => {
    cy
      .get('[data-cy=search-bar]')
      .type('next')
      .url()
      .should('eq', 'http://localhost:4000/search?q=next')
      .get('[data-cy=filter-category]')
      .click()
      .url()
      .should('eq', 'http://localhost:4000/search?q=next')
      .get('[data-cy=post]')
      .first()
      .click()
      .url()
      .should('eq', 'http://localhost:4000/post/my-first-post')
      .get('[data-cy=home]')
      .click()
      .url()
      .should('eq', 'http://localhost:4000/')
  }) 

  it('Should look at the next category, then click the first one, then go to home', () => {
    cy
      .get('[data-cy=category-next]')
      .type('next')
      .url()
      .should('eq', 'http://localhost:4000/category/next')
      .get('[data-cy=post]')
      .first()
      .click()
      .url()
      .should('eq', 'http://localhost:4000/post/my-first-post')
      .get('[data-cy=home]')
      .click()
      .url()
      .should('eq', 'http://localhost:4000/')
  }) 
})
