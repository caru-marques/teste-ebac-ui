/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    // afterEach(() => {
    //     cy.screenshot()
    // });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('caru.teste@teste.com')
        cy.get('#password').type('Abcd#1234#')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, caru.teste (não é caru.teste? Sair)')
    })

    it('Deve exibir mensagem de erro ao inserir um usuário inválido', () => {
        cy.get('#username').type('caru@teste.com')
        cy.get('#password').type('Abcd#1234#')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Deve exibir mensagem de erro ao inserir uma senha inválida', () => {
        cy.get('#username').type('caru.teste@teste.com')
        cy.get('#password').type('ABC123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail caru.teste@teste.com está incorreta. Perdeu a senha?')
    });

    it('Deve fazer login com sucesso utilizando massa de dados', () => {
        cy.get('#username').type(perfil.username)
        cy.get('#password').type(perfil.password)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, caru.teste (não é caru.teste? Sair)')
    });

    it('Deve fazer login com sucesso utilizando Fixture', () => {
        cy.fixture('perfil').then(data => {
            cy.get('#username').type(data.username, { log:false })
            cy.get('#password').type(data.password, { log:false })
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, caru.teste (não é caru.teste? Sair)')
        })
    });

    it('Deve fazer login com sucesso utilizando comandos customizados', () => {
        cy.login(perfil.username, perfil.password)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, caru.teste (não é caru.teste? Sair)')
    });
})
