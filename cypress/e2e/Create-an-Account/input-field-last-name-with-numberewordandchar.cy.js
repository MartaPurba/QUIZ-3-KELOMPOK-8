describe('Create an account', () => {
  
    it('Create an Account input field first name with combination number, word and char', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Create an Account').click()
      cy.get('#firstname').type("roma yana")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="lastname"]').type("Saragih124!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="email"]').type("roma3425@gmail.com")
      .should('have.attr', 'aria-required', 'true');
      cy.get('#password').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="password_confirmation"]').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('.action.submit.primary').click()

      cy.get('#lastname-error').should('be.visible')
    .should('have.text', 'Last Name is not valid!');


    })
})

