describe('Transferencia', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.fazerLogincomCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor validos', () => {

        cy.realizarTransferencia('Maria', 'João', '11')


        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5mil sem o token ', () => {

        cy.realizarTransferencia('Maria', 'João', '5000.01')


        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })

})