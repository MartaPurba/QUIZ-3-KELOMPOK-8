describe("Login", function () {
  before(function () {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(".panel > .header > .authorization-link > a").click({ force: true });
    cy.fixture("user").then(function (user) {
      this.user = user;
    });
  });

  it("Edit Information", function () {
    cy.get("#email").type(this.user.email);
    cy.get("#pass").type(this.user.password);
    cy.get("#send2").click("center").should("be.visible");
    cy.get('.customer-name"').click().should("be.visible");
    cy.get('[data-target="dropdown"]');
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a"
    );
  });
});
