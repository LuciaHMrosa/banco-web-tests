# 📄 QA - Análise da Funcionalidade Login

Documento elaborado com objetivo de praticar técnicas de análise e design de testes aplicadas à funcionalidade de Login da aplicação Banco Web, desenvolvida pelo professor Júlio de Lima.

---

# 🎯 Objetivo

Validar o comportamento da funcionalidade de autenticação do sistema Banco Web, garantindo que o usuário consiga acessar o sistema com credenciais válidas e que o sistema trate corretamente cenários inválidos.

---

# 🧩 Funcionalidade

Login

---

# 📥 Entradas

- Usuário
- Senha

---

# ✔️ Validações Identificadas

- Campos obrigatórios
- Credenciais válidas
- Autenticação do usuário

---

# 🟢 Cenários Positivos

- Login realizado com sucesso

---

# 🔴 Cenários Negativos

- Usuário não informado
- Senha não informada
- Usuário e senha não informados
- Usuário inválido
- Senha inválida
- Usuário e senha inválidos

---

# 🔍 Estratégia de Teste Exploratória

## 🎯 Charter

Explorar o comportamento dos campos e fluxo de autenticação do login.

---

## 🧪 Heurísticas para Exploração

- Limite mínimo de caracteres
- Limite máximo de caracteres
- Campos com espaços
- Caracteres especiais
- Sensibilidade entre maiúsculas e minúsculas
- Atualização da página após login
- Navegação utilizando botão voltar do navegador

---

# 🧠 Técnicas de Design de Teste Aplicadas

## 📌 Particionamento de Equivalência (PE)

### 👤 Usuário

#### Classe válida

- julio.lima
- junior.lima

#### Classes inválidas

- vazio
- inexistente

---

### 🔒 Senha

#### Classe válida

- 123456

#### Classes inválidas

- vazia
- incorreta

---

# 📋 Tabela de Decisão

| Caso de Teste | Usuário | Senha | Resultado Esperado |
|---|---|---|---|
| CT01 | Usuário válido (julio.lima / junior.lima) | Válida | Login realizado com sucesso |
| CT02 | Não informado | Válida | Exibir mensagem de campos obrigatórios |
| CT03 | Válido | Não informada | Exibir mensagem de campos obrigatórios |
| CT04 | Não informado | Não informada | Exibir mensagem de campos obrigatórios |
| CT05 | Inválido | Válida | Exibir mensagem de credenciais inválidas |
| CT06 | Válido | Inválida | Exibir mensagem de credenciais inválidas |
| CT07 | Inválido | Inválida | Exibir mensagem de credenciais inválidas |

---

# 🥒 Cenários BDD - Gherkin

Os cenários BDD da funcionalidade foram escritos utilizando Gherkin e estão documentados no arquivo:

```txt
manual/gherkin/login.feature
```

---

# 🧪 Casos de Teste

Também foram elaborados casos de teste estruturados seguindo o padrão ISO 29119-3, com objetivo de praticar documentação formal de testes.

Os casos de teste estão disponíveis em:

```txt
manual/casos-de-teste/login.md
```

---

# 🔍 Testes Exploratórios

A sessão de testes exploratórios realizada para a funcionalidade de login está documentada em:

```txt
manual/exploratorio/relatorio-login.md
```

---

# ✅ Conclusão

O fluxo de análise foi estruturado utilizando abordagem comportamental (BDD), iniciando pelo entendimento da funcionalidade, levantamento de entradas e validações, definição de cenários positivos e negativos, aplicação de técnicas de design de testes e formalização dos cenários em Gherkin.

Além dos cenários BDD, também foram elaborados casos de teste seguindo o padrão ISO 29119-3 e executadas sessões de testes exploratórios para ampliar a cobertura da funcionalidade e exercitar diferentes abordagens de QA.