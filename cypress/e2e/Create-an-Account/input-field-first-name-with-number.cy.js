describe('Create an account', () => {
  
    it('passes', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Create an Account').click()
      cy.get('#firstname').type("sdfagtrhrgfdv")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="lastname"]').type("hjtkujtyhrgb")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="email"]').type("sdfedcsv@gmail.com")
      .should('have.attr', 'aria-required', 'true');
      cy.get('#password').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="password_confirmation"]').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('.action.submit.primary').click()
    })
})
