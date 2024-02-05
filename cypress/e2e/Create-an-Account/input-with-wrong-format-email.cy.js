describe('Create an account', () => {
  
    it('passes', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains("Create an Account").click()
      cy.then(Cypress.session.clearCurrentSessionData)
      cy.get('#firstname').type("Indah prastika")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="lastname"]').type("Saragih")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="email"]').type("Indah@gmamimumemo")
      .should('have.attr', 'aria-required', 'true');
      cy.get('#password').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="password_confirmation"]').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('.action.submit.primary').click()

      cy.get('#email_address-error').should('be.visible')
      .should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).');
    })
  })
  
  