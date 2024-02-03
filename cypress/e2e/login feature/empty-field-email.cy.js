describe('E2E Login to dashboard', () => {

    it('Empty email field and valid password field then Login', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.then(Cypress.session.clearCurrentSessionData)
      cy.contains("Sign In").click()
      cy.url().should('include', '/customer/account/login') 
      cy.get('#email')
      .should('have.attr', 'aria-required', 'true');
      cy.get('#pass')
      .should('have.attr', 'aria-required', 'true');
      cy.get('#pass').type("email4testingQA")
      cy.get('#send2').click()
      cy.get('#email-error').should('be.visible');
    })

  })