it.only('positive senario',()=>{
 cy.visit('http://uitestingplayground.com/clientdelay')
 //Find element by class name
 cy.get('.btn-primary').click()
 //Find element by class name
 cy.get('.bg-success',{timeout:20000}).should('have.text','Data calculated on the client side.')
 cy.get('.bg-success').click()
})

it('negative senario',()=>{
 cy.visit('http://uitestingplayground.com/nbsp')
  //Find element by id
 cy.get('#ajaxButton').click()
 //Find element by class name
 cy.get('.bg-success').should('have.text','Data loaded with AJAX get request.')
 cy.get('.bg-success').click()
})