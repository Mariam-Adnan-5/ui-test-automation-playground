it('positive senario',()=>{
 cy.visit('http://uitestingplayground.com/classattr')
 //Find element by class name
 cy.get('.btn-primary.btn-test').click().should('have.attr','type','button')
})

it('negative senario',()=>{
 cy.visit('http://uitestingplayground.com/classattr')
 //Find element by class name & put space between them
 cy.get('.btn-primary .btn-test').click().should('have.attr','type','button')
})
it.only('negative senario',()=>{
 cy.visit('http://uitestingplayground.com/classattr')
 //Find element by class name & put space between them
 cy.on('window:alert',(alerttext) =>{
    expect(alerttext).to.contains('Primary')
 })
 cy.get('.btn-primary.btn-test').click().should('have.attr','type','button')
})