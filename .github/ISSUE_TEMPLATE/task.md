---
name: "⚙️ Tarefa Técnica / Débito Técnico"
about: "Refatorações, atualizações de dependências ou melhorias de infraestrutura."
title: "[TASK] - Descreva a tarefa técnica de forma curta"
labels: "chore, tech-debt"
assignees: ""
---

### 📦 Escopo do Monorepo

Onde essa tarefa será executada?

- [ ] `apps/embed` (O script injetável no site do cliente)
- [ ] `apps/widget` (A interface React do widget)
- [ ] `apps/dashboard` (O painel administrativo em Next.js)
- [ ] `apps/docs` (Site de documentação / Guias de uso)
- [ ] `packages/ui` (Biblioteca de componentes / Shadcn)
- [ ] `packages/eslint-config` (Configurações de Lint / Regras de código)
- [ ] `packages/typescript-config` (Configurações de Tipagem / TS)
- [ ] Raiz do Monorepo / CI-CD

### 🧹 Descrição da Tarefa

[O que precisa ser feito? Ex: "Atualizar a versão do Vite no app widget de 7.3 para a versão mais recente e ajustar o vite.config.ts"]

### 🤔 Por que isso é necessário?

[Qual o ganho com essa mudança? Ex: "A versão nova resolve um alerta de segurança e melhora o tempo de build em 20%"]

### ⚠️ Riscos e Impactos Esperados

[Essa mudança pode quebrar algo? Ex: "Pode haver conflitos com o plugin de injeção de CSS do embed. Ficar atento no build final."]

### ✅ Critérios de Conclusão (Checklist)

- [ ] O código foi refatorado/atualizado.
- [ ] O build de produção de todos os pacotes continua passando (`pnpm build`).
- [ ] Não foram introduzidos novos erros de lint.
