describe('Transferencia', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.fazerLogincomCredenciaisValidas()
    })

    it('CT001 - Realizar transferência com valores válidos - (Valor: R$10,00)', () => {
        cy.realizarTransferencia(
            'Maria Oliveira',
            'João da Silva',
            '10.00'
        )
        cy.verificarMensagemNoToast('Transferência realizada!')

    })

    it('CT001#02 - Realizar transferência com valores válidos - (Valor: R$5000,00)', () => {
        cy.realizarTransferencia(
            'Maria Oliveira',
            'João da Silva',
            '5000.00'
        )
        cy.screenshot('CT001-Transferencia-5000') // Adiciona um screenshot para este teste específico
        cy.verificarMensagemNoToast('Transferência realizada!')

    })

    it('CT002 - Exibir erro ao informar valor abaixo do mínimo permitido - (Valor: R$ 9,99 )', () => {
        cy.realizarTransferencia(
            'João da Silva',
            'Maria Oliveira',
            '9.99'
        )
        cy.verificarMensagemNoToast('O valor da transferência deve ser maior ou igual a R$10,00.')
    })

    it('CT002#02 - Exibir erro ao informar valor abaixo do mínimo permitido - (Valor: R$ -1 )', () => {
        cy.realizarTransferencia(
            'João da Silva',
            'Maria Oliveira',
            '-1'
        )
    })

    it('CT003 - Exibir erro ao informar valor inválido - (Valor: @#!)', () => {
        cy.realizarTransferencia(
            'João da Silva',
            'Maria Oliveira',
            '@#!'
        )
        cy.verificarMensagemNoToast('O valor da transferência deve ser maior ou igual a R$10,00.')
    })


    it('CT004 - Realizar transferência acima de 5000 com token válido', () => {
        cy.realizarTransferencia(
            'Maria Oliveira',
            'João da Silva',
            '5000.01',
            '123456'
        )
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it(' CT005 - Exibir erro ao realizar transferência acima de 5000 sem token', () => {
        cy.realizarTransferencia(
            'Maria Oliveira',
            'João da Silva',
            '5000.01'
        )
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })

    it('CT006 - Exibir erro ao informar token inválido para transferência acima de 5000', () => {
        cy.realizarTransferencia(
            'Maria Oliveira',
            'João da Silva',
            '5000.01',
            '000000'
        )
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })

    it('CT007 - Exibir erro ao realizar transferência com conta origem inativa', () => {
        cy.realizarTransferencia(
            'Conta Teste Inativa',
            'João da Silva',
            '100.00'
        )
        cy.verificarMensagemNoToast('Conta de origem ou destino está inativa.')

    })

    it('CT008 - Exibir erro ao realizar transferência com saldo insuficiente', () => {
        cy.realizarTransferencia(
            'Maria Oliveira',
            'João da Silva',
            '10000000.00'
        )
        cy.verificarMensagemNoToast('Saldo insuficiente para realizar a transferência.')
    })

    it(' CT009 - Exibir erro ao realizar transferência para conta destino inativa', () => {
        cy.realizarTransferencia(
            'João da Silva',
            'Conta Teste Inativa',
            '100.00'
        )
        cy.verificarMensagemNoToast('Conta de origem ou destino está inativa.')
    })

    it('CT010 - Exibir erro ao não informar valor da transferência', () => {
        cy.realizarTransferencia(
            'Maria Oliveira',
            'João da Silva',
            ''
        )
        cy.verificarMensagemNoToast('O valor da transferência deve ser maior ou igual a R$10,00.')
    })

    it('CT011 - Exibir erro ao não selecionar conta origem', () => {
        cy.realizarTransferencia(
            '',
            'João da Silva',
            '100.00'
        )
        cy.verificarMensagemNoToast('Conta de origem ou destino não encontrada.')
    })

    it('CT012 - Exibir erro ao não selecionar conta destino', () => {
        cy.realizarTransferencia(
            'Maria Oliveira',
            '',
            '100.00'
        )
        cy.verificarMensagemNoToast('Conta de origem ou destino não encontrada.')
    })
})