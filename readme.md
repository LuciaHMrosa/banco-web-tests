# 🧪 banco-web-tests
Projeto voltado para estudos e práticas de Qualidade de Software (QA), utilizando a aplicação Banco Web desenvolvida pelo professor Júlio de Lima durante a Mentoria 2.0.
Este projeto tem como objetivo automatizar testes de aplicações web utilizando **Cypress e JavaScript**, com organização de código e boas práticas de automação.

Repositório original da aplicação:
[https://github.com/juliodelimas/banco-web](https://github.com/juliodelimas/banco-web)

---

## 🎯 Objetivo

Automatizar cenários de testes para a aplicação **Banco Web**, utilizando boas práticas de organização, customização de comandos e geração de relatórios.

O foco do projeto é:

* Automação de testes E2E com Cypress
* Validação de fluxos críticos da aplicação
* Organização de código de testes
* Reutilização com Custom Commands
* Geração de relatórios de execução

---

## 🧩 Componentes do Projeto

### 🔹 Cypress

Framework principal de automação de testes end-to-end.

### 🔹 Custom Commands

Comandos personalizados para reutilização de lógicas comuns nos testes, localizados em:

`cypress/support/commands/`

### 🔹 cypress-mochawesome-reporter

Responsável pela geração de relatórios HTML detalhados dos testes executados.

---

## 📁 Estrutura de Pastas

```
banco-web-tests/
│
├── cypress/
│   ├── e2e/                  # Scripts de testes automatizados
│   ├── fixtures/             # Dados de apoio para testes
│   ├── support/              # Configurações e comandos customizados
│   └── reports/              # Relatórios HTML gerados
│
├── package.json
├── cypress.config.js
└── README.md
```

---

## 🧪 Estrutura dos Testes

* `cypress/e2e/login.cy.js` → testes de login
* `cypress/e2e/transferencia.cy.js` → testes de transferência bancária

---

## 🔧 Custom Commands

Os comandos customizados estão organizados em:

* `cypress/support/commands/common.js` → comandos utilitários gerais
* `cypress/support/commands/login.js` → comandos relacionados ao login
* `cypress/support/commands/transferencia.js` → comandos para operações de transferência

Para utilizar um comando customizado em seus testes, basta chamar:

```js
cy.nomeDoComando()
```

---

## ⚙️ Pré-requisitos

* Node.js instalado
* API Banco Web rodando
* Aplicação Banco Web rodando

---

## 🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/juliodelimas/banco-web-tests.git
cd banco-web-tests
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Execução dos Testes

🔹 Modo headless:

```bash
npm test
```

🔹 Interface gráfica do Cypress:

```bash
npm run cy:open
```

🔹 Modo headed (navegador visível):

```bash
npm run cy:headed
```

---

## 📊 Relatórios

Após a execução dos testes, o relatório HTML estará disponível em:

```
cypress/reports/html/index.html
```

👉 Basta abrir no navegador.

---

## 🎓 Observações e Boas Práticas

* Certifique-se de que a API e a aplicação web estejam rodando antes de executar os testes
* Os dados de teste estão organizados em `cypress/fixtures/`
* Projeto focado em boas práticas de automação com Cypress
* Estrutura organizada para reutilização e escalabilidade dos testes
