const userDataCheckout = require("../../fixtures/userDataCheckout.json");

describe("Checkout Functionality", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.contains("Sign In").click();
    cy.wait(3000);
    cy.get("#email").type(userDataCheckout["account item valid in cart"].email);
    cy.get('[name="login[password]"]').type(
      userDataCheckout["account item valid in cart"].password
    );
    cy.get("#send2").click().should("be.visible");
  });

  afterEach(() => {
    cy.clearCookies();
    cy.wait(10000);
  });

  //passed
  it("Success Checkout - Click Button Add New Address", () => {
    cy.get(".action.showcart").click();
    cy.get(".checkout-methods-items > :nth-child(1) > .action").click();
    cy.visit("https://magento.softwaretestingboard.com/checkout/#shipping");
    cy.wait(5000);
    cy.get(".step-title").should("contain.text", "Shipping Address");
    cy.get(".new-address-popup > .action").click();
    cy.get('[name="company"]').type("Corporate");
    cy.get('[name="street[0]"]').type("Jl. Bahagia");
    cy.get('[name="city"]').type("Bandung");
    cy.get('[name="country_id"]').select("India");
    // cy.wait(5000);
    cy.get('[name="region_id"]').select("Delhi");
    cy.get('[name="postcode"]').type("14146");
    cy.get('[name="telephone"]').type("08135566887");
    // cy.wait(5000);
    cy.contains("Ship here").click();
    cy.get(".selected-item").should("be.visible");
  });
});
