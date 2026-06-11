Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor, token) => {
    if (contaOrigem) {
        cy.selecionarOpcaoNaCombobox('conta-origem', contaOrigem)
    }
    if (contaDestino) {
        cy.selecionarOpcaoNaCombobox('conta-destino', contaDestino)
    }
    if (valor) {
        cy.get('#valor').type(valor)
    }
    if (token) {
        cy.get('#token').type(token)
    }
    cy.contains('button', 'Transferir').click()
})