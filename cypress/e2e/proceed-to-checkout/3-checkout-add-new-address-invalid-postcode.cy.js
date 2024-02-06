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
  it("Add New Address - Invalid ZIP/Postal Code", () => {
    cy.get(".action.showcart").click();
    cy.get(".checkout-methods-items > :nth-child(1) > .action").click();
    cy.visit("https://magento.softwaretestingboard.com/checkout/#shipping");
    cy.wait(5000);
    // cy.get(".step-title").should("contain.text", "Shipping Address");
    cy.get(".new-address-popup > .action").click();
    cy.get('[name="company"]').type("Corporate");
    cy.get('[name="street[0]"]').type("Jl. Bahagia");
    cy.get('[name="city"]').type("Bandung");
    cy.get('[name="region_id"]').select("Arizona");
    cy.wait(500);
    cy.get('[name="postcode"]').type("ssajjks11223");
    cy.get(".message.warning").should(
      "contain.text",
      "Provided Zip/Postal Code seems to be invalid. Example: 12345-6789; 12345. If you believe it is the right one you can ignore this notice."
    );
    cy.wait(500);
    cy.get('[name="country_id"]').select("United States");
    cy.get('[name="telephone"]').type("08135566887");
  });
});
