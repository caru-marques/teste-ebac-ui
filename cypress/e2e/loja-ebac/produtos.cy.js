/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    // afterEach(() => {
    //     cy.screenshot()
    // });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
            cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve buscar produto com sucesso', () => {
        produtosPage.buscarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin-Yoga-Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        produtosPage.buscarProduto('Beaumont Summit Kit')
        produtosPage.addProdutoCarrinho('S', "Orange", 2)
        cy.get('.woocommerce-message').should('contain', '“Beaumont Summit Kit” foram adicionados no seu carrinho.')        
    });

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(produtos => {
            produtosPage.buscarProduto(produtos[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                produtos[1].tamanho, 
                produtos[1].cor, 
                produtos[1].quantidade)
            cy.get('.woocommerce-message').should('contain', produtos[1].nomeProduto)
        })
    });
})
