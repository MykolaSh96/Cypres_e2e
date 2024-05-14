it("Test Case", () => {

  /**
   * contains     => [class*="className"]
   * starts-with  => [class^="className"]
   * ends-with    => [class$="className"]
   */

  // cy.get('https://techglobal-training.com/frontend/dynamic-elements')

  cy.visit('https://techglobal-training.com/frontend/dynamic-elements')
  
  cy.get('[id^="box_1_"]').should('be.visible')
  cy.get('[id^="box_2_"]').should('be.visible')
  
  // cy.get('[id^=box_1_"]'.should('be.visible')parent().parent().children().eq(1).should('be.visible')

  cy.get('[id^="box_"]').each(($el) => {
    expect($el).to.be.visible
  })
});