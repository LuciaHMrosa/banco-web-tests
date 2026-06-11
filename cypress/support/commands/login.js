Cypress.Commands.add('FazerLogin', (usuario, senha) => {
    if (usuario) {
        cy.get('#username').type(usuario)
    }
    if (senha) {
        cy.get('#senha').type(senha)
    }
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('fazerLogincomCredenciaisValidas', () => {
    cy.fixture('credenciais').then((credenciais) => {
        cy.FazerLogin(credenciais.usuarios.valido, credenciais.senhas.valida)
    })
})