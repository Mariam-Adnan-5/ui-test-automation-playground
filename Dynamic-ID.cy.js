it('positive senario',()=>{
 cy.visit('http://uitestingplayground.com/dynamicid')
 //Find element by tag name
 cy.get('button').last().click().should('have.class','btn-primary')
})

it('negative senario',()=>{
 cy.visit('http://uitestingplayground.com/dynamicid')
 //Find element by id
 cy.get('#c1c8d54a-5c83-8414-1725-8e6a1a607d37').last().click().should('have.class','btn-primary')
 //show error becouse ID dynamic
})
it.only('positive senario',()=>{
 cy.visit('http://uitestingplayground.com/dynamicid')
 //Find element by tag name & should have css
 cy.get('button').last().focus().should('have.css','background-color','rgb(0, 123, 255)')
})