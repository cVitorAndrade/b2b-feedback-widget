# 🚀 B2BFeedbackWidget - B2B Feedback & Monitoring SaaS

Um ecossistema completo de feedback e monitoramento B2B. Esta plataforma permite que empresas injetem um widget de feedback em seus próprios sites através de um SDK ultra-leve, capturando logs, screenshots e relatos de usuários, gerenciando tudo através de um painel administrativo moderno.

## 🏗️ Arquitetura do Sistema (Monorepo)

Este projeto foi construído utilizando **Turborepo** para gerenciar múltiplos aplicativos e pacotes de forma eficiente, simulando uma arquitetura de **Micro-frontends**.

O ecossistema é dividido em três aplicações principais e pacotes compartilhados:

### 📱 Aplicações (`/apps`)

1. **`dashboard` (Next.js 16 App Router):**
   - O painel administrativo B2B onde os clientes gerenciam feedbacks, configuram a aparência do widget e analisam métricas.
   - Arquitetura: _Feature-Based_ (lógica isolada por domínio de negócio).
2. **`embed` (Vanilla TypeScript + Vite):**
   - O SDK de injeção ("O Agente"). Um script ultra-leve carregado no site do cliente de forma assíncrona (Async Proxy/Command Queue).
   - Responsável por: Interceptar `console.log`, isolar o CSS do cliente, realizar _Lazy Loading_ de bibliotecas pesadas (como `html2canvas`) e montar o Iframe.

3. **`widget` (React 19 + Vite):**
   - A interface com o usuário final ("O Rosto"). Uma SPA React que roda isolada dentro de um Iframe no site do cliente.
   - Comunica-se de forma segura com o `embed` através de uma ponte `postMessage` rigorosamente tipada.

4. **`docs` (Portal de Documentação):**

- O centro de conhecimento técnico e guias de integração para os nossos clientes (Self-Service Onboarding).
- Responsável por: Hospedar os guias de instalação rápida, referência da API de comandos do SDK, melhores práticas de segurança e tutoriais de customização do widget.

### 📦 Pacotes Compartilhados (`/packages`)

- `@repo/ui`: Biblioteca unificada de componentes (Shadcn UI + Tailwind) consumida tanto pelo `dashboard` quanto pelo `widget`.
- `@repo/eslint-config`: Regras de linting padronizadas para todo o workspace.
- `@repo/typescript-config`: Base de tipagem TypeScript.

---

## ⚡ Engenharia e Padrões Destacados

- **Command Queue Pattern:** O SDK (`embed`) utiliza um snippet loader no `<head>` que permite aos clientes chamarem métodos do widget antes mesmo do script principal terminar de baixar, garantindo **Zero Bloqueio** no carregamento da página alvo.
- **Cross-Origin Communication:** Troca de mensagens bidirecional segura via `window.postMessage` entre o site do cliente (Pai) e o Widget React (Filho).
- **Lazy Loading de Recursos:** Captura de tela do site do cliente executada sob demanda pelo `embed`, injetando a lib de screenshot apenas no momento do reporte para economizar banda do usuário final.
- **Isolamento Total:** Uso de Iframes e variáveis globais encapsuladas (Namespacing) para garantir que o CSS e o JS da plataforma não entrem em conflito com o código legado dos clientes.

---

## 🛠️ Stack Tecnológica

- **Core:** TypeScript, Turborepo, Node.js, Dev Containers
- **Front-end App:** Next.js 16 (App Router), React 19
- **Front-end Widget:** React 19, Vite
- **SDK Injetável:** Vanilla TS, Vite (Library Mode/UMD)
- **Estilização & UI:** Tailwind CSS, Shadcn UI, Lucide Icons

---

## 🐳 Como Executar o Projeto Localmente (Dev Container)

Este projeto está configurado para rodar inteiramente dentro de um **Dev Container**, garantindo um ambiente de desenvolvimento padronizado sem a necessidade de instalar Node.js ou gerenciadores de pacotes na sua máquina local.

### Pré-requisitos

- [Docker](https://www.docker.com/) instalado e rodando.
- [Visual Studio Code](https://code.visualstudio.com/) com a extensão **Dev Containers** (`ms-vscode-remote.remote-containers`) instalada.

### Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/cVitorAndrade/b2b-feedback-widget.git
```

2. Abra a pasta do projeto no VS Code. Uma notificação aparecerá no canto inferior direito perguntando se deseja reabrir na pasta do contêiner. Clique em **Reopen in Container** (ou use a Command Palette `F1` > _Dev Containers: Reopen in Container_).
3. O VS Code construirá o contêiner e instalará automaticamente todas as dependências do monorepo via `pnpm`.
4. Configure as variáveis de ambiente baseando-se no arquivo de exemplo:

```bash
cp apps/dashboard/.env.example apps/dashboard/.env
```

5. Para rodar todo o ecossistema (Dashboard, Widget e compilar o Embed) simultaneamente, abra o terminal integrado do contêiner e execute:

```bash
pnpm dev
```

Se desejar rodar aplicações isoladas:

```bash
pnpm dev --filter dashboard
pnpm dev --filter docs
pnpm dev --filter widget
pnpm dev --filter embed
```

---

## 👨‍💻 Autor

**Carlos Vitor** _Desenvolvedor Full Stack | Estudante de Engenharia de Software_

[LinkedIn](https://www.linkedin.com/in/carlos-vitor-861813265/) • [Portfólio](https://cvitorandrade.vercel.app/)
