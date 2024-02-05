describe('Create an account', () => {
  
    it('Create an Account every field with valid data', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Create an Account').click()
      cy.get('#firstname').type("Indah prastika")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="lastname"]').type("Saragih")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="email"]').type("Indah@gmail.com")
      .should('have.attr', 'aria-required', 'true');
      cy.get('#password').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('[name="password_confirmation"]').type("Indah06!")
      .should('have.attr', 'aria-required', 'true');
      cy.get('.action.submit.primary').click()
    })
})
