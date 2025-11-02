it.only('positive senario',()=>{
 cy.visit('http://uitestingplayground.com/nbsp')
 //Find element by class name
 cy.get('.btn-primary').invoke('text').then((text) =>{
  const x=text.replace('&nbsp;','')
  expect(x).to.not.eql('My Button')
})
 //cy.get('.form-control',{timeout:10000}).should('be.enabled')
})

it('negative senario',()=>{
 cy.visit('http://uitestingplayground.com/disabledinput')
 //Find element by class name
 cy.get('.btn-primary').click()
 cy.get('.form-control',{timeout:0}).should('be.enabled')
})