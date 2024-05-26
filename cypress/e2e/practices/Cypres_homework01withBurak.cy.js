/// <reference types="cypress" />

describe('Cypress_Project1', () => {
  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend/project-1')
  })

  // Navigate to https://techglobal-training.com/frontend/project-1
  // Validate the heading is “Contact Us”
  // Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
  // Validate the email is “info@techglobalschool.com"
  // Validate the phone number is “(224) 580-2150”
  
  it('Test Case 01 - Validate the Contact Us information', () => {
    cy.get('.is-size-3').as('header').should('have.text','Contact Us')

    const expextedText = ['2800 S River Rd Suite 310, Des Plaines, IL 60018', 'info@techglobalschool.com', '(224) 580-2150']
    
    cy.get('@header').nextAll().each((ele, index) =>{
      cy.wrap(ele).should('have.text', expextedText[index])
    })
  })
  // Navigate to https://techglobal-training.com/frontend/project-1
  // Validate that the Full name input box is displayed
  // Validate that the Full name input box is required
  // Validate that the label of the Full name input box is “Full name *”
  // Validate that the placeholder of the Full name input box is “Enter your full name”


  it('Test Case 02 - Validate the Full name input box', () => {

    cy.get('[for="name"]')
      .parent()
      .find("input")
      .should("be.visible")
      .and("have.attr", "placeholder", "Enter your full name")
      .and("have.attr", "required")

    cy.get('[for="name"]').should('have.text', 'Full name *')

  })

  it('Test Case 03 - Validate the Gender radio button',() =>{

    // Navigate to https://techglobal-training.com/frontend/project-1
    // Validate the label is “Gender *”
    // Validate that the Gender is required
    // Validate the options are “Female”, “Male” and “Prefer not to disclose”
    // Validate the options are clickable and not selected
    // Click on the “Male” option and validate it is selected while the others are not selected
    // Click on the “Female” option and validate it is selected while the others are not selected
  })


})