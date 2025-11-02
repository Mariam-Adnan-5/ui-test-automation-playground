it.only('positive senario',()=>{
 cy.visit('http://uitestingplayground.com/textinput')
 //Find element by class name
 cy.get('.form-control').type('Mariam')
 //Find element by class Id
 cy.get('#updatingButton').click().should('have.text','Mariam')
})

it.only('negative senario',()=>{
 cy.visit('http://uitestingplayground.com/dynamicid')
  //Find element by class name
 cy.get('.form-control').type('Mariam')
 //Find element by class Id
 cy.get('#updatingButton').click().should('have.text','Mar')
})
 
