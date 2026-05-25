# AgendaEdu

AgendaEdu e uma aplicacao web serverless para cadastro, consulta, filtros e priorizacao de compromissos escolares. A stack atual usa Next.js no frontend e no backend, com API implementada por Route Handlers em `src/app/api`.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Aplicacao web | Next.js App Router |
| Backend serverless | Next.js Route Handlers |
| UI | React |
| Armazenamento inicial | Memoria do runtime serverless |
| Build | `next build` |
| Documentacao | Markdown e Mermaid |

## Arquitetura

```text
Usuario -> Next.js Page -> React Client Components -> /api/*
                                      |              -> Route Handlers
                                      |              -> Servico de dominio
                                      |              -> Store em memoria
```

Documentos principais:

- `docs/arquitetura-serverless-nextjs.md`
- `docs/especificacao-serverless-nextjs.md`
- `docs/plano-execucao-serverless-nextjs.md`
- `docs/migracao-serverless-nextjs.md`
- `docs/diagrams/serverless-nextjs.mmd`
- `docs/diagrams/fluxo-priorizacao-serverless.mmd`

A documentacao anterior foi arquivada em `docs/descontinuado/`.

## Execucao Local

```powershell
cd frontend
npm install
npm run dev
```

Acesse:

```text
http://127.0.0.1:3000
```

API de saude:

```text
http://127.0.0.1:3000/api/health
```

Tambem e possivel usar:

```powershell
.\scripts\dev.ps1
```

ou:

```bash
./scripts/dev.sh
```

## Endpoints

| Metodo | Rota | Uso |
| --- | --- | --- |
| `GET` | `/api/health` | Verificar saude da aplicacao |
| `POST` | `/api/appointments` | Criar compromisso |
| `GET` | `/api/appointments` | Listar e filtrar compromissos |
| `GET` | `/api/appointments/priority-plan` | Gerar plano de prioridades |
| `GET` | `/api/appointments/{id}` | Consultar compromisso por ID |

## Validacao

```powershell
cd frontend
npm run build
```

Observacao: o armazenamento atual e em memoria para manter o escopo serverless simples e demonstravel. Em producao, a evolucao recomendada e trocar o store por banco serverless, como Neon Postgres.
