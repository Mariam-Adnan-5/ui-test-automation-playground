it('JS-Alerts ',()=>{
 cy.visit('http://uitestingplayground.com/alerts')
 cy.get('#alertButton').click()
 cy.on('window:alert',(alerttext) =>{
    expect(alerttext).to.contains('Today is a working day.\nOr less likely a holiday.')
 })
})

it('Confirm Alert OK',()=>{
 cy.visit('http://uitestingplayground.com/alerts')
 cy.get('#confirmButton').click()
 cy.on('window:confirm',(Acceptconfirm) =>{
 expect(Acceptconfirm).to.contains('Today is Friday.\nDo you agree?')
 })
 cy.on('window:alert',(alerttext) =>{
 expect(alerttext).to.contains('Yes')
 })
})

it('Confirm Alert Cancle',()=>{
     cy.visit('http://uitestingplayground.com/alerts')
   cy.get('#confirmButton').click()
  cy.on('window:confirm',(Cancleconfirm) =>{
    expect(Cancleconfirm).to.contains('Today is Friday.\nDo you agree?')
    return false
})
//cy.on('window:confirm',(Acceptconfirm) =>{
 //expect(Acceptconfirm).to.contains('Today is Friday.\nDo you agree?')
 //})
cy.on('window:alert',(Acceptconfirm) =>{
 expect(Acceptconfirm).to.contains('No')
 })
})

it('prompt Alert with input ',()=>{
     cy.visit('http://uitestingplayground.com/alerts')
     cy.window().then(function(PromptAlert){
    //stub windows prompt
    cy.stub(PromptAlert,"prompt").returns("cats")
    cy.get('#promptButton').click()
    cy.on('window:alert',(Acceptconfirm) =>{
 expect(Acceptconfirm).to.contains('User value: cats')
 })
 })
})
it('prompt Alert without input ',()=>{
     cy.visit('http://uitestingplayground.com/alerts')
     cy.window().then(function(PromptAlert){
    //stub windows prompt
    cy.stub(PromptAlert,"prompt").returns (null)
    cy.get('#promptButton').click()
    cy.on('window:alert',(Acceptconfirm) =>{
 expect(Acceptconfirm).to.contains('User value: no answer')
 })
 })
 
})
