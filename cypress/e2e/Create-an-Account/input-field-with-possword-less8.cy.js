describe('Create an account', () => {
  
    it('Create an Account input field passeord with value password less 8', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Create an Account').click()
      cy.get('#firstname').type("Yanda Geofanus")
      cy.get('[name="lastname"]').type("Sitorus")
      cy.get('[name="email"]').type("purbamarta20@gmail.com")
      cy.get('#password').type("Yanda06")
      cy.get('[name="password_confirmation"]').type("Yanda06")
      cy.get('.action.submit.primary').click()

      cy.get('#password-error').should('be.visible')
      .should('have.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.');
    })
  })
