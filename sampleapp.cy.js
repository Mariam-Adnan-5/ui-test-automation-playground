it.only('positive senario',()=>{
 cy.visit('http://uitestingplayground.com/sampleapp')
 //Find element by attr 
 cy.get('[name="UserName"]').type('Mariam')
 cy.get('[name="Password"]').type('pwd')
 cy.get('#login').click()
cy.get('#loginstatus').should('have.text','Welcome, Mariam!')
})

it('negative senario',()=>{
cy.visit('http://uitestingplayground.com/sampleapp')
 //Find element by attr 
 cy.get('[name="UserName"]').type('Mariam')
 cy.get('[name="Password"]').type(123)
 cy.get('#login').click()
cy.get('#loginstatus').should('have.text','Welcome, Mariam!')
})