/// <reference types="cypress"/>



describe('Practice01 - Validate Google Home Page', () => {
  beforeEach(() =>{
    cy.visit("https://www.google.com")
  })
  
  it('TASK-1: Validate the Google Home Page Title and URL', () => {
      
      cy.title().should('include', "Google")
      cy.url().should('include', "https://www.google.com/")
  });
  it('Task-2: Validate the Google Logo Presence ', () => {
    
    cy.get('.lnXdpd');
   })

  it('TASK-3: Validate the Google Search Results', () => {
    
    cy.get('#APjFqb').type("Cypres{enter}")
  })

  it('Task-4 Validate the Google Search Autocomplete Suggestions', () =>{
    cy.get('#APjFqb').type('Artifacial Inteligence')
    cy.get('#jZ2SBf > .wM6W7d > span').click()
    cy.url().should("include", "q=artificial+intelligence" )

  })
 });