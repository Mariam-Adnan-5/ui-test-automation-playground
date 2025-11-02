it.only('positive senario',()=>{
 cy.visit('http://uitestingplayground.com')
 //find element by attr
 cy.get('[href="/loaddelay"]').click()
 //find element by class name
 cy.get('.btn-primary',{timeout:20000}).click()
})

it('negative senario',()=>{
 cy.visit('http://uitestingplayground.com/nbsp')
  //Find element by id
 cy.get('#ajaxButton').click()
 //Find element by class name
 cy.get('.bg-success').should('have.text','Data loaded with AJAX get request.')
 cy.get('.bg-success').click()
})