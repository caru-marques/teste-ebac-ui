/// <referencce types="cypress"/>
import { faker } from '@faker-js/faker'

describe('Funcionalidade: Cadastro', () => {
    
        beforeEach(() => {
            cy.visit('minha-conta')
        });
        // afterEach(() => {
        //     cy.screenshot()
        // });
    
        it('Deve fazer cadastro com sucesso', () => {
            cy.get('#reg_email').type(faker.internet.email())
            cy.get('#reg_password').type(faker.internet.password())
            cy.get(':nth-child(4) > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

            cy.get('#account_first_name').type(faker.person.firstName())
            cy.get('#account_last_name').type(faker.person.lastName())
            cy.get('.woocommerce-Button').click()

            cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        })

        it('Deve fazer cadastro com sucesso - Usando variáveis', () => {
            var email = faker.internet.email()
            var password = faker.internet.password()
            var firstName = faker.person.firstName()
            var lastName = faker.person.lastName()

            cy.get('#reg_email').type(email)
            cy.get('#reg_password').type(password)
            cy.get(':nth-child(4) > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

            cy.get('#account_first_name').type(firstName)
            cy.get('#account_last_name').type(lastName)
            cy.get('.woocommerce-Button').click()

            cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        });

        it.only('Deve fazer cadastro com sucesso - Usando comando customizado', () => {
            cy.preCadastro(faker.internet.email(), faker.internet.password(), faker.person.firstName(), faker.person.lastName())
            cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        });
    })
