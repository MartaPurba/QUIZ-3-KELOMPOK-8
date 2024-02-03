describe("Proceed to checkout", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.contains("Sign In").click({ force: true });
    cy.fixture("user2").then(function (user2) {
      this.user2 = user2;
    });
  });

  it.only("Verify Success Login", () => {
    cy.get(".action.showcart").click();
    cy.get("#top-cart-btn-checkout").click();
    cy.get('[name="company"]').type("Academy");
    cy.get('[name="street[0]"]').type("Jl. Raya Serang");
    cy.get('[name="city"]').type("Bandung");
    cy.get(".select").select("Arizona");
    cy.get('[name="postcode"]').type("11554");
    cy.get('[name="telephone"]').type("081255464587");
    cy.get(".button.action.continue.primary").click();
  });

  //failed proceed to checkout - cart is empty
  it("Verify to cart - Failed checkout, cart is empty", () => {
    cy.get(".action.showcart").click();
    cy.get(".subtitle").should(
      "contain.text",
      "You have no items in your shopping cart."
    );
  });
});
