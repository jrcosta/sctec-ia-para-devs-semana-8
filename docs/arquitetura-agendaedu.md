# Arquitetura do AgendaEdu

Documento vigente: `docs/arquitetura-serverless-nextjs.md`.

A arquitetura atual e fullstack Next.js:

- UI em React no App Router.
- Backend em Route Handlers sob `frontend/src/app/api`.
- Regra de negocio em `frontend/src/lib/agendaedu/appointments.js`.
- Store inicial em memoria do runtime.

Diagramas vigentes:

- `docs/diagrams/serverless-nextjs.mmd`
- `docs/diagrams/fluxo-priorizacao-serverless.mmd`

A versao anterior desta documentacao foi arquivada em `docs/descontinuado/arquitetura-agendaedu.md`.
