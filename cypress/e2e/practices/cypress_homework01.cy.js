/// <reference types="cypress"/>

describe('Cypress Hpmework_01', ()=>{
  beforeEach(()=>{
    cy.visit('https://techglobal-training.com/frontend/project-1')
 })
 
 it('Test Case 01-Validate the Contact Us Information',()=>{
     //2.Validate the heading is “Contact Us”
     cy.get(".is-size-3").should("contain", "Contact Us");
    // 3.Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
     cy.get('.is-size-3 + p').should('contain',"2800 S River Rd Suite 310, Des Plaines, IL 60018")
    //4.Validate the email is “info@techglobalschool.com"
     cy.get('.is-size-3 + p + p').should('contain',"info@techglobalschool.com")
     //5.Validate the phone number is “(224) 580-2150”
     cy.get('.is-size-3 + p + p +p ').should('contain','(224) 580-2150')

  })

  it('Test Case 02-Validate the Full name input box',()=>{
   // 2.Validate that the Full name input box is displayed
    cy.get(':nth-child(1) > .control > .input').should('be.visible')
  
    // 3.Validate that the Full name input box is required
    cy.get(':nth-child(1) > .control > .input').should('have.attr', 'required')

    
    //4.Validate that the label of the Full name input box is “Full name *”
    cy.get('form > :nth-child(1) > .label').should('contain','Full name *')
    
    // //5.Validate that the placeholder of the Full name input box is “Enter your full name”
    
      cy.get(':nth-child(1) > .control > .input')
      .should('have.attr', 'placeholder','Enter your full name')
  })

 it('Test Case 03-Validate the Gender radio button', ()=>{
    
     //02.Validate the label is “Gender *”
     cy.get('.control > .label').should('contain',"Gender *")

     //03.Validate that the Gender is required
     cy.get('[type="radio"] ').should('have.attr', 'required')
     
     
     //04.Validate the options are “Female”, “Male” and “Prefer not to disclose”
     cy.get('.control > :nth-child(2) ').should('contain','Male')
     cy.get('.control > :nth-child(3) ').should('contain','Female')
     cy.get('.control > :nth-child(4) ').should('contain','Prefer not to disclose')

     //05.Validate the options are clickable and not selected
     cy.get('.control > :nth-child(2) ').should('not.be.checked').click()
     cy.get('.control > :nth-child(3) ').should('not.be.checked').click()
     cy.get('.control > :nth-child(4) ').should('not.be.checked').click()

     //06.Click on the “Male” option and validate it is selected while the others are not selected??????????????????????
      
     //07.Click on the “Female” option and validate it is selected while the others are not selected????????????????????
    

    })

    it('Test Case 04 - Validate the Address input box', ()=>{
    
      // 02. Validate that the Address input box is displayed
     cy.get(':nth-child(3) > .control > .input').should('be.visible')
     
     // 03. Validate that the Address input box is not required
     cy.get(':nth-child(3) > .control > .input').should('not.have.attr', 'requaired')
     
     // 04. Validate that the label of the Address input box is “Address”
     cy.get(':nth-child(3) > .label').should('contain', 'Address')
     
     // 05. Validate that the placeholder of the Address input box is “Enter your address*”
     cy.get(':nth-child(3) > .control > .input').should('have.attr', 'placeholder', 'Enter your address')
     })

  it('Test Case 05 - Validate the Email input box', () => {

    // 02.Validate that the Email input box is displayed
    cy.get(':nth-child(4) > .control > .input').should('be.visible');
    // 03.Validate that the Email input box is required
    cy.get(':nth-child(4) > .control > .input').should('have.attr', 'required');

    // 04.Validate that the label of the Email input box is “Email *”
    cy.get(':nth-child(4) > .label').should('contain', 'Email *');

    // 05.Validate that the placeholder of the Email input box is “Enter your email”
    cy.get(':nth-child(4) > .control > .input').should('have.attr', 'placeholder', 'Enter your email');
  })

    
    
    it('Test Case 06 - Validate the Phone input box',()=>{
    //02-Validate that the Phone input box is displayed
    cy.get(':nth-child(5) > .control > .input').should('be.visible')
    
    //03-Validate that the Phone input box is not required
    cy.get(':nth-child(5) > .control > .input').should('not.have.attr', 'required')
    
    //04-Validate that the label of the Phone input box is “Phone”
    cy.get(':nth-child(5) > .label').should('contain', 'Phone')
   
    //05-Validate that the placeholder of the Address input box is “Enter your phone number”
    cy.get(':nth-child(5) > .control > .input').should('have.attr','placeholder','Enter your phone number')
   
  })

  it('Test Case 07 - Validate the Message text area', () =>{
    // 02.Validate that the Message text area is displayed
    cy.get('.textarea').should('be.visible')
    // 03.Validate that the Message text area is not required
    cy.get('.textarea').should('not.have.attr', 'required')
    // 04.Validate that the label of the Message text area is “Message”
    cy.get(':nth-child(6) > .label').should('contain','Message')
    // 05.Validate that the placeholder of the Message text area is “Type your message here…”
    cy.get('.textarea').should('have.attr', 'placeholder','Type your message here...')
  })

  it('Test Case 08 - Validate the Consent checkbox',()=>{
    // 02.Validate the label is “I give my consent to be contacted.”
    cy.get('.checkbox').should('contain','I give my consent to be contacted.')

    // 03.Validate that the Consent checkbox is required
    cy.get('[type="checkbox"]').should('have.attr', 'required');

    // 04.Validate that the Consent checkbox is clickable
    cy.get('[type="checkbox"]').click()
    // .should('be.checked')
    // .click()
    // .should('not.be.checked')

    // 05.Click on the “I give my consent to be contacted.” checkbox and validate it is selected
    cy.get('[type="checkbox"]').should('be.checked')

    // 06.Click on the “I give my consent to be contacted.” checkbox again and validate it is not selected  
    cy.get('[type="checkbox"]').click()
    .should('not.be.checked')
  })

  it('Test Case 09 - Validate the SUBMIT button', () =>{
    
    //02.Validate the “SUBMIT” button is displayed
    cy.get('.control > .button').should('be.visible')
   
    //04.Validate that the button text is “SUBMIT”
    cy.get('.control > .button').should('have.text','SUBMIT') 
    
    // //03.Validate the “SUBMIT” button is clickable??????????????????
     //cy.get('.control > .button').should('is.enabled')
    // .should('not.be.disabled');

  })

  it.only('Test Case 10 -- Validate the form submission',()=>{
    // 02.Enter a first name
    // 03.Select a gender
    // 04.Enter an address
    // 05.Enter an email
    // 06.Enter a phone number
    // 07.Enter a message
    // 08.Select the “I give my consent to be contacted.” checkbox
    // 09.Click on the “SUBMIT” button
    // 10.Validate the form message “Thanks for submitting!” is displayed under the “SUBMIT” button

    cy.get(':nth-child(1) > .control > .input').type('Mykola')
    cy.get('.control > :nth-child(2)').click()
    cy.get(':nth-child(3) > .control > .input').type('Adress')
    cy.get(':nth-child(4) > .control > .input').type('mykolash08@gmail.com')
    cy.get(':nth-child(5) > .control > .input').type('224-555-5555')
    cy.get('.textarea').type("Finally I'm done with Cypress homework ")
    cy.get('[type="checkbox"]').click()
    cy.get('.control > .button').click()
    cy.get('.mt-5').should('be.visible')


  })

 
})