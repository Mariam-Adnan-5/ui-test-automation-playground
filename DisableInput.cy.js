it('positive senario',()=>{
 cy.visit('http://uitestingplayground.com/disabledinput')
 //Find element by class name
 cy.get('.btn-primary').click()
 cy.get('.form-control',{timeout:10000}).should('be.enabled')
})

it.only('negative senario',()=>{
 cy.visit('http://uitestingplayground.com/disabledinput')
 //Find element by class name
 cy.get('.btn-primary').click()
 cy.get('.form-control',{timeout:0}).should('be.enabled')
})