it('positive senario',()=>{
 cy.visit('http://uitestingplayground.com/click')
 //Find element by id
 cy.get('#badButton').click().should('have.css','background-color','rgb(40, 167, 69)')
})

it('negative senario',()=>{
 cy.visit('http://uitestingplayground.com/dynamicid')
 //Find element by id
  cy.get('#badButton').click().should('not.have.css','background-color','rgb(40, 167, 69)')
 //
 
})