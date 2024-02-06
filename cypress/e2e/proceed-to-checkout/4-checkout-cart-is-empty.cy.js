const userDataCheckout = require("../../fixtures/userDataCheckout.json");

describe("Checkout Functionality", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.contains("Sign In").click({ force: true });
    cy.get("#email").type(userDataCheckout["account cart is empty"].email2);
    cy.get('[name="login[password]"]').type(
      userDataCheckout["account cart is empty"].password2
    );
    cy.get("#send2").click();
  });

  afterEach(() => {
    cy.clearCookies();
    cy.wait(10000);
  });

  // passed
  it("Failed checkout, cart is empty", () => {
    cy.get(".action.showcart").click();
    cy.get(".subtitle").should(
      "contain.text",
      "You have no items in your shopping cart."
    );
  });
});
