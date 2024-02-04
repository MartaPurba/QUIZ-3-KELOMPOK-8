describe("choose product view and update shopping cart", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.contains("Sign In").click({ force: true });
    cy.fixture("user2").then(function (user2) {
      this.user2 = user2;
    });
  });
  it.only ("Verify Success Login", () =>{
    //choose product view
    cy.get(':nth-child(1) > .product-item-info').click();
    cy.get(".size > .swatch-attribute-options").click();
    cy.get(".swatch-attribute.color > .swatch-attribute-options").click();
    cy.get("#qty").type("2");
    cy.get("#product-addtocart-button").click();
    //update shopping cart
    cy.get(".showcart").click();
    cy.get(".odd > :nth-child(1) > .product-item-details > .actions > .primary > .action").click();
    cy.get("#option-label-size-143-item-167").click();
    cy.get("#option-label-color-93-item-50").click();
    cy.get("#qty").type("1");
    cy.get("#product-updatecart-button").click();
  });
}); 