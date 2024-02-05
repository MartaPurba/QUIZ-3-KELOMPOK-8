import { EMAIL, PASSWORD } from "../const/editInformation";

describe("Login", function () {
  beforeEach(function () {
    cy.visit(Cypress.env("baseUrl"));
    cy.wait(10200);
    cy.get(".panel > .header > .authorization-link > a").click();
    cy.wait(500);
    cy.get("#email").type(EMAIL);
    cy.get("#pass").type(PASSWORD);
    cy.get("#send2").click("center").should("be.visible");
    cy.visit(Cypress.env("baseUrl") + "/customer/account");
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/address/edit/id/24934/]"
    );
    cy.wait(10000);
  });

  afterEach(function () {
    cy.clearCookies();
    cy.wait(10000);
    //   });
  });

  it("Edit address with valid value in all fields", function () {
    cy.get("#firstname")
      .invoke("val")
      .then((sometext) => cy.log(sometext));
    cy.get("#lastname")
      .invoke("val")
      .then((sometext) => cy.log(sometext));
    cy.get("#company").type("Flower");
    cy.get("#telephone").clear().type("08224774748");
    cy.get("#street_1").clear().type("Hati-hati di jalan");
    cy.get("#city").clear().type("Toronto");
    cy.get("#region_id").select(1);
    cy.get("#zip").clear().type("12490");
    cy.wait(500)
      .get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get(".message-success").should(
      "have.text",
      "\nYou saved the address.\n"
    );
  });

  it("Edit address with null value in all fields", function () {
    cy.get("#firstname").clear();
    cy.get("#lastname").clear();
    cy.get("#company").clear();
    cy.get("#telephone").clear();
    cy.get("#street_1").clear();
    cy.get("#city").clear();
    cy.get("#region_id").select([0]);
    cy.get("#zip").clear();
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

  it.only("Edit Postalcode with invalid Zip/Postal Code", function () {
    cy.get("#firstname")
      .invoke("val")
      .then((sometext) => cy.log(sometext));
    cy.get("#lastname")
      .invoke("val")
      .then((sometext) => cy.log(sometext));
    cy.get("#company")
      .invoke("val")
      .then((sometext) => cy.log(sometext));
    cy.get("#telephone")
      .invoke("val")
      .then((sometext) => cy.log(sometext));
    cy.get("#street_1")
      .invoke("val")
      .then((sometext) => cy.log(sometext));
    cy.get("#city")
      .invoke("val")
      .then((sometext) => cy.log(sometext));
    cy.get("#region_id")
      .invoke("val")
      .then((sometext) => cy.log(sometext));
    cy.get("#zip").clear().type("abcdhadjafkafk");
    cy.get('[class="message warning"]')
      .should("be.visible")
      .should(
        "have.text",
        "\nProvided Zip/Postal Code seems to be invalid. Example: 12345-6789; 12345. If you believe it is the right one you can ignore this notice.\n"
      );
    cy.wait(500)
      .get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
  });

  //   it.only("Add Address", function () {
  //     cy.get("#email").type(EMAIL);
  //     cy.get("#pass").type(PASSWORD);
  //     cy.get("#send2").click("center").should("be.visible");
  //     cy.visit(Cypress.env("baseUrl") + "/customer/account");
  //     cy.visit(
  //       "https://magento.softwaretestingboard.com/customer/address/edit/]"
  //     );
  //     cy.get("#firstname")
  //       .invoke("val")
  //       .then((sometext) => cy.log(sometext));
  //     cy.get("#lastname")
  //       .invoke("val")
  //       .then((sometext) => cy.log(sometext));
  //     cy.get("#telephone").type("08224774748");
  //     cy.get("#street_1").type("Hati-hati di jalan");
  //     cy.get("#city").type("Toronto");
  //     cy.get("#region_id").select(1);
  //     cy.get("#zip").type("12490");
  //     cy.wait(500)
  //       .get("#form-validate > .actions-toolbar > div.primary > .action")
  //       .contains("Save")
  //       .click();
  //     cy.get(".message-success > div").should(
  //       "have.text",
  //       "You saved the address."
  //     );
  //   });
});
