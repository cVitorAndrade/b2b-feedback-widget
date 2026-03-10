# 📚 Portal de Documentação - B2B Feedback & Monitoring SaaS

Bem-vindo ao repositório do **Portal de Documentação**. Este aplicativo é a face pública da nossa plataforma para os desenvolvedores e equipes técnicas dos nossos clientes. 

O objetivo deste portal é fornecer um *onboarding* sem atritos (Self-Service), oferecendo guias de instalação claros, referências da API do SDK e tutoriais de customização do Widget, reduzindo drasticamente a carga da equipe de suporte.

---

## 🎯 Objetivo e Público-Alvo

- **Público:** Desenvolvedores (Engenheiros Front-end/Full Stack) que trabalham nas empresas clientes.
- **Missão:** Explicar a arquitetura de injeção assíncrona, fornecer snippets de código prontos para copiar e colar, e documentar os eventos disponíveis para integração profunda (ex: capturar callbacks de sucesso do feedback).

---

## 🛠️ Stack Tecnológica

Mantendo a sinergia com o resto do ecossistema, este portal é construído com foco em performance estática e facilidade de autoria de conteúdo:

- **Framework:** [Next.js](https://nextjs.org/)
- **Content Engine:** [Nextra](https://nextra.site/) ou [MDX](https://mdxjs.com/) *(Processamento de Markdown com componentes React embutidos)*
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) + Componentes do `@repo/ui`
- **Busca:** Integração fluida para busca de texto completo na documentação.

---

## 🏗️ Estrutura de Pastas e Conteúdo

A organização segue a jornada clássica de um desenvolvedor integrando uma nova ferramenta:

```text
apps/docs/
├── src/
│   ├── app/                    # Roteamento e layouts estruturais
│   ├── components/             # Componentes interativos da doc (ex: CodeBlocks, abas)
│   └── content/                # 📝 Os arquivos Markdown (.mdx) reais
│       ├── getting-started/    # O "Guia de 5 minutos" (Instalação via Snippet)
│       ├── sdk-reference/      # Métodos do window.B2BFeedbackWidget (init, captureLog)
│       ├── advanced/           # Lazy loading, CSP (Content Security Policy), Iframes
│       └── components/         # Customização visual avançada do widget
├── public/                     # Diagramas de arquitetura e assets visuais
└── next.config.mjs             # Configuração otimizada para SSG (Static Site Generation)
```

---

## 🚀 Desenvolvimento Local

Por fazer parte do nosso Monorepo (Turborepo) rodando em um **Dev Container**, a inicialização é unificada e sem fricção.

Para rodar apenas o portal de documentação em modo de desenvolvimento, utilize o filtro do Turborepo no terminal do seu contêiner:

```bash
pnpm dev --filter docs
```

O portal estará disponível em [http://localhost:3002](https://www.google.com/search?q=http://localhost:3001) *(ou a porta designada)*.

### Escrevendo Documentação

Basta adicionar ou editar os arquivos `.mdx` dentro da pasta `content/`. O Hot Reload do Next.js cuidará de atualizar o navegador instantaneamente, permitindo que você escreva guias e veja o resultado em tempo real.

---

## 🚢 Deploy (Static Site Generation)

O portal de documentação é focado em SEO técnico e velocidade de carregamento. No processo de CI/CD, este aplicativo é tipicamente construído como um site estático (SSG), garantindo respostas ultrarrápidas distribuídas via CDN (ex: Vercel, Cloudflare Pages).

Comando de build isolado:

```bash
pnpm build --filter docs
```