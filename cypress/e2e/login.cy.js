describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.fazerLogincomCredenciaisValidas()

    cy.contains('h4', 'Realizar Transferência')
      .should('be.visible')
  })

  it('Login com dados inválidos devem apresentar mensagem de erro', () => {
    cy.fazerLogincomCredenciaisInvalidas()

    cy.get('.toast').should('be.visible')
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })


})