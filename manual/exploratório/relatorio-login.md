# 📄 Relatório de Sessão

Inspirado no artigo de John Bach sobre Session-Based Test Management (2001)

---

## 📌 Informações da Sessão

| Campo | Detalhes |
|---|---|
| Data e Hora do Início | 28/05/2026 |
| Nome do Testador | Lúcia de Melo |
| Módulo | Login |

---

# 🎯 Test Charter

Explorar o comportamento dos campos e fluxo de autenticação do login, utilizando heurísticas de Ataque de Tipos de Dados e Testes de String, com o objetivo de identificar como a funcionalidade lida com diferentes tipos de inserção de dados.

---

# ⏱️ Tamanho da Sessão

30 minutos

---

# 🔍 Heurísticas Utilizadas

- Limite mínimo de caracteres
- Limite máximo de caracteres
- Campos com espaços
- Caracteres especiais
- Sensibilidade entre maiúsculas e minúsculas
- Atualização da página após login
- Navegação utilizando botão voltar do navegador

---

# 🧪 Cobertura Explorada

- Campos obrigatórios
- Limites de caracteres
- Sensibilidade de strings
- Navegação

---

# 📝 Notas

> (*) Podem ser classificadas como:
>
> - (I) Informação
> - (R) Risco

- (I) Os campos de usuário e senha permitem inserção superior a 1.000 caracteres.

- (R) O sistema permite autenticação utilizando variações de maiúsculas e minúsculas no campo usuário.

- (R) O sistema permite autenticação utilizando caracteres acentuados no campo usuário.

- (I) Após autenticação, ao utilizar o botão voltar do navegador, o sistema não retorna para a tela de login.

- (R) Ao informar credenciais inválidas, o sistema apresenta apenas a mensagem:
  
  ```txt
  Erro no login. Tente novamente.
  ```

- (R) A mensagem de erro apresentada durante falha na autenticação pode não fornecer informações suficientes para orientação do usuário.

- (I) O comportamento da mensagem pode ter sido implementado intencionalmente por questões de segurança, evitando diferenciação entre usuário inválido e senha incorreta.

---

# 🐞 Defeitos Encontrados

1. O sistema permite autenticação utilizando caracteres acentuados no campo usuário, mesmo sem correspondência exata com o usuário cadastrado.

2. O sistema permite autenticação utilizando variações entre letras maiúsculas e minúsculas no campo usuário sem validação de correspondência exata.

3. Os campos de usuário e senha não apresentam limite máximo aparente de caracteres, permitindo inserção superior a 1.000 caracteres.

---

# ❓ Perguntas Levantadas

1. O login deve ser case insensitive para o campo usuário?

2. O sistema deve permitir autenticação utilizando caracteres acentuados no usuário?

3. Existe limite máximo esperado para os campos de usuário e senha?

4. O comportamento do botão voltar após autenticação está conforme esperado?

5. A mensagem genérica de autenticação foi definida como requisito de segurança?

6. Existe expectativa de mensagens mais específicas para falhas de autenticação?