describe('HTTP Requests', () => {
    it("GET Call", () => {
      cy.request('GET' , 'https://reqres.in/api/users?page=2')
      .its('status')
      .should('equal', 200);
       })

    it("POST Call" , ()=>{
       cy.request({
                  method: 'POST',
                  url: 'https://reqres.in/api/users',
                  body: 
                    {
                        name: "morpheus",
                        job: "leader"
                    }
       }) 
      .its('status')
      .should('equal', 201);  
    }) 
    
    it("PUT Call" , ()=>{
        cy.request({
                   method: 'PUT',
                   url: 'https://reqres.in/api/users/2',
                   body: 
                     {
                        name: "morpheus",
                        job: "zion resident"
                     }
        }) 
       .its('status')
       .should('equal', 200);
    }) 

    it("PATCH Call" , ()=>{
        cy.request({
                   method: 'PATCH',
                   url: 'https://reqres.in/api/users/2',
                   body: 
                     {
                        name: "morpheus",
                         job: "zion resident"
                     }
        }) 
       .its('status')
       .should('equal', 200);
    }) 

    it("DELETE Call" , ()=>{
        cy.request({
                   method: 'DELETE',
                   url: 'https://reqres.in/api/users/2',
        }) 
       .its('status')
       .should('equal', 204);
    }) 
    })