it('positive senario',()=>{
 cy.visit('http://uitestingplayground.com/hiddenlayers')
 //Find element by class anme
 cy.get('.btn.btn-success').click().should('be.visible')
 cy.get('.btn.btn-success').click({force:false}).should('be.visible')
})
it.only('positive senario',()=>{
 cy.visit('http://uitestingplayground.com/hiddenlayers')
 //Find element by class anme
 cy.get('.btn.btn-success').click().should('be.visible')
 cy.get('.btn.btn-success').click({force:true}).should('be.visible')
})