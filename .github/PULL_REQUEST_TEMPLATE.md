### Qual o tipo deste PR?

- [ ] 🚀 **Feature**: Uma nova funcionalidade.
- [ ] 🐛 **Bug Fix**: Uma correção de bug.
- [ ] 📝 **Documentation**: Mudanças apenas na documentação.
- [ ] 🎨 **Style**: Mudanças que não afetam o significado do código.
- [ ] ♻️ **Refactor**: Uma alteração de código que não corrige um bug nem adiciona uma funcionalidade.
- [ ] 🔥 **Performance**: Uma mudança de código que melhora o desempenho.
- [ ] ✅ **Test**: Adicionando ou corrigindo testes.
- [ ] 🤖 **Build**: Mudanças que afetam o sistema de build ou dependências.
- [ ] 🔄 **CI**: Mudanças nos arquivos e scripts de configuração de CI.
- [ ] 📦 **Chore**: Outras alterações que não modificam arquivos de origem ou de teste.
- [ ] ⏪ **Revert**: Reverte um commit anterior.

---

### Descrição

**Dependências desta mudança:** ---

### 📦 Escopo do Monorepo (Pacotes Afetados)

- [ ] `apps/embed` (O script injetável no site do cliente)
- [ ] `apps/widget` (A interface React do widget)
- [ ] `apps/dashboard` (O painel administrativo em Next.js)
- [ ] `apps/docs` (Site de documentação / Guias de uso)
- [ ] `packages/ui` (Biblioteca de componentes / Shadcn)
- [ ] `packages/eslint-config` (Configurações de Lint / Regras de código)
- [ ] `packages/typescript-config` (Configurações de Tipagem / TS)
- [ ] Raiz do projeto (CI/CD, package.json global, etc.)

### 🚨 Breaking Changes (Mudanças Disruptivas)

- [ ] Não, este PR não introduz nenhuma breaking change.
- [ ] **Sim, este PR introduz uma breaking change.**
  - **Descrição da mudança:**
  - **Como migrar/adaptar o código existente:**

---

### Tickets e Documentos Relacionados

- Closes #

---

### ✅ A Mudança Foi Testada?

- [ ] 👍 **Sim, novos testes automatizados foram adicionados ou atualizados.**
- [ ] 🤷 **Não são necessários testes automatizados** (ex: mudança de texto, documentação, refatoração sem mudança de comportamento).
- [ ] 🆘 **Preciso de ajuda** para criar ou adaptar os testes para esta mudança.

---

#### Cenários de Testes Automatizados

- **Cenário 1:** (ex: Validação do formulário de login com dados inválidos).
- **Cenário 2:** (ex: Chamada à API `POST /users` com sucesso e verificação do status 201).
- **Cenário 3:** (ex: Renderização do componente `ModalDeErro` quando o estado de erro é ativado).

---

#### Guia para Teste Manual

1.  **Contexto:** (ex: `Logado como usuário 'admin'`).
2.  **Ação:** (ex: `Navegue até a página de 'Relatórios'`).
3.  **Ação:** (ex: `Clique no botão 'Gerar Relatório Anual'`).
4.  **Verificação:** (ex: `Confirme que um alerta de sucesso é exibido e o relatório aparece na lista`).

### Qual o status da documentação para esta mudança?

- [ ] ✅ **Sim, a documentação foi atualizada neste PR** nos seguintes locais:
  - [ ] 📦 `README.md`
  - [ ] 📠 `Central de Ajuda / Base de Conhecimento`
  - [ ] 🔌 `Documentação da API`
  - [ ] 📕 `Storybook de Componentes`
  - [ ] 🏛️ `Documentação Interna`
  - [ ] 📢 `Release Notes / Post no Blog`
- [ ] ⚠️ **Não, mas uma atualização é necessária.** (Isto deve gerar um ticket para o time responsável).
- [ ] 🤷 **Nenhuma atualização na documentação é necessária** para esta mudança.

---

### 📸 Screenshots ou GIFs (se aplicável)

---

### [Opcional] Tarefas Pós-Deploy

- [ ] Nenhuma.
- [ ] Sim, as tarefas são:

---

### Checklist do Autor

- [ ] Eu realizei uma auto-revisão do meu próprio código.
- [ ] Meu código segue as diretrizes de estilo deste projeto.
- [ ] Garanti a clareza e legibilidade do código (comentando apenas onde necessário).
- [ ] Minhas mudanças não geram novos warnings ou erros de linter.
- [ ] Todos os testes (novos e existentes) passam localmente com minhas mudanças.
- [ ] Quaisquer mudanças dependentes (em outros serviços/bibliotecas) já foram concluídas e publicadas.
