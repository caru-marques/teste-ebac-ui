//// <reference types="cypress"/>
import { faker } from '@faker-js/faker'
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.login(perfil.username, perfil.password)
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Teste', 'QA', '11999999999')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});