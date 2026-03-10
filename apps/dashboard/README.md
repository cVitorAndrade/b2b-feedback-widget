# 📊 Dashboard - Plataforma B2B Feedback & Monitoring SaaS

Este é o **Painel Administrativo B2B**, a aplicação principal onde as empresas (nossos clientes) acessam a plataforma para gerenciar, configurar e analisar os feedbacks recebidos através do widget injetado em seus sites.

Construído com **Next.js (App Router)**, este painel prioriza performance, SEO interno (quando aplicável) e uma experiência de usuário (UX) fluida para análises de dados complexos.

---

## ✨ Funcionalidades Principais (Visão de Produto)

- **Autenticação e Autorização:** Login seguro para empresas e gestão de sessões.
- **Setup do Widget:** Geração dinâmica do snippet (`<script>`) com o `clientId` único para o cliente colar em seu site.
- **Customização Visual:** Interface para o cliente alterar cores, textos e comportamentos do widget em tempo real.
- **Caixa de Entrada (Inbox):** Visualização em tempo real dos feedbacks, bugs e prints (screenshots) enviados pelos usuários finais.
- **Analytics:** Dashboards com métricas de satisfação, volume de chamados e informações de ambiente (navegador, OS, resolução).

---

## 🛠️ Stack Tecnológica

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Roteamento:** App Router (`/app`)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes Base:** [Shadcn UI](https://ui.shadcn.com/) (Importados do nosso pacote interno)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Validação de Dados:** Zod + React Hook Form *(Planejado)*

---

## 🏗️ Estrutura de Pastas

A arquitetura segue as melhores práticas do Next.js App Router, separando claramente o roteamento da lógica de UI:

```text
apps/dashboard/
├── src/
│   ├── app/                # Roteamento baseado em arquivos (App Router)
│   │   ├── (auth)/         # Grupo de rotas públicas (Login, Register)
│   │   ├── (dashboard)/    # Grupo de rotas privadas (Dashboard, Settings, Inbox)
│   │   ├── layout.tsx      # Layout global da aplicação
│   │   └── page.tsx        # Landing page ou redirecionamento
│   ├── components/         # Componentes específicos do Dashboard (não genéricos)
│   ├── lib/                # Funções utilitárias, formatação e clientes de API
│   └── types/              # Definições de tipagem TypeScript específicas deste app
├── public/                 # Assets estáticos (imagens, favicons)
├── tailwind.config.ts      # Configuração local do Tailwind
└── next.config.mjs         # Configurações de build e execução do Next.js

```

---

## 🚀 Desenvolvimento Local

Como esta aplicação faz parte de um **Monorepo (Turborepo)**, o gerenciamento de dependências é centralizado.

### 1. Instalação e Configuração

Certifique-se de ter rodado `pnpm install` na **raiz** do monorepo. Em seguida, crie seu arquivo de variáveis de ambiente:

```bash
cd apps/dashboard
cp .env.example .env.local

```

*(Preencha as variáveis necessárias no `.env.local` antes de rodar a aplicação).*

### 2. Rodando o Servidor

Para iniciar apenas o Dashboard em modo de desenvolvimento, utilize o filtro do Turborepo a partir da raiz do projeto:

```bash
pnpm dev --filter dashboard

```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

---

## 📦 Dependências Internas (Monorepo)

Este aplicativo não vive isolado. Ele consome os seguintes pacotes internos do nosso workspace:

* `@repo/ui`: Biblioteca unificada de componentes React (Shadcn + Tailwind). Garante consistência visual entre o Dashboard e o Widget.
* `@repo/eslint-config`: Regras padronizadas de linting para manter a qualidade do código.
* `@repo/typescript-config`: Configurações base do `tsconfig.json`.

---

## 🚢 Deploy

A aplicação está otimizada para deploy na **Vercel**. O Turborepo já está configurado para entender que o build do `dashboard` depende do build dos pacotes internos, garantindo uma esteira de CI/CD à prova de falhas.

O comando de build isolado é:

```bash
pnpm build --filter dashboard
```
