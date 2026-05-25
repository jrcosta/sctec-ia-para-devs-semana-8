# Arquitetura Serverless Next.js

## Decisao

O AgendaEdu passa a ser uma aplicacao fullstack em Next.js. A interface continua em React e as rotas de API agora vivem em `frontend/src/app/api` como Route Handlers serverless.

## Componentes

| Componente | Responsabilidade |
| --- | --- |
| `src/app/page.jsx` | Entrada da tela principal |
| `src/App.jsx` | Orquestracao de estado da UI |
| `src/components/*` | Formulario, filtros, lista e plano de prioridades |
| `src/services/api.js` | Cliente HTTP para `/api` |
| `src/app/api/*/route.js` | Backend serverless |
| `src/lib/agendaedu/appointments.js` | Validacao, filtros, store e regra de priorizacao |

## Fluxo

1. O usuario interage com a tela em `http://127.0.0.1:3000`.
2. Os componentes chamam `src/services/api.js`.
3. O cliente usa rotas relativas, como `/api/appointments`.
4. Os Route Handlers executam validacao e regra de negocio no runtime do Next.js.
5. A resposta JSON volta para a UI sem depender de CORS ou de um servidor separado.

## Persistencia

O ciclo atual usa memoria do runtime para demonstracao. Esse modelo e suficiente para execucao local e avaliacao funcional, mas nao garante durabilidade entre reinicios, builds ou novas instancias serverless.

Evolucao recomendada:

- Neon Postgres para persistencia serverless.
- Prisma ou Drizzle para camada de dados.
- Testes de contrato para preservar o formato dos endpoints.

## Diagramas

- `docs/diagrams/serverless-nextjs.mmd`
- `docs/diagrams/fluxo-priorizacao-serverless.mmd`
