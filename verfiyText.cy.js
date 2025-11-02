it.only('positive senario',()=>{
 cy.visit('http://uitestingplayground.com/verifytext')
 //Find element by class name
 cy.get('span.badge-secondary').last().contains('Welcome...')
 //Find element by class Id
 //cy.get('#updatingButton').click().should('have.text','Mariam')
})

it('negative senario',()=>{
 cy.visit('http://uitestingplayground.com/dynamicid')
  //Find element by class name
 cy.get('.form-control').type('Mariam')
 //Find element by class Id
 cy.get('#updatingButton').click().should('have.text','Mar')
})