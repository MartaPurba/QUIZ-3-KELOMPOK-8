import { EMAIL, PASSWORD } from "../const/editInformation";

describe("Login", function () {
  beforeEach(function () {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(".panel > .header > .authorization-link > a").click({ force: true });
    cy.get("#email").type(EMAIL);
    cy.get("#pass").type(PASSWORD);
    cy.get("#send2").click("center").should("be.visible");
    cy.visit(Cypress.env("baseUrl") + "/customer/account");
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/edit/]"
    );
    cy.wait(500);
  });

  afterEach(function () {
    cy.clearCookies();
    cy.wait(500);
  });

  it("Edit Information", function () {
    cy.get("#firstname").clear().type("testing123");
    cy.get("#lastname").clear().type("minminmin");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
  });

  it("Invalid Edit Information - Null fields", function () {
    cy.get("#firstname").clear();
    cy.get("#lastname").clear();
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get("#firstname-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
    cy.get("#lastname-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
  });

  it("Invalid Edit Information - Null lastname fields", function () {
    cy.get("#firstname").clear().type("testing");
    cy.get("#lastname").clear();
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get("#lastname-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
  });

  it("Invalid Edit Information - Null firstname fields", function () {
    cy.get("#firstname").clear();
    cy.get("#lastname").clear().type("testingminmin");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get("#firstname-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
  });

  it("Edit email with wrong current password", function () {
    cy.get("#change-email").check(); // Check checkbox element
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
    cy.get("#change-email").check(); // Check checkbox element
    cy.get("#current-password").type("@Testingmin");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get(".message-success").should(
      "have.text",
      "\nYou saved the account information.\n"
    );
  });

  it("Edit password with null value", function () {
    cy.get("#change-password").check(); // Check checkbox element
    cy.get("#change-password").type("{ESC}");
    cy.get("#password").type("{ESC}");
    cy.get("#password-confirmation").type("{ESC}");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get("#current-password-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
    cy.get("#password-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
    cy.get("#password-confirmation-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
  });

  it("Edit password with valid value", function () {
    cy.get("#change-password").check(); // Check checkbox element
    cy.get("#current-password").type("@Testingmin");
    cy.get("#password").type("@Testingmin");
    cy.get("#password-confirmation").type("@Testingmin");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get(".message-success").should(
      "have.text",
      "\nYou saved the account information.\n"
    );
  });

  it.only("Edit password with wrong current password", function () {
    cy.get("#change-password").check(); // Check checkbox element
    cy.get("#current-password").type("cobalagiaja");
    cy.get("#password").type("@Testingmin");
    cy.get("#password-confirmation").type("@Testingmin");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get(".message-error").should(
      "have.text",
      "\nThe password doesn't match this account. Verify the password and try again.\n"
    );
  });
});
