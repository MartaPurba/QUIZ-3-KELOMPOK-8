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
    cy.wait(500).get("#change-password").check(); // Check checkbox element
  });

  afterEach(function () {
    cy.clearCookies();
    cy.wait(10000);
  });

  //EDIT PASSWORD
  it("Edit password with null value", function () {
    cy.wait(200);
    cy.get("#current-password").type("{ESC}");
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

  it("Edit password with null value  in new and confirm new password fields ", function () {
    cy.wait(200);
    cy.get("#current-password").type("@Testingmin");
    cy.get("#password").type("{ESC}");
    cy.get("#password-confirmation").type("{ESC}");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get("#password-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
    cy.get("#password-confirmation-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
  });

  it("Edit password with null value  in current and confirm new password fields ", function () {
    cy.wait(200);
    cy.get("#current-password").type("{ESC}");
    cy.get("#password").type("@Testingmin");
    cy.get("#password-confirmation").type("{ESC}");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action")
      .contains("Save")
      .click();
    cy.get("#current-password-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
    cy.get("#password-confirmation-error")
      .should("be.visible")
      .should("have.text", "This is a required field.");
  });

  it("Edit password with null value  in current and new password fields ", function () {
    cy.wait(200);
    cy.get("#current-password").type("{ESC}");
    cy.get("#password").type("{ESC}");
    cy.get("#password-confirmation").type("@Testingmin");
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
      .should("have.text", "Please enter the same value again.");
  });

  it("Edit password with valid value", function () {
    cy.wait(200);
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

  it("Edit password with wrong current password", function () {
    cy.wait(200);
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

  it("Edit password with does not match the format Class of character", function () {
    cy.wait(200);
    cy.get("#current-password").type("@Testingmin");
    cy.get("#password").type("coba12345");
    cy.get("#password-error")
      .should("be.visible")
      .should(
        "have.text",
        "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters."
      );
  });
});
