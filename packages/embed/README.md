# 🔌 Embed SDK - O "Agente" de Injeção

Este pacote é o **ponto de entrada (Entrypoint)** da nossa plataforma nos sites dos clientes. É um script ultra-leve, escrito em **Vanilla TypeScript**, projetado para ser injetado no `<head>` das páginas alvo.

Sua principal responsabilidade é atuar como uma "ponte segura" entre o site do cliente (Host) e a nossa interface React (Widget), garantindo zero impacto na performance (Core Web Vitals) do site hospedeiro.

---

## ✨ Princípios de Engenharia e Padrões

Como este script roda em ambientes de terceiros, ele obedece a regras estritas de desenvolvimento:

- **Zero-Blocking (Async Proxy Pattern):** Utiliza um *Snippet Loader* assíncrono. Os clientes podem chamar métodos (como `init` ou `captureLog`) instantaneamente, mesmo antes do script principal terminar de baixar da rede. Os comandos são guardados em uma fila (`Command Queue`) e processados quando o Core estiver pronto.
- **Cross-Origin Segura (`postMessage`):** Atua como o "Pai" na relação com o Iframe do Widget. Centraliza o envio e a escuta de eventos, validando rigorosamente a origem (`event.origin`) para evitar ataques de XSS.
- **Isolamento de Estado (Namespacing):** Todas as funções e variáveis globais são encapsuladas no objeto `window.B2BFeedbackWidget`, evitando colisões e sobrescritas com o código legado do cliente.
- **Lazy Loading de Recursos Pesados:** Bibliotecas de terceiros (como o `html2canvas` para capturas de tela) **não** são embutidas no bundle inicial. Elas são baixadas sob demanda apenas se o usuário final solicitar um print da tela, mantendo o peso inicial do script na casa dos ~5kb.
- **Monkey Patching Seguro:** Intercepta APIs nativas (como `console.log`) de forma não destrutiva para gerar uma "Caixa Preta" de logs, sempre chamando o método original logo em seguida.

---

## 🛠️ Stack Tecnológica

- **Linguagem:** Vanilla TypeScript (Sem frameworks para garantir o menor tamanho possível).
- **Bundler:** [Vite](https://vitejs.dev/) configurado em **Library Mode**.
- **Formato de Saída:** UMD (Universal Module Definition), garantindo compatibilidade universal com `<script>` tags diretamente no navegador.
- **Minificação:** Terser (compressão agressiva de variáveis e remoção de comentários).

---

## 🏗️ Estrutura de Pastas Modular

O código abandona o modelo monolítico e divide responsabilidades por domínio técnico:

```text
apps/embed/
├── src/
│   ├── core/               # Orquestração principal
│   │   └── WidgetManager.ts# Cria o Iframe, processa a fila de comandos e gerencia o ciclo de vida
│   ├── modules/            # Funcionalidades isoladas
│   │   ├── Logger.ts       # Interceptação de console e buffer de erros globais
│   │   └── Screenshot.ts   # Injeção dinâmica (Lazy Load) do html2canvas e captura do DOM
│   ├── utils/              # Ferramentas transversais
│   │   └── messenger.ts    # Abstração segura do window.postMessage com validação de origem
│   ├── types/              # Contratos rigorosos
│   │   └── events.ts       # Enums e Interfaces (Compartilhados com o apps/widget)
│   └── main.ts             # Entrypoint real: Lê o buffer inicial e instancia o WidgetManager
├── vite.config.ts          # Configurações do Library Mode e CSS Injection
└── tsconfig.json           # Tipagem baseada em DOM e ES2015+
```

---

## 🚀 Desenvolvimento Local (Dev Container)

O ambiente de desenvolvimento se beneficia do servidor do Vite em tempo real, sem necessidade de build manual a cada alteração.

1. Inicie o servidor via Turborepo no terminal do contêiner:

```bash
pnpm dev --filter embed
```

2. Em ambiente de desenvolvimento, o Vite injeta o código via `type="module"`. Um HTML de teste local apontará para `http://localhost:5174/src/main.ts` para habilitar o Hot Module Replacement (HMR).

---

## 📦 Build e Distribuição (Produção)

O processo de build gera um arquivo único (`dist/embed.js`), onde o CSS base de estruturação do Iframe já é injetado dinamicamente via JavaScript, exigindo que o cliente adicione **apenas uma linha** de código no site dele.

```bash
pnpm build --filter embed
```

### Exemplo de Uso (O que o cliente cola no site):

```html
<script>
  (function(w,d,s,l,i){w[l]=w[l]||{};w[l]._c=[];w[l].init=function(c){w[l]._c.push(['init',c])};
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;
  j.src='[https://cdn.seu-saas.com/embed.js';f.parentNode.insertBefore(j,f](https://cdn.seu-saas.com/embed.js';f.parentNode.insertBefore(j,f));
  })(window,document,'script','B2BFeedbackWidget');

  // Inicialização imediata (sem bloqueio)
  B2BFeedbackWidget.init({ clientId: 'cl_12345' });
</script>
```