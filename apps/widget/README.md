# 🎨 Widget - SPA de Feedback (Interface do Usuário)

Este é o **coração visual** da plataforma no lado do cliente. Uma aplicação **React 19** ultra-leve, construída com **Vite**, projetada para ser carregada exclusivamente dentro de um `<iframe>` injetado pelo nosso SDK (`apps/embed`) nos sites das empresas parceiras.

É através desta interface que os usuários finais enviam seus feedbacks, reportam bugs e anexam capturas de tela.

---

## ✨ Características de Engenharia

- **Isolamento Total (Sandboxing):** Rodar dentro de um Iframe garante que o CSS (Tailwind) e o JavaScript do nosso Widget nunca entrem em conflito com o código legado ou os estilos globais do site do cliente.
- **Comunicação Cross-Origin Segura:** Como o Widget é "cego" para o site pai devido à *Same-Origin Policy*, toda a interação (como pedir uma captura de tela do site) é feita através de um barramento de eventos rigorosamente tipado usando `window.postMessage`.
- **Performance Extrema:** Build otimizado via Vite, garantindo um bundle minúsculo que carrega quase instantaneamente sem penalizar o Core Web Vitals do cliente.
- **Customização Dinâmica:** Capaz de adaptar cores, textos e temas recebendo o estado de configuração injetado pelo SDK no momento da inicialização.

---

## 🛠️ Stack Tecnológica

- **Framework:** [React 19](https://react.dev/)
- **Bundler:** [Vite](https://vitejs.dev/) (Builds super rápidos e HMR instantâneo)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Base:** [Shadcn UI](https://ui.shadcn.com/) (Consumindo o pacote interno `@repo/ui`)

---

## 🏗️ Estrutura de Pastas

A arquitetura foca na separação entre a UI e a complexa camada de mensageria com o site pai:

```text
apps/widget/
├── src/
│   ├── components/         # Componentes visuais (Formulários, Botões, Telas de Sucesso)
│   ├── hooks/              # Hooks customizados (ex: usePostMessage, useTheme)
│   ├── lib/                # Funções utilitárias e formatações
│   ├── types/              # Contratos de tipagem (Compartilhados idealmente com o Embed)
│   │   └── events.ts       # Enums e interfaces para o postMessage (ex: WidgetEvent)
│   ├── App.tsx             # Ponto de entrada, gerencia as rotas internas ou estados da UI
│   └── main.tsx            # Inicialização do React no DOM
├── index.html              # O HTML base que o Iframe carrega
├── tailwind.config.ts      # Configuração local do Tailwind
└── vite.config.ts          # Configuração de build e plugins do Vite

```

---

## 🔄 Fluxo de Comunicação (PostMessage)

O Widget atua como o "Rosto", enquanto o Embed atua como o "Músculo". Quando o usuário precisa de algo do site cliente, o fluxo ocorre assim:

1. **Ação do Usuário:** O usuário clica em "Anexar Print".
2. **Requisição (Widget -> Embed):** O React envia um `postMessage` solicitando a imagem.
3. **Processamento (Embed):** O script pai tira o print usando *Lazy Loading*.
4. **Resposta (Embed -> Widget):** O pai devolve a imagem em Base64.
5. **Renderização:** O React exibe o preview da imagem no formulário.

---

## 🐳 Desenvolvimento Local (Dev Container)

O ambiente de desenvolvimento está integrado ao nosso **Dev Container** (Docker) via Turborepo, garantindo zero atrito de configuração.

Para rodar apenas a interface do Widget isoladamente (ideal para focar no CSS e nos componentes):

```bash
pnpm dev --filter widget
```

A interface estará disponível em: [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173).

*(Nota: Ao testar isoladamente, os recursos que dependem do `embed` via postMessage precisarão ser mockados).*

---

## 🚢 Build para Produção

O comando de build gera os ativos estáticos (`HTML`, `JS`, `CSS`) na pasta `dist`, prontos para serem servidos por uma CDN (como AWS CloudFront, Vercel ou Cloudflare) e carregados pelo Iframe.

```bash
pnpm build --filter widget
```