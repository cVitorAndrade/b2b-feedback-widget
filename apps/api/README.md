# ⚙️ API Core - Backend de Processamento (Clean Architecture)

Bem-vindo ao **Core Backend** da plataforma. Esta API RESTful atua como o motor do nosso SaaS B2B, responsável por receber eventos do Widget nos sites clientes e fornecer dados consolidados para o nosso Dashboard administrativo.

O projeto foi rigorosamente desenhado utilizando **Clean Architecture** combinada com **Design Modular**, garantindo alto isolamento das regras de negócio, facilidade de testes e escalabilidade sustentável.

---

## 🏗️ Arquitetura e Estrutura de Pastas

A base de código é dividida em módulos independentes (`modules`) e recursos globais (`shared`). Cada módulo possui suas próprias camadas estritas, respeitando a Regra de Dependência: o domínio não conhece a infraestrutura.

```text
apps/api/
├── src/
│   ├── modules/
│   │   └── user/               # Exemplo de Módulo Isolado
│   │       ├── domain/         # 🧠 Entidades, Value Objects e Regras de Negócio puras.
│   │       ├── application/    # ⚙️ Casos de Uso (Use Cases), DTOs e Interfaces (Portas).
│   │       └── infra/          # 🔌 Controllers, Rotas e Repositórios (Prisma, HTTP).
│   │
│   └── shared/                 # Recursos transversais a toda a aplicação
│       ├── domain/             # Classes base (ex: BaseEntity, CustomErrors).
│       ├── application/        # Contratos de Provedores (ex: IStorageProvider, ILogger).
│       └── infra/              # Implementações de provedores (ex: AWS S3), Middlewares e server.ts.
│
├── .env.example                # Exemplo de variáveis de ambiente
├── package.json
└── tsconfig.json

```

---

## 🛠️ Stack Tecnológica

* **Runtime:** Node.js
* **Framework REST:** Fastify (Alta performance e baixa latência)
* **Banco de Dados & ORM:** PostgreSQL + Prisma ORM
* **Validação de Dados:** Zod (Integração tipada com os Casos de Uso)
* **Injeção de Dependência:** (Padrão de containers/módulos na camada de Infra)

---

## 🐳 Desenvolvimento Local (Dev Container)

Como parte do nosso Monorepo, a API e seu banco de dados rodam perfeitamente isolados dentro do Dev Container.

1. Configure suas variáveis de ambiente locais:

```bash
cp .env.example .env

```

2. Certifique-se de que o container do banco de dados está rodando e execute as migrations do Prisma (a partir da raiz do monorepo):

```bash
pnpm --filter api prisma migrate dev

```

3. Inicie o servidor em modo de desenvolvimento:

```bash
pnpm dev --filter api

```

A API estará respondendo em `http://localhost:3333` (ou porta configurada).

---

## 🔒 Princípios Adotados

* **Dependency Inversion Principle (DIP):** Casos de uso dependem de abstrações (interfaces na `application`), nunca de implementações diretas. A injeção ocorre na inicialização da `infra`.
* **Encapsulamento:** Módulos não acessam o banco de dados de outros módulos diretamente. A comunicação inter-módulos é feita através dos Casos de Uso.