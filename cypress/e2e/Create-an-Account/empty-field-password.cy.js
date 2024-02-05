describe('Create an account', () => {
  
    it('Create an Account with empty field password', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Create an Account').click()
      cy.get('#firstname').type("indah bunga")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="lastname"]').type("Saragih")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="email"]').type("indah@gmail.com")
      .should('have.attr', 'aria-required', 'true');
      cy.get('#password')
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="password_confirmation"]').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('.action.submit.primary').click()

      cy.get('#password-error').should('be.visible')
      .should('have.text', 'This is a required field.');
    })
})

