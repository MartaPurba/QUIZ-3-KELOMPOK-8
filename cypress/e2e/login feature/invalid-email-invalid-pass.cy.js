describe('E2E Login to dashboard', () => {

    it('input invalid email and password then Login', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.then(Cypress.session.clearCurrentSessionData)
      cy.contains("Sign In").click()
      cy.url().should('include', '/customer/account/login') 
      // <input name="login[username]" value="" autocomplete="off" id="email" type="email" class="input-text" title="Email" data-validate="{required:true, 'validate-email':true}" aria-required="true">
      cy.get('#email').type("emailtesting.ata@gmail.com")
      // <input name="login[password]" type="password" autocomplete="off" class="input-text" id="pass" title="Password" data-validate="{required:true}" aria-required="true">
      cy.get('#pass').type("wkwkwkkwk")
      cy.get('#send2').click()
      cy.get(".message-error")
    })

  })