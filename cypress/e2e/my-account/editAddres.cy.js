import { EMAIL, PASSWORD } from "../const/editInformation";

describe("Login", function () {
  before(function () {
    cy.visit(Cypress.env("baseUrl"));
    cy.wait(200);
    cy.get(".panel > .header > .authorization-link > a").click({ force: true });
    cy.wait(500);
  });

  //   afterEach(function () {
  //     cy.clearCookies();
  //     cy.wait(10000);
  //   //   });
  // });

  it("Edit address with null value in all fields", function () {
    cy.wait(1000);
    cy.get("#email").type(EMAIL);
    cy.get("#pass").type(PASSWORD);
    cy.get("#send2").click("center").should("be.visible");
    cy.visit(Cypress.env("baseUrl") + "/customer/account");
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/address/edit/id/24934/]"
    );
    cy.get("#firstname").clear();
    cy.get("#lastname").clear();
    cy.get("#telephone").type("{ESC}");
    cy.get("#street_1").type("{ESC}");
    cy.get("#city").type("{ESC}");
    cy.get("#region_id").type("{ESC}");
    cy.get("#zip").type("{ESC}");
    cy.wait(500)
      .get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get("#firstname-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
    cy.get("#lastname-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
    cy.get("#telephone-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
    cy.get("#street_1-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
    cy.get("#region_id-error")
      .should("be.visible")
      .should("have.text", "Please select an option.");
    cy.get("#zip-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
  });

  it.only("Add Address", function () {
    cy.get("#email").type(EMAIL);
    cy.get("#pass").type(PASSWORD);
    cy.get("#send2").click("center").should("be.visible");
    cy.visit(Cypress.env("baseUrl") + "/customer/account");
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/address/edit/]"
    );
    cy.get("#firstname")
      .invoke("val")
      .then((sometext) => cy.log(sometext));
    cy.get("#lastname")
      .invoke("val")
      .then((sometext) => cy.log(sometext));
    cy.get("#telephone").type("08224774748");
    cy.get("#street_1").type("Hati-hati di jalan");
    cy.get("#city").type("Toronto");
    cy.get("#region_id").select(1);
    cy.get("#zip").type("12490");
    cy.wait(500)
      .get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get(".message-success > div").should(
      "have.text",
      "You saved the address."
    );
  });
});
