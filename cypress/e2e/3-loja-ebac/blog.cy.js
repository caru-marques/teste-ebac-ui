/// <reference types="cypress"/>

describe('Funcionalidade: Blog Grid', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/blog-grid/')
    });

    it('Deve selecionar um blog post da lista', () => {
        cy.get('.post-grid').contains('Proin velit metus placerat quis').click()

        cy.get('.comments-title').should('contain', '3 Comments')
    });
})
