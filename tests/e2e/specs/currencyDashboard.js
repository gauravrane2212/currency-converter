// https://docs.cypress.io/api/introduction/api.html

describe("Currency Dashboard", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visits the app root url", () => {
    cy.contains("h1", "Currency Converter");
    cy.contains("h4", "USD - United States Dollars");
    cy.contains("h3", "USD");
    cy.contains("h3", "USD");
  });

  it("Checks if the default user input starts correctly", () => {
    cy.get("input[type=number]").should("have.value", "10");
  });

  it("Should not allow user to enter valid number", () => {
    cy.get("input[type=number]").type("1200.34");
    cy.get("input[type=number]").should("have.value", "1200.34");
  });

  it("Should not allow user to enter invalid numbers", () => {
    cy.get("input[type=number]").type("Hello World");
    cy.get("input[type=number]").should("have.value", "");
  });
});
