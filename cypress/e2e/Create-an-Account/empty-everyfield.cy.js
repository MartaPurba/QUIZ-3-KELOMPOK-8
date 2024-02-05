describe('Create an account', () => {
  
  it('Creat an Account with empty every field', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.contains("Create an Account").click()
    cy.get('#firstname')
    .should('have.attr', 'aria-required', 'true');
    cy.get('[name="lastname"]')
    .should('have.attr', 'aria-required', 'true');
    cy.get('[name="email"]')
    .should('have.attr', 'aria-required', 'true');
    cy.get('#password')
    .should('have.attr', 'aria-required', 'true');
    cy.get('[name="password_confirmation"]')
    .should('have.attr', 'aria-required', 'true');
    cy.get('.action.submit.primary').click()

    cy.get('#firstname-error').should('be.visible')
    .should('have.text', 'This is a required field.');
    cy.get('#lastname-error').should('be.visible')
    .should('have.text', 'This is a required field.');
    cy.get('#email_address-error').should('be.visible')
    .should('have.text', 'This is a required field.');
    cy.get('#password-error').should('be.visible')
    .should('have.text', 'This is a required field.');
    cy.get('#password-confirmation-error').should('be.visible')
    .should('have.text', 'This is a required field.');
  })
})

