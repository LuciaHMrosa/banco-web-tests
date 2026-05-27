# 🧪 banco-web-tests

Projeto voltado para estudos e práticas de Qualidade de Software (QA), utilizando a aplicação Banco Web desenvolvida pelo professor Júlio de Lima durante a Mentoria 2.0.

Repositório original da aplicação:

- Banco Web: https://github.com/juliodelima/banco-web

Este repositório foi criado com o objetivo de praticar diferentes abordagens de testes aplicadas à aplicação Banco Web, incluindo:

- Testes manuais
- Escrita de cenários BDD com Gherkin
- Testes exploratórios
- Automação de testes E2E com Cypress
- Organização de massa de testes
- Geração de relatórios automatizados
- Boas práticas de QA

---

# 🎯 Objetivo

Este projeto tem como objetivo praticar diferentes abordagens de testes aplicadas à aplicação Banco Web, simulando atividades realizadas por profissionais de QA em ambientes reais.

O projeto contempla:

- Planejamento de testes
- Escrita de casos de teste
- Aplicação de técnicas de teste
- Escrita de cenários BDD
- Testes exploratórios
- Automação de testes
- Organização de evidências e documentação

👉 Servindo como ambiente de prática e evolução em Qualidade de Software.

---

# 🧩 Componentes do Projeto

## 🔹 Cypress
Framework utilizado para automação de testes end-to-end.

## 🔹 Gherkin / BDD
Especificação de cenários baseada em comportamento utilizando linguagem Gherkin.

## 🔹 Testes Manuais
Casos de teste estruturados seguindo o padrão ISO 29119-3.

## 🔹 Testes Exploratórios
Sessões exploratórias utilizando heurísticas e Session-Based Test Management (SBTM).

## 🔹 Mochawesome Reporter
Responsável pela geração de relatórios HTML detalhados da automação.

---

# 📁 Estrutura de Pastas

```txt
banco-web-tests/
│
├── cypress/
│   ├── e2e/                  # Scripts de automação
│   ├── fixtures/             # Massa de dados
│   ├── support/              # Configurações e comandos customizados
│   └── reports/              # Relatórios HTML
│
├── manual/
│   ├── casos-de-teste/       # Casos de teste ISO 29119-3
│   ├── gherkin/              # Cenários BDD
│   ├── exploratorio/         # Relatórios de sessões exploratórias
│   └── evidencias/           # Evidências de testes
│
├── package.json
├── cypress.config.js
└── README.md
```

---

# 🧪 Cobertura Atual

## ✔ Funcionalidade: Login

Cobertura atual da funcionalidade:

- Casos de teste manuais
- Cenários BDD em Gherkin
- Sessões de testes exploratórios
- Testes automatizados com Cypress

---

# ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário possuir:

- Node.js instalado
- API Banco rodando
- Aplicação Banco Web rodando

---

# 🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/juliodelimas/banco-web-tests.git
```

Acesse a pasta:

```bash
cd banco-web-tests
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Execução dos Testes Automatizados

## 🔹 Rodar em modo headless

```bash
npm test
```

## 🔹 Abrir interface do Cypress

```bash
npm run cy:open
```

## 🔹 Rodar com navegador visível

```bash
npm run cy:headed
```

---

# 📊 Relatórios

Após a execução dos testes automatizados, os relatórios HTML estarão disponíveis em:

```txt
cypress/reports/html/index.html
```

👉 Basta abrir o arquivo no navegador.

---

# 🧪 Estrutura dos Testes Automatizados

```txt
cypress/e2e/login.cy.js
```

Responsável pelos testes automatizados da funcionalidade de login.

```txt
cypress/e2e/transferencia.cy.js
```

Responsável pelos testes automatizados de transferência bancária.

---

# 🔧 Custom Commands

Os comandos customizados estão organizados em:

```txt
cypress/support/commands/common.js
```

Comandos utilitários.

```txt
cypress/support/commands/login.js
```

Ações relacionadas ao login.

```txt
cypress/support/commands/transferencia.js
```

Ações relacionadas às transferências.

---

# 🧪 Testes Manuais

Os casos de teste manuais estão organizados em:

```txt
manual/casos-de-teste/
```

Os documentos seguem o padrão ISO 29119-3.

---

# 🥒 BDD / Gherkin

Os cenários escritos em Gherkin estão disponíveis em:

```txt
manual/gherkin/
```

---

# 🔍 Testes Exploratórios

Os relatórios das sessões exploratórias estão organizados em:

```txt
manual/exploratorio/
```

Utilizando:

- heurísticas de testes
- Session-Based Test Management
- charters exploratórios

---

# ⚠️ Observações

- Certifique-se de que a API e a aplicação estejam rodando antes da execução.
- Os dados de acesso utilizados nos testes estão disponíveis em:

```txt
cypress/fixtures/
```

---

# 🎓 Objetivo Educacional

Projeto desenvolvido com foco em aprendizado prático de Qualidade de Software, contemplando:

- testes manuais
- automação
- BDD
- testes exploratórios
