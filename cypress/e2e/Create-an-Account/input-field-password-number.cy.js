describe('Create an account', () => {
  
    it('Create an Account input field password with number', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Create an Account').click()
      cy.get('#firstname').type("Agustina Ria")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="lastname"]').type("karo")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="email"]').type("Agustina@gmail.com")
      .should('have.attr', 'aria-required', 'true');
      cy.get('#password').type("21344561")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="password_confirmation"]').type("21344561")
      .should('have.attr', 'aria-required', 'true');
      cy.get('.action.submit.primary').click()

      cy.get('#password-error').should('be.visible')
      .should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.');
    })
})

