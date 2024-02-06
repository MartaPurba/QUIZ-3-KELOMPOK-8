import { EMAIL, PASSWORD } from "../const/editInformation";

describe("Login", function () {
  beforeEach(function () {
    cy.visit(Cypress.env("baseUrl"));
    cy.wait(10000);
    cy.get(".panel > .header > .authorization-link > a", {
      setTimeout: 60000,
    }).click({ force: true });
    cy.wait(10000);
    cy.get("#email", {
      setTimeout: 60000,
    }).type(EMAIL);
    cy.wait(500).get("#pass").type(PASSWORD);
    cy.wait(500).get("#send2").click("center").should("be.visible");
    cy.visit(Cypress.env("baseUrl") + "/customer/account");
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/edit/]"
    );
    cy.wait(10000);
    cy.wait(500).get("#change-email").check(); // Check checkbox element
  });

  afterEach(function () {
    cy.clearCookies();
    cy.wait(7000);
  });

  it("Edit email with wrong current password", function () {
    cy.get("#current-password").type("cobatesting");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get(".message-error").should(
      "have.text",
      "\nThe password doesn't match this account. Verify the password and try again.\n"
    );
  });

  it("Edit email with valid current password", function () {
    cy.get("#current-password").type("@Testingmin");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get(".message-success").should(
      "have.text",
      "\nYou saved the account information.\n"
    );
  });

  it("Edit email with invalid format", function () {
    cy.get("#email").clear().type("abscdhfjfk");
    cy.get("#current-password").type("@Testingmin");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get("#email-error").should(
      "have.text",
      "Please enter a valid email address."
    );
  });

  it("Edit email with valid format", function () {
    cy.get("#email").clear().type("testingminmin@gmail.com");
    cy.get("#current-password").type("@Testingmin");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get("message-success").should(
      "have.text",
      "\nYou saved the account information.\n"
    );
  });
});
