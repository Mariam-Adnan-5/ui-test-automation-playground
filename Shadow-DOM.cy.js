it.only('shadow-DOM',()=>{
  /* 3 ways
  1=> use .shadow()
  2=> global config , " includeShadowDom": true
  3=> test step level,cy.get('#editField',{includeShadowDom: true})
  */
 cy.visit('https://uitestingplayground.com/shadowdom')
 cy.get('#buttonGenerate').click()
 cy.get('#buttonCopy').click()
 cy.get('#editField').invoke('val').then((value)=>{
  //cy.window().its('navigator.clipoard').invoke('readtext').should('equal',value)
  cy.window().then((win)=>{
    win.navigator.clipboard.readText().then((copy)=>{
      expect(copy).to.equal(value)
    })
  }) 
 })
})