describe('Create an account', () => {
  
    it('Create an Account with empty field last name', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Create an Account').click()
      cy.get('#firstname').type("indah bejana")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="lastname"]')
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="email"]').type("Indah@gmail.com")
      .should('have.attr', 'aria-required', 'true');
      cy.get('#password').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="password_confirmation"]').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('.action.submit.primary').click()

      cy.get('#lastname-error').should('be.visible')
      .should('have.text', 'This is a required field.');
    })
})

