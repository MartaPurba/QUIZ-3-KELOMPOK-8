describe('Create an account', () => {
  
    it('Create an Account input with different confirmation password', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Create an Account').click();
      cy.then(Cypress.session.clearCurrentSessionData)
      cy.get('#firstname').type("Indah prastika")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="lastname"]').type("Saragih")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="email"]').type("Indah@gmail.com")
      .should('have.attr', 'aria-required', 'true');
      cy.get('#password').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="password_confirmation"]').type("Indah06?")
      .should('have.attr', 'aria-required', 'true');
      cy.get('.action.submit.primary').click()

      cy.get('#password-confirmation-error').should('be.visible')
      .should('have.text', 'Please enter the same value again.');

    })
  })
  
