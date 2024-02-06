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
  it("Add new address null data", () => {
    cy.get(".action.showcart").click();
    cy.get(".checkout-methods-items > :nth-child(1) > .action").click();
    cy.visit("https://magento.softwaretestingboard.com/checkout/#shipping");
    cy.wait(5000);
    cy.get(".step-title").should("contain.text", "Shipping Address");
    cy.get(".new-address-popup > .action").click();
    cy.get('[name="company"]').clear();
    cy.get('[name="street[0]"]').clear();
    cy.get('[name="city"]').clear();
    cy.get('[name="region_id"]').select([0]);
    cy.get('[name="postcode"]').clear();
    cy.get('[name="country_id"]').select([0]);
    cy.get('[name="telephone"]').clear();
    cy.contains("Ship here").click();
    cy.get(".field-error").should("contain.text", "This is a required field.");
  });
});
