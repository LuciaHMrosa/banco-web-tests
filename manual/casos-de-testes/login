# 📄 CASOS DE TESTE - LOGIN (Seguindo a ISO 29119-3)

---

## 🧪 CT001 - Realizar login com credenciais válidas (usuario julio.lima)

| Campo | Detalhes |
|------|----------|
| ID | CT001 |
| Título | Realizar login com credenciais válidas |
| Prioridade | Alta |
| Rastreabilidade | RN - Login |
| Pré-Condições | Usuário deve estar na tela de login |

### Dados de entrada
- Usuário: julio.lima  
- Senha: 123456  

### Passos do Teste

| Passo | Ação | Resultado Esperado |
|------|------|------------------|
| 1 | Acessar http://localhost:4000 | Sistema deve exibir tela de login |
| 2 | Informar usuário "julio.lima" | Campo deve aceitar entrada |
| 3 | Informar senha "123456" | Campo deve aceitar entrada |
| 4 | Clicar em "Entrar" | Sistema deve autenticar usuário |

### Pós-Condições
Usuário autenticado e redirecionado para próxima página

---

## 🧪 CT002 - Realizar login com segundo usuário válido (junior.lima)

| Campo | Detalhes |
|------|----------|
| ID | CT002 |
| Título | Login com usuário junior.lima |
| Prioridade | Média |
| Rastreabilidade | RN - Login |
| Pré-Condições | Usuário na tela de login |

### Dados de entrada
- Usuário: junior.lima  
- Senha: 123456  

### Passos do Teste

| Passo | Ação | Resultado Esperado |
|------|------|------------------|
| 1 | Acessar sistema | Tela de login exibida |
| 2 | Informar usuário "junior.lima" | Campo preenchido |
| 3 | Informar senha "123456" | Campo preenchido |
| 4 | Clicar em "Entrar" | Sistema autentica usuário |

### Pós-Condições
Usuário autenticado com sucesso

---

## 🧪 CT003 - Login sem informar usuário

| Campo | Detalhes |
|------|----------|
| ID | CT003 |
| Título | Validar login sem usuário |
| Prioridade | Alta |
| Rastreabilidade | RN - Campos obrigatórios |
| Pré-Condições | Tela de login aberta |

### Passos do Teste

| Passo | Ação | Resultado Esperado |
|------|------|------------------|
| 1 | Acessar tela de login | Sistema exibe tela |
| 2 | Informar apenas senha | Usuário permanece vazio |
| 3 | Clicar em "Entrar" | Sistema valida campos |

### Pós-Condições
Sistema não deve autenticar usuário

---

## 🧪 CT004 - Login sem informar senha

| Campo | Detalhes |
|------|----------|
| ID | CT004 |
| Título | Validar login sem senha |
| Prioridade | Alta |
| Rastreabilidade | RN - Campos obrigatórios |
| Pré-Condições | Tela de login aberta |

### Passos do Teste

| Passo | Ação | Resultado Esperado |
|------|------|------------------|
| 1 | Acessar login | Tela exibida |
| 2 | Informar apenas usuário | Senha vazia |
| 3 | Clicar em "Entrar" | Sistema exibe mensagem de erro |

### Pós-Condições
Login não realizado

---

## 🧪 CT005 - Login sem usuário e senha

| Campo | Detalhes |
|------|----------|
| ID | CT005 |
| Título | Validar login com campos vazios |
| Prioridade | Alta |
| Rastreabilidade | RN - Campos obrigatórios |
| Pré-Condições | Tela de login aberta |

### Passos do Teste

| Passo | Ação | Resultado Esperado |
|------|------|------------------|
| 1 | Acessar tela de login | Sistema exibe formulário |
| 2 | Não preencher campos | Ambos vazios |
| 3 | Clicar em "Entrar" | Sistema exibe mensagem de erro |

### Pós-Condições
Usuário não autenticado

---

## 🧪 CT006 - Login com usuário inválido

| Campo | Detalhes |
|------|----------|
| ID | CT006 |
| Título | Validar login com usuário inválido |
| Prioridade | Alta |
| Rastreabilidade | RN - Credenciais inválidas |
| Pré-Condições | Tela de login aberta |

### Dados de entrada
- Usuário: inválido
- Senha: válida

### Passos do Teste

| Passo | Ação | Resultado Esperado |
|------|------|------------------|
| 1 | Acessar login | Tela exibida |
| 2 | Informar usuário inválido | Campo preenchido |
| 3 | Informar senha válida | Campo preenchido |
| 4 | Clicar em "Entrar" | Sistema rejeita login |

### Pós-Condições
Login não autorizado

---

## 🧪 CT007 - Login com senha inválida

| Campo | Detalhes |
|------|----------|
| ID | CT007 |
| Título | Validar login com senha inválida |
| Prioridade | Alta |
| Rastreabilidade | RN - Credenciais inválidas |
| Pré-Condições | Tela de login aberta |

### Dados de entrada
- Usuário: válido
- Senha: inválida

### Passos do Teste

| Passo | Ação | Resultado Esperado |
|------|------|------------------|
| 1 | Acessar tela de login | Sistema exibe login |
| 2 | Informar usuário válido | Campo preenchido |
| 3 | Informar senha inválida | Campo preenchido |
| 4 | Clicar em "Entrar" | Sistema rejeita autenticação |

### Pós-Condições
Usuário não autenticado

---

## 🧪 CT008 - Login com usuário e senha inválidos

| Campo | Detalhes |
|------|----------|
| ID | CT008 |
| Título | Validar login com credenciais inválidas |
| Prioridade | Alta |
| Rastreabilidade | RN - Credenciais inválidas |
| Pré-Condições | Tela de login aberta |

### Dados de entrada
- Usuário: inválido
- Senha: inválida

### Passos do Teste

| Passo | Ação | Resultado Esperado |
|------|------|------------------|
| 1 | Acessar tela de login | Sistema exibe login |
| 2 | Informar usuário inválido | Campo preenchido |
| 3 | Informar senha inválida | Campo preenchido |
| 4 | Clicar em "Entrar" | Sistema rejeita autenticação |

### Pós-Condições
Usuário não autenticado