class ProdutosPage {
    
    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(produto) {
        cy.get('[name="s"]').eq(1).type(produto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(produto) {
        cy.get('.products > .row').contains(produto).click()
    }

    visitarProduto(produto) {
        cy.visit(`produtos/${produto}`)
    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }
}

export default new ProdutosPage();
