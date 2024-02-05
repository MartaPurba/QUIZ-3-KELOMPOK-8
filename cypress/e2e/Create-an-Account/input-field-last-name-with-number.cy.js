describe('Create an account', () => {
  
    it('passes', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Create an Account').click()
      cy.get('#firstname').type("87645 34235")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="lastname"]').type("43558")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="email"]').type("Indah02@gmail.com")
      .should('have.attr', 'aria-required', 'true');
      cy.get('#password').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="password_confirmation"]').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('.action.submit.primary').click()
    })
})

