# 🧪 banco-web-tests

Este projeto tem como objetivo demonstrar para os alunos da **Mentoria 2.0** como automatizar testes de aplicações web utilizando **Cypress** e **JavaScript**, aplicando boas práticas de organização e reutilização de código.

---

## 🎯 Objetivo

Automatizar cenários de testes para a aplicação **Banco Web**, utilizando:

* Boas práticas de automação
* Organização de código
* Comandos customizados
* Geração de relatórios

👉 Servindo como referência didática para alunos de QA.

---

## 🧩 Componentes do Projeto

* **Cypress**
  Framework principal para automação de testes end-to-end.

* **Custom Commands**
  Comandos personalizados para reutilização de lógica, localizados em:
  `cypress/support/commands/`

* **cypress-mochawesome-reporter**
  Responsável pela geração de relatórios HTML detalhados.

---

## 📁 Estrutura de Pastas

```
cypress/
│
├── e2e/              # Scripts de testes automatizados
├── fixtures/         # Dados de apoio (massa de teste)
├── support/          # Configurações e comandos customizados
├── reports/          # Relatórios gerados após execução
```

---

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter:

* Node.js instalado
* API do projeto rodando
* Aplicação Web rodando

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

### 🔹 Rodar em modo headless (sem interface)

```bash
npm test
```

---

### 🔹 Abrir interface do Cypress

```bash
npm run cy:open
```

---

### 🔹 Rodar com navegador visível

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

## 🧪 Estrutura dos Testes

* `cypress/e2e/login.cy.js`
  → Testes de login

* `cypress/e2e/transferencia.cy.js`
  → Testes de transferência bancária

---

## 🔧 Custom Commands

Os comandos customizados estão organizados em:

* `cypress/support/commands/common.js`
  → Comandos utilitários

* `cypress/support/commands/login.js`
  → Ações de login

* `cypress/support/commands/transferencia.js`
  → Ações de transferência

👉 Para usar:

```js
cy.nomeDoComando()
```

---

## ⚠️ Observações

* Certifique-se de que a API e a aplicação web estejam rodando antes de executar os testes.
* Os dados de acesso estão em:

```
cypress/fixtures/
```

---

## 🎓 Mentoria 2.0

Projeto desenvolvido como apoio didático para aprendizado de **Automação de Testes com Cypress**.
