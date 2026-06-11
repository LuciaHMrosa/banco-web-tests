describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('CT001 - Realizar login com credenciais válidas (usuario julio.lima)', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.FazerLogin(
        credenciais.usuarios.valido,
        credenciais.senhas.valida
      )
    })
    cy.contains('h4', 'Realizar Transferência')
      .should('be.visible')
  })
  it('CT002 -  Realizar login com segundo usuário válido (usuario junior.lima)', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.FazerLogin(
        credenciais.usuarios.valido2,
        credenciais.senhas.valida
      )
    })
    cy.contains('h4', 'Realizar Transferência')
      .should('be.visible')
  })

  it('CT003 -Exibir mensagem de erro ao não informar usuário', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.FazerLogin(
        null,
        credenciais.senhas.valida
      )
    })
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })

  it('CT004 - Exibir mensagem de erro ao não informar senha', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.FazerLogin(
        credenciais.usuarios.valido,
        null
      )
    })
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })

  it('CT005 - Exibir mensagem de erro ao não informar usuário e senha', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.FazerLogin(
        null,
        null
      )
    })
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
  it('CT006 - Exibir mensagem ao informar usuário inválido e senha valida', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.FazerLogin(
        credenciais.usuarios.invalido,
        credenciais.senhas.valida
      )
    })
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
  it('CT007 - Exibir mensagem ao informar senha inválida e usuário valido', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.FazerLogin(
        credenciais.usuarios.valido,
        credenciais.senhas.invalida
      )
    })
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
  it('CT008 - Exibir mensagem ao informar usuário e senha inválidos', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.FazerLogin(
        credenciais.usuarios.invalido,
        credenciais.senhas.invalida
      )
    })
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})
