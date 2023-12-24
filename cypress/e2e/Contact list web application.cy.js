describe('Verify the functionality of a contact list web application', () => {
  it("Sign Up as a New User", () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')

    cy.get("#firstName").type("Jane")
    cy.get("#lastName").type("Eyre")
    cy.get("#email").type("jane.eyre5@gmail.com")
    cy.get("#password").type("JANEEYRE")
    cy.get("button[type='submit']").click()
    cy.wait(500)  })

    it("Login , Add , Delete & Edit New Contact Record , ", () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
  
      cy.get("#email").type("jane.eyre5@gmail.com")
      cy.get("#password").type("JANEEYRE")
      cy.get('button#submit').click() 
      cy.wait(500)
    
      cy.get('#add-contact').click()
      cy.wait(500)

      cy.get("#firstName").type("Vimal")
      cy.get("#lastName").type("Samaranayaka")
      cy.get("#birthdate").type("1997-05-07")
      cy.get("#email").type("vimal@gmail.com")
      cy.get("#phone").type("814256397")
      cy.get("#street1").type("wadfdgf")
      cy.get("#street2").type("dsddfdsfs")
      cy.get("#city").type("sds")
      cy.get("#stateProvince").type("sdsddf")
      cy.get("#postalCode").type("2436")
      cy.get("#country").type("sds")


      cy.get('button#submit').click()
      cy.wait(500)  
      //  assertion
      cy.get('#myTable').should('contain', 'Vimal Samaranayaka')
      
      //cy.get('tr.contactTableBodyRow').click()
      cy.get('body > div:nth-child(1) > div:nth-child(4) > table:nth-child(1) > tr:nth-child(3)').click()
      cy.wait(500)
      
      cy.get('button#delete').click()
      cy.wait(500)

      //cy.get('button#return').click()
      //cy.wait(500)  

      //  assertion
      //cy.get('#myTable').should('not contain', 'Edited Contact')

      cy.get('body > div:nth-child(1) > div:nth-child(4) > table:nth-child(1) > tr:nth-child(3)').click()
      cy.wait(500)

      cy.get('#edit-contact').click()
      cy.wait(500)

      cy.get('#firstName').clear().type('Edited')
      cy.get('#lastName').clear().type('Contact')

      cy.get('button#submit').click()
      cy.wait(500)
      cy.get('button#return').click()
      cy.wait(500)

      cy.get('#myTable').should('contain', 'Edited Contact')


    })
})