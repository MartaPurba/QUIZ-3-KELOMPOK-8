describe('E2E Login to dashboard', () => {

    it('Valid email field and empty password field then Login', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.then(Cypress.session.clearCurrentSessionData)
      cy.contains("Sign In").click()
      cy.url().should('include', '/customer/account/login') 
      cy.get('#email')
      .should('have.attr', 'aria-required', 'true');
      cy.get('#pass')
      .should('have.attr', 'aria-required', 'true');
      cy.get('#email').type("email4testing.ata@gmail.com")
      cy.get('#send2').click()
      cy.get('#pass-error').should('be.visible')
      .should('have.text', 'This is a required field.');
    })

  })