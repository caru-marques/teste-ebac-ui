/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });

    // afterEach(() => {
    //     cy.screenshot()
    // });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
            // .first().click()
            // .last().click()
            // .eq(3).click()
            .contains('Abominable Hoodie').click()

            cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
})
