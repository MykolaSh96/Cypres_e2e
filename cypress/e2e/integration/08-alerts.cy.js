/// <reference types="cypress" />


describe("Handling Alerts", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.contains(".cards", "Alerts").click();
  });

  it("Handling the Warning Alert", () => {
    
    cy.on("window:alert", (str) => {
      console.log(`My warning alert text content is: ${str}`);
      expect(str).equal("You are on TechGlobal Training application.");
    });

    cy.get("#warning_alert").click();
  });
});