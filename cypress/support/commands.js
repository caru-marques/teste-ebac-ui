Cypress.Commands.add('login', (username, password) => { 
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.woocommerce-form > .button').click()
 })

 Cypress.Commands.add('preCadastro', (email, password, firstName, lastName) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(password)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('.woocommerce-Button').click()
 })

 Cypress.Commands.add('detalhesConta', (firstName, lastName, username) => {
    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('#account_display_name').type(username)
    cy.get('.woocommerce-Button').click()
 });
 