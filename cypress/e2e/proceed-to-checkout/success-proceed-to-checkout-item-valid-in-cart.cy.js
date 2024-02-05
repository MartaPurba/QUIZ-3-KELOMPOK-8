const userDataCheckout = require("../../fixtures/userDataCheckout.json");

describe("Checkout Functionality", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.contains("Sign In").click({ force: true });
    cy.get("#email").type(userDataCheckout.email);
    cy.get('[name="login[password]"]').type(userDataCheckout.password);
    cy.get("#send2").click();
  });

  // passed
  it.only("Success Checkout - Item Valid in Cart", () => {
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

  it("Success Checkout - Click Button Add New Address", () => {
    cy.get(".action.showcart").click();
    cy.get(".checkout-methods-items > :nth-child(1) > .action").click();
    cy.visit("https://magento.softwaretestingboard.com/checkout/#shipping");
    cy.wait(5000);
    cy.get(".step-title").should("contain.text", "Shipping Address");
    // cy.get('[name="company"]').type("Academy");
    // cy.get('[name="street[0]"]').type("Jl. Raya Bandung");
    // cy.get('[name="city"]').type("Bandung");
    // cy.get('[name="country_id"]').select("Indonesia");
    // cy.wait(5000);
    // cy.get('[name="region"]').type("Bandung Barat");
    // cy.get('[name="postcode"]').type("14146");
    // cy.get('[name="telephone"]').type("081255664477");
    // cy.wait(5000);
    // cy.get(".radio").click();
    cy.contains("Next").click();
    // cy.get(5000);
    // cy.contains("Place Order").click();
    // cy.wait(5000);
    // cy.get(".checkout-success").should(
    //   "contain.text",
    //   "Your order number is: "
    // );
  });
});
