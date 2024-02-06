const userDataCheckout = require("../../fixtures/userDataCheckout.json");

describe("Checkout Functionality", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.contains("Sign In").click({ force: true });
    cy.get("#email").type(userDataCheckout["account item valid in cart"].email);
    cy.get('[name="login[password]"]').type(
      userDataCheckout["account item valid in cart"].password
    );
    cy.get("#send2").click();
  });

  afterEach(() => {
    cy.clearCookies();
    cy.wait(10000);
  });

  // passed
  it("Success Checkout - Item Valid in Cart", () => {
    cy.get(".action.showcart").click();
    cy.get(".checkout-methods-items > :nth-child(1) > .action").click();
    cy.visit("https://magento.softwaretestingboard.com/checkout/#shipping");
    cy.wait(5000);
    cy.get(".step-title").should("contain.text", "Shipping Address");
    cy.contains("Next").click();
    cy.get(5000);
    cy.contains("Place Order").click();
    cy.get(".checkout-success")
      .should("be.visible")
      .should("contain.text", "Your order number is: ");
  });
});
